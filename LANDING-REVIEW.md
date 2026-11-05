# Criterio para la landing de EQUITAS

Revisión: 5 de noviembre de 2026. Objetivo: continuar el pitch desde un QR, explicar la propuesta en pocos pasos y permitir contactar al equipo.

## Qué necesita esta landing

| Criterio | Aplicación en EQUITAS |
| --- | --- |
| Propósito comprensible al entrar | Categoría explícita, título breve y explicación de qué propone hacer EQUITAS. |
| Audiencia definida | Municipios, organismos públicos y organizaciones con carteras de deuda, visibles desde la primera sección. |
| Una acción principal | Contactar al equipo. Los llamados a la acción llevan a una misma sección con WhatsApp. |
| Beneficio y funcionamiento concretos | Tres pasos: reunir información, reconocer perfiles y orientar acciones; con el resultado esperado de cada paso. |
| Ejemplo que facilite entender | Tres perfiles seleccionables, identificados como conceptuales. La primera explicación también funciona sin JavaScript. |
| Confianza basada en hechos | Origen académico en Ingeniería en Sistemas de la UCC; sin inventar testimonios, clientes, porcentajes o disponibilidad comercial. |
| Respuestas a dudas | Preguntas frecuentes sobre audiencia, alcance académico, ejemplos y cómo participar. |
| Contacto con poca fricción | WhatsApp directo al número proporcionado, mensaje preparado, número visible y opción de copiar. Sin formulario que no envíe nada. |
| Experiencia móvil y accesible | Columnas adaptables, controles de al menos 44 px de alto, foco visible, enlace para saltar al contenido, HTML semántico y movimiento reducido. |
| Carga sencilla y presentación al compartir | CSS y JS locales pequeños, fuentes del sistema, sin dependencias externas, metadatos de título y descripción y favicon local. |

Esta selección aplica las guías al contexto de un pitch. No todas las landing necesitan precios, videos, formularios, testimonios o una lista extensa de funciones. Esos elementos solo aportan cuando hay contenido real y ayudan al visitante a decidir.

## Problemas encontrados en la versión anterior

- La sección de contacto tenía como única acción volver al inicio.
- El logo y el favicon apuntaban a archivos inexistentes.
- La propuesta se repetía en varias secciones sin agregar información distinta.
- El público al que se dirigía aparecía cerca del final.
- Había textos pequeños y controles sin un tratamiento explícito del foco de teclado.
- Las fuentes dependían de solicitudes externas a Google Fonts.

## Fuentes consultadas

1. [Nielsen Norman Group: Homepage Design, 5 Fundamental Principles](https://www.nngroup.com/articles/homepage-design-principles/). Propósito visible y etiquetas de acciones específicas. El contenido se consultó mediante el resultado indexado; la apertura directa del artículo no respondió.
2. [W3C: Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/). Contraste, navegación, foco, jerarquía y adaptación a pantallas estrechas.
3. [W3C: Target Size, Minimum, WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum/). Mínimo de 24 por 24 px con excepciones; se eligieron controles de 44 px de alto para facilitar el uso táctil.
4. [Google: Web Vitals](https://web.dev/articles/vitals). Carga, respuesta y estabilidad visual. Referencias de buena experiencia: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1, medidos en el percentil 75 de visitas reales.
5. [Google Search Central: Title links](https://developers.google.com/search/docs/appearance/title-link). Títulos descriptivos y coherentes con el contenido.
6. [WhatsApp: How to use click to chat](https://faq.whatsapp.com/5913398998672934). Enlace con número internacional y mensaje codificado.

## Alcances y publicación

Verificación local realizada: inspección visual en móvil y escritorio; comprobación de desbordes a 320, 355, 769 y 1584 px de ancho CSS; selección de los tres perfiles; apertura y cierre de preguntas con teclado; copia del número; revisión del destino de WhatsApp y de los enlaces internos; recursos presentes; sintaxis de JavaScript y `git diff --check`. No hubo errores ni advertencias de consola en la vista probada. Las combinaciones principales de texto y fondo revisadas superan 4,5:1 de contraste; esta comprobación parcial no sustituye una auditoría completa de accesibilidad.

La implementación es estática y se modifica en este repositorio. No se publicaron cambios ni se generó un QR para una URL temporal.

Antes de imprimir el QR:

- Publicar los archivos del sitio en una URL estable con HTTPS.
- Completar `canonical` y `og:url` con el dominio real; agregar imagen de vista previa si se dispone de una pieza oficial.
- Escanear el QR desde un celular y comprobar la apertura de WhatsApp con el número y el texto correctos.
- Confirmar que el número está registrado en WhatsApp y que el equipo recibe las consultas. La implementación valida el formato del enlace; no confirma la existencia de la cuenta ni envía mensajes de prueba.
- Medir la URL pública con PageSpeed Insights y datos reales cuando haya tráfico. La inspección local no certifica Core Web Vitals ni conformidad completa con WCAG.

Se puede incorporar medición de visitas o clics más adelante si el equipo la necesita. La versión actual no integra analítica, cookies propias ni captura de datos mediante formularios.
