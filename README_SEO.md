# SEO y Google Search Console — Black Cab Peru

La versión pública está configurada para esta dirección:

- Sitio: https://chrispxv.github.io/black-cab-peru/
- Sitemap: https://chrispxv.github.io/black-cab-peru/sitemap.xml
- Robots: https://chrispxv.github.io/black-cab-peru/robots.txt

La página ya incluye título, descripción, URL canónica, Open Graph, Twitter Cards, datos estructurados de negocio local y preguntas frecuentes, una sola etiqueta `h1` y textos descriptivos para las imágenes.

## Cómo verificarla en Google Search Console

1. Ingrese a https://search.google.com/search-console/ con la cuenta de Google que administrará el sitio.
2. Elija **Añadir propiedad** y seleccione **Prefijo de URL**.
3. Escriba exactamente `https://chrispxv.github.io/black-cab-peru/`.
4. Use uno de estos métodos de verificación:

   - **Archivo HTML:** descargue de Search Console el archivo de verificación, colóquelo sin renombrar en la raíz de este repositorio, publíquelo y confirme que se abre en `https://chrispxv.github.io/black-cab-peru/NOMBRE-DEL-ARCHIVO.html`. Luego pulse **Verificar**.
   - **Etiqueta HTML:** copie la etiqueta que entrega Google y péguela dentro de `<head>` en `index.html`. No use una etiqueta de ejemplo ni un código inventado. Publique el cambio y pulse **Verificar**.

5. En Search Console, abra **Sitemaps**, escriba `sitemap.xml` y envíelo.
6. Abra **Inspección de URLs**, inspeccione la página principal y seleccione **Solicitar indexación**.

La verificación por DNS solo estará disponible cuando se use un dominio propio y se pueda editar su zona DNS. Search Console y estos archivos ayudan a Google a descubrir e interpretar el sitio, pero no garantizan una posición específica en los resultados.

## Si más adelante se conecta un dominio propio

Actualice en `index.html`, `robots.txt` y `sitemap.xml` todas las referencias a la URL de GitHub Pages. Después añada el dominio en Search Console, verifíquelo con el registro TXT exacto entregado por Google y envíe el sitemap bajo la nueva dirección.
