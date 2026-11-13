---
name: auditoria_legal_compliance
description: Auditoría estática legal, compliance normativo (RGPD/GDPR, CCPA, Directiva ePrivacy) y preparación para Google Play Store (Data Safety, Permisos Sensibles, Borrado de Cuenta y hosting de web legal en Vercel).
domains: [legal, compliance, gdpr, rgpd, ccpa, cookies, privacy, terms, tos, google_play, android, data_safety, vercel, deploy]
tools_requeridas: [auditar_compliance_legal, gestionar_vercel]
always_apply: false
---

# WORKFLOW: AUDITORÍA LEGAL Y COMPLIANCE AUTOMÁTICO (WEB, BACKEND Y GOOGLE PLAY)

Este flujo de trabajo guía a los agentes de Jarvis en la verificación legal y la autogeneración de documentación y componentes de privacidad antes de cualquier pase a producción o publicación en tiendas.

---

## 1. Principio Fundamental: Compuerta Legal Pre-Flight

Ningún software debe desplegarse públicamente (en Vercel, servidores públicos o Google Play Store) sin verificar el cumplimiento normativo. Publicar sin política de privacidad o con cookies no consentidas acarrea responsabilidades legales, sanciones económicas o la suspensión directa de la aplicación por parte de Google Play.

---

## 2. Protocolo para Apps Móviles (Google Play Store)

Al trabajar con proyectos Android (Kotlin/Java, Flutter, React Native):

1. **Auditoría de `AndroidManifest.xml`**:
   - Ejecutar `auditar_compliance_legal(accion="auditar", target="mobile_android")`.
   - **Permisos de Alto Riesgo**: Identificar si la app solicita `ACCESS_BACKGROUND_LOCATION`, `MANAGE_EXTERNAL_STORAGE`, `READ_SMS` o `QUERY_ALL_PACKAGES`. Estos permisos requieren justificación técnica obligatoria en la consola de Google Play o deben ser eliminados si no son esenciales.
2. **Validación de `build.gradle`**:
   - Verificar que `targetSdkVersion >= 34` (Android 14+). Google Play rechaza builds con target SDK obsoleto.
   - Auditar SDKs de terceros (AdMob, Firebase, Meta Audience Network) para declarar con exactitud su telemetría.
3. **Requisito Obligatorio de Eliminación de Cuenta**:
   - Si la app cuenta con login/registro, Google Play **exige una URL pública de solicitud de borrado de cuenta**.
   - Jarvis genera automáticamente `delete-account.html`.
4. **Formulario Data Safety**:
   - Generar `google_play_data_safety.json` y consultar `docs/GOOGLE_PLAY_DATA_SAFETY.md` para completar el cuestionario de la Google Play Console.
5. **Hosting Inmediato de Páginas Legales en Vercel**:
   - Si el desarrollador móvil no tiene un servidor web para alojar su política, usar `auditar_compliance_legal(accion="desplegar_web_legal_movil")`.
   - Jarvis compilará y desplegará la web en Vercel en segundos, entregando las URLs públicas para Play Console:
     - `https://<app>-legal.vercel.app/privacy.html`
     - `https://<app>-legal.vercel.app/delete-account.html`

---

## 3. Protocolo para Frontends Web y Serverless (Vercel)

Al preparar un despliegue en Vercel o la web pública:

1. **Detección de Rastreadores y Cookies**:
   - Escanear scripts de analítica (Google Analytics, Mixpanel, Hotjar, Sentry, Facebook Pixel) y almacenamiento de sesión (`document.cookie`, `localStorage`).
2. **Generación del Kit Legal**:
   - Generar `privacy.html` (o `docs/PRIVACY.md`), `terms.html` y `cookies.html`.
3. **Banner Opt-In Real (Directiva ePrivacy & AEPD)**:
   - Integrar `cookie-banner.js` o el componente `CookieBanner.tsx`.
   - **Regla estricta:** Ningún script de seguimiento debe inicializarse hasta que el usuario pulse *"Aceptar Todas"*. Prohibido instalar cookies analíticas antes del consentimiento expreso.
4. **Integración con Vercel Manager**:
   - Al invocar `gestionar_vercel(accion="desplegar_proyecto")`, pasar `autogenerar_legal=True` para inyectar automáticamente los documentos en `public/` antes de la compilación Edge.

---

## 4. Consultas y RAG Normativo

Para aclarar dudas específicas de jurisprudencia o directrices de Google Play:
- Utilizar `auditar_compliance_legal(accion="consultar_normativa", consulta="requisitos de ubicacion en segundo plano en google play")`.
- El RAG devolverá los artículos exactos del RGPD, requisitos de Play Store o regulaciones de la CCPA aplicables.
