---
name: estandares_diseno
description: Reglas de estética visual, tipografía, micro-interacciones, acabado premium y auditoría DOM con ChromeDevTools MCP.
domains: [frontend, ui, ux, web, css, diseno, diseño, interfaz, html, react, vue, tailwind, estilos]
tools_requeridas: [ChromeDevTools]
always_apply: false
---

# ESTÁNDARES DE DISEÑO VISUAL Y AUDITORÍA FRONTEND

1. **Estética y Paleta de Colores**:
   - Usa escalas HSL o paletas armoniosas en modo oscuro elegante (evita colores primarios saturados puros como #FF0000 o #00FF00 sin graduación).
   - Diseña interfaces con contraste accesible (WCAG AA/AAA).
   - Prefiere temas modernos con acentos bien calibrados (ej. azul cian, violeta profundo, esmeralda suave o grafito).

2. **Tipografía Moderna**:
   - Usa fuentes modernas y legibles sin remates (ej. Inter, Roboto, Outfit, Geist, o Fira Code para snippets de código).
   - Jerarquía tipográfica clara de tamaños y pesos (`font-weight: 500/600/700` para títulos y destacados, `font-weight: 400` para cuerpo de texto).
   - Altura de línea confortable (`line-height: 1.5` a `1.6`) y espaciado proporcional.

3. **Micro-interacciones y Dinamismo**:
   - Todo elemento interactivo debe tener feedback visual inmediato (`:hover`, `:active`, `:focus-visible`).
   - Transiciones suaves y rápidas (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);`).
   - Estados de carga (*skeletons* o spinners discretos) en lugar de saltos bruscos de contenido o congelamiento de UI.

4. **Acabado Premium y Profundidad**:
   - Aplica sombras sutiles multinivel (`box-shadow`) y bordes redondeados consistentes (`border-radius: 8px / 12px / 16px`).
   - Utiliza efectos como *Glassmorphism* (`backdrop-filter: blur(12px); background: rgba(..., 0.7); border: 1px solid rgba(..., 0.1);`) cuando corresponda.
   - Nada de interfaces esqueléticas o "placeholders" genéricos: genera interfaces completas, semánticas y pulidas.

5. **Auditoría Visual y Consola (Chrome DevTools MCP)**:
   - Al finalizar el desarrollo o ajuste de Frontend, utiliza las herramientas del servidor MCP de Chrome DevTools para navegar al archivo o servidor web local.
   - Revisa activamente la consola del navegador en busca de errores JavaScript, recursos 404 o advertencias de estilo.
   - Evalúa selectores clave del DOM para certificar que las clases CSS, componentes y textos se muestran correctamente estructurados y con el diseño esperado.
