#!/usr/bin/env node
/**
 * Sync Portfolio Data Script (GitHub Actions / CLI)
 * Synchronizes repository metadata, programming languages, and branches from GitHub API
 * while preserving rich curated bilingual descriptions and enforcing privacy rules
 * (excluded repos & private repo URL stripping).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECTS_FILE = path.join(__dirname, '..', 'src', 'data', 'projects.json');
const OWNER = process.env.GITHUB_OWNER || 'jonimax11000';
const TOKEN = process.env.PORTFOLIO_PAT || process.env.GITHUB_TOKEN || '';

const EXCLUDED_REPOS = new Set([
  'practicas',
  'certificados',
  'Portfolio',
  'jonimax11000',
  'jonimax11000.github.io',
]);

async function ghFetch(endpoint) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'Jarvis-Portfolio-Sync-Action',
  };
  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`;
  }
  const res = await fetch(`https://api.github.com${endpoint}`, { headers });
  if (!res.ok) return null;
  return res.json();
}

async function main() {
  const existingData = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));
  const existingByRepo = new Map(
    existingData.projects.map((p) => [p.repoName.toLowerCase(), p])
  );

  // Fetch repos (if PORTFOLIO_PAT is configured, /user/repos includes private repos)
  let repos = await ghFetch('/user/repos?per_page=100&affiliation=owner&sort=updated');
  if (!Array.isArray(repos)) {
    repos = await ghFetch(`/users/${OWNER}/repos?per_page=100&sort=updated`);
  }
  if (!Array.isArray(repos)) {
    console.log('[sync] Could not reach GitHub API; keeping existing projects.json.');
    return;
  }

  for (const r of repos) {
    if (r.fork || EXCLUDED_REPOS.has(r.name)) continue;

    const key = r.name.toLowerCase();
    const langsObj = await ghFetch(`/repos/${OWNER}/${r.name}/languages`);
    const apiLangs = langsObj && typeof langsObj === 'object' ? Object.keys(langsObj) : [];

    const branchesArr = await ghFetch(`/repos/${OWNER}/${r.name}/branches?per_page=100`);
    const apiBranches = Array.isArray(branchesArr) ? branchesArr.map((b) => b.name) : ['main'];

    const isPrivate = Boolean(r.private);
    const safeUrl = isPrivate ? '' : r.html_url || '';

    if (existingByRepo.has(key)) {
      const entry = existingByRepo.get(key);
      entry.private = isPrivate;
      entry.url = safeUrl; // Never expose URL for private repositories
      if (apiLangs.length > 0 && entry.repoName !== 'Odoo') {
        entry.languages = Array.from(new Set([...entry.languages, ...apiLangs]));
      }
      if (apiBranches.length > 0) {
        entry.branches = apiBranches;
      }
      if (r.pushed_at) {
        entry.updatedAt = r.pushed_at.slice(0, 10);
      }
    } else {
      // Newly created repository discovered automatically
      const desc = r.description || `Proyecto de ingeniería de software (${r.name}).`;
      existingData.projects.push({
        id: key.replace(/[^a-z0-9]+/g, '-'),
        name: r.name,
        repoName: r.name,
        featured: existingData.featuredOrder.includes(r.name),
        private: isPrivate,
        url: safeUrl,
        demoUrl: r.homepage || '',
        category: 'Software Engineering',
        updatedAt: (r.pushed_at || new Date().toISOString()).slice(0, 10),
        languages: apiLangs.length > 0 ? apiLangs : ['Python'],
        technologies: r.topics && r.topics.length > 0 ? r.topics : apiLangs,
        branches: apiBranches,
        summary: {
          es: desc,
          en: r.description || `Software engineering repository (${r.name}).`,
        },
        highlights: {
          es: ['Sincronizado automáticamente por el motor de portfolio de Jarvis.'],
          en: ['Automatically synchronized by the Jarvis portfolio engine.'],
        },
      });
    }
  }

  existingData.lastUpdated = new Date().toISOString();
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(existingData, null, 2) + '\n', 'utf-8');
  console.log(`[sync] Updated ${PROJECTS_FILE} (${existingData.projects.length} projects).`);
}

main().catch((err) => {
  console.error('[sync] Error:', err);
  process.exit(0);
});

