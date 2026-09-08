# M2 Portfolio — WordPress Theme

This directory contains a WordPress-native conversion of the M2 portfolio. The original Next.js application remains untouched on `main`; the conversion is isolated on `wordpress-theme`.

## Install
1. Download or clone this repository.
2. Zip the folder `wordpress-theme/m2-portfolio` so the ZIP contains `style.css`, `functions.php`, `front-page.php`, etc. at its root.
3. In WordPress, go to Appearance → Themes → Add New → Upload Theme.
4. Upload the ZIP and activate **M2 Portfolio**.
5. Go to Settings → Permalinks and save once to refresh project URLs.
6. Use Appearance → Menus to create Primary and Footer menus.
7. Use Appearance → Customize → M2 Portfolio Home to edit hero copy, statistics, CTA and portrait.
8. Add portfolio entries under **Portfolio Projects** and services under **Services**. Featured images become project images.
9. Set the homepage to a static page if required by the site's Reading settings; `front-page.php` is the homepage template.

## Architecture
- `front-page.php`: portfolio landing page
- `archive-m2_project.php`: project archive
- `single-m2_project.php`: project detail
- `single.php`: standard blog post
- `functions.php`: theme support, menus, portfolio/service content types and Customizer
- `style.css`: responsive styling
- `assets/js/theme.js`: smooth-scroll behavior

## Notes
The conversion intentionally replaces React/Next.js components with native WordPress templates and editable content. Existing public assets should be copied into `assets/images` if you want the bundled portrait fallback; the Customizer can also supply the portrait from the WordPress Media Library.
