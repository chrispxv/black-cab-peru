# SEO y Google Search Console — Black Cab Peru

El sitio utiliza un dominio propio y se publica como archivos estáticos en BanaHosting/cPanel:

- Sitio oficial: https://blackcabperu.com/
- Sitemap: https://blackcabperu.com/sitemap.xml
- Robots: https://blackcabperu.com/robots.txt
- Carpeta de producción: `public_html`

## Verificación recomendada en Google Search Console

La opción recomendada es crear una **Propiedad de dominio**, porque permite incluir todas las variantes del dominio y requiere una verificación estable mediante DNS.

1. Ingrese a https://search.google.com/search-console/ con la cuenta que administrará el sitio.
2. Seleccione **Añadir propiedad**.
3. En **Dominio**, escriba únicamente `blackcabperu.com`, sin `https://` ni rutas.
4. Google mostrará un registro de verificación TXT. Copie el valor exacto; no utilice un código de ejemplo.
5. Abra el editor de zona DNS del proveedor que administra los DNS de `blackcabperu.com`.
6. Añada el registro TXT indicado por Google en el dominio raíz. No elimine otros registros TXT existentes.
7. Espere la propagación y pulse **Verificar** en Search Console.

Si BanaHosting administra los DNS, el registro se añade desde el editor de zona de cPanel. Si los DNS apuntan a otro proveedor, el TXT debe añadirse en ese proveedor.

## Enviar el sitemap

Después de verificar la propiedad:

1. Abra **Sitemaps** en Search Console.
2. Envíe `https://blackcabperu.com/sitemap.xml`.
3. Compruebe que Google pueda leer las seis URLs publicadas.
4. Utilice **Inspección de URLs** para revisar la portada y las cinco páginas de servicio; solicite indexación después de confirmar que cada URL responde correctamente.

## Métodos alternativos

Una propiedad con prefijo de URL también puede verificarse mediante un archivo HTML o una etiqueta `google-site-verification`, pero cubre únicamente el prefijo exacto configurado. Para el archivo HTML, súbalo sin renombrar directamente a `public_html` y confirme que su URL pública abre antes de verificar. Para la etiqueta, pegue la etiqueta exacta proporcionada por Google dentro de `<head>` en `index.html`.

No invente códigos de verificación. Conserve el registro TXT incluso después de verificar la propiedad.

## Publicación en cPanel

El contenido de la carpeta del proyecto debe copiarse dentro de `public_html` conservando las subcarpetas. La portada debe quedar en `public_html/index.html`; cada página SEO debe conservar su propia carpeta con un `index.html`. Después de subir, confirme `robots.txt`, `sitemap.xml`, CSS, JavaScript e imágenes desde sus URLs públicas.
