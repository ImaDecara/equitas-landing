EQUITAS — Landing para presentar el proyecto después del pitch

ARCHIVOS
- index.html: contenido, navegación y contacto.
- assets/styles.css: diseño adaptable a celulares, tablets y escritorio.
- assets/site.js: ejemplos de perfiles y botón para copiar el número.
- assets/favicon.svg: ícono de pestaña.
- LANDING-REVIEW.md: investigación, decisiones y pendientes de publicación.

VISTA PREVIA LOCAL
Abrí index.html directamente, o ejecutá desde esta carpeta:
  python -m http.server 4173 --bind 127.0.0.1
Luego abrí http://127.0.0.1:4173
No hay instalación, dependencias ni proceso de compilación.
La opción de copiar requiere un contexto seguro (HTTPS o localhost).
El enlace de WhatsApp funciona también sin JavaScript.

CONTACTO
El número público es +54 9 3548 53-8189.
Para cambiarlo, actualizá el href de #whatsapp-link y el texto de
#contact-number en index.html. El botón de copiar usa ese mismo texto.
El enlace prepara un mensaje en WhatsApp; la persona decide enviarlo.
La página no recibe ni almacena consultas.

PUBLICACIÓN Y QR
Publicá index.html junto con la carpeta assets en el hosting estático elegido.
Si usás Netlify Drop, podés arrastrar una carpeta con esos archivos.
La URL pública definitiva debe existir antes de generar o imprimir el QR.
Probá el QR y el contacto desde un celular con datos móviles.
No uses una dirección localhost como destino del QR.
Cuando se conozca el dominio, agregá canonical y og:url en index.html.
También se puede sumar una imagen social con una URL pública absoluta.

CONTENIDO
Se conserva la propuesta de segmentación y su origen académico en la UCC.
Los perfiles son ejemplos conceptuales, sin datos ni resultados reales.
No se incluyen testimonios, clientes, métricas ni funciones no verificadas.
El logo PNG mencionado en la versión anterior no estaba en el repositorio;
se usa una marca tipográfica local. Puede sustituirse por el recurso oficial.
