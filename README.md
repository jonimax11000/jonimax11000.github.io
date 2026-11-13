# Jonathan David Signes Falcó — Portfolio Oficial (`jonimax11000.github.io`)

Portfolio de Ingeniería de Software bilingüe (**🇪🇸 Español / 🇬🇧 Inglés**) desarrollado con **Astro SSG**, optimizado para **SEO técnico profesional** y **Accesibilidad Legal Internacional (UE EN 301 549 / EAA & EE. UU. ADA / Section 508 · WCAG 2.1/2.2 AA/AAA)**, y sincronizado automáticamente con **Jarvis**.

## Características Principales

- **Arquitectura Data-Driven con Jarvis (`l:/jarvis`)**:
  - Actualización automática diaria (opcional en `config.json` para que otros usuarios de Jarvis no sobrescriban el portfolio).
  - Inspección profunda multi-rama (incluyendo todos los módulos de `Odoo` 19.0: `cookast_19.0`, `cookast_ai_19.0`, `cookast_weather_19.0`, `shift_planner_19.0`) y extracción desde LinkedIn (`data/mi_perfil.json`).
  - Privacidad garantizada: exclusión estricta de repositorios sensibles (`practicas`, `certificados`) y ocultación total de URLs en repositorios privados.
- **SEO Técnico Profesional**:
  - Generación 100% estática (SSG) con rutas paginadas reales (`/proyectos/1..4` y `/en/projects/1..4`).
  - Datos estructurados **JSON-LD (`Schema.org`)**: `ProfilePage`, `Person`, `WebSite` e `ItemList` de `SoftwareSourceCode`.
  - Etiquetas `canonical`, `hreflang="es-ES"`, `hreflang="en-GB"`, `hreflang="x-default"`, `rel="prev"` / `rel="next"`, Open Graph, `sitemap-index.xml` y `robots.txt`.
- **Accesibilidad Legal (UE & EE. UU.)**:
  - Selector de Modo Claro / Oscuro y Alto Contraste (WCAG AAA).
  - Filtros de asistencia para **Daltonismo** (*Protanopia*, *Deuteranopia*, *Tritanopia*, *Acromatopsia*) + indicadores visuales no dependientes del color.
  - Escalado tipográfico (`100%`, `112%`, `125%`), fuente/espaciado para dislexia, reducción de movimiento y navegación completa por teclado.

## Comandos

```bash
npm install
npm run dev      # Servidor de desarrollo local
npm run build    # Compilación estática en ./dist
npm run preview  # Previsualizar build de producción
```
