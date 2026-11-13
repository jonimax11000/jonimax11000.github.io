---
name: awesome-ui-standards
description: Directrices maestras de diseño visual y UI/UX de alto impacto (Awesome UI). Aplica paletas HSL armoniosas, modo oscuro elegante, tipografía moderna, micro-interacciones fluidas, glassmorphism y prevención de interfaces vacías o placeholders.
---

# Directrices Globales de Diseño UI/UX y Estándares Visuales (Awesome UI)

Este documento es una **regla activa permanente** para el asistente de IA al diseñar, planificar o generar interfaces de usuario (web, desktop, canvas o componentes).

## 1. Filosofía de Diseño: "Impacto Visual y Pulido Premium"
- **Prohibido lo Genérico:** Nunca recurras a paletas de colores HTML por defecto (`#FF0000`, `#0000FF`, `#00FF00`) ni layouts esquemáticos que parezcan borradores o plantillas sin terminar.
- **Sin Placeholders Vacíos:** No utilices cajas grises vacías ni textos simulados descuidados. Las interfaces deben verse completas, semánticas y vivas.

## 2. Paletas de Color y Armonía Cromática
- **Escalas HSL y Modo Oscuro:**
  - Fondos principales: tonos oscuros profundos y neutros (ej. `hsl(222, 47%, 11%)` o grafito suave), nunca negro puro `#000000` absoluto a menos que sea deliberado (OLED).
  - Superficies elevadas (*cards*, modales, barras laterales): contrastadas sutilmente (`hsl(222, 47%, 15%)` a `hsl(222, 47%, 18%)`).
  - Acentos visuales calibrados: cian luminoso (`hsl(190, 95%, 50%)`), esmeralda suave (`hsl(150, 80%, 45%)`), violeta moderno (`hsl(265, 85%, 65%)`).
- **Accesibilidad y Contraste:** Asegurar ratios de contraste WCAG AA/AAA entre texto y fondo.

## 3. Tipografía de Vanguardia
- **Fuentes Modernas:** Usa tipografías sans-serif limpias y legibles: *Inter*, *Geist*, *Outfit*, *Roboto*, o monoespaciadas legibles para código (*Fira Code*, *JetBrains Mono*).
- **Jerarquía Tipográfica Estricta:**
  - Títulos (`h1`, `h2`): `font-weight: 600` / `700` con `letter-spacing: -0.02em` para mayor solidez.
  - Subtítulos y etiquetas: `font-weight: 500` con contraste de color atenuado.
  - Cuerpo de texto: `font-weight: 400`, `line-height: 1.5` a `1.6` para máxima legibilidad.

## 4. Dinamismo, Micro-interacciones y Feedback
- **Feedback Inmediato:** Todo botón, enlace o tarjeta cliqueable debe reaccionar visualmente al `:hover`, `:active` y `:focus-visible`.
- **Transiciones Suaves:** Aplica curvas de aceleración naturales (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);`).
- **Estados de Carga Elegantes:** Usa animaciones de *skeleton loaders* pulsantes o spinners sutiles en lugar de bloquear o congelar la vista.

## 5. Profundidad, Texturas y Acabado
- **Bordes y Radios Consistentes:** Unifica los radios de curvatura (`border-radius: 8px` para inputs/botones, `12px` a `16px` para tarjetas y modales).
- **Sombras Multinivel:** Sombras suaves difusas (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.4)`).
- **Glassmorphism Sutil:** Si el diseño lo requiere, utiliza desenfoque de fondo (`backdrop-filter: blur(12px); background: rgba(..., 0.75); border: 1px solid rgba(255, 255, 255, 0.08);`).
