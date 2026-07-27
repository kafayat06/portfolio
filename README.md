# Kifayyah Abdulwahab — Coding Tutor Portfolio

A simple, single-page portfolio site built with plain HTML, CSS, and a touch of JS — no build tools required.

## Files
- `index.html` — all page content
- `style.css` — styling
- `script.js` — small scroll-reveal effect
- `assets/kifayyah.png` — profile photo

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `kafayat06.github.io` if you want it at the root of your GitHub Pages domain, or any name like `portfolio`).
2. Upload these files to the repository (drag-and-drop on github.com works fine, or use `git`):
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/kafayat06/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will give you a live URL, usually:
   - `https://kafayat06.github.io/` (if the repo is named `kafayat06.github.io`), or
   - `https://kafayat06.github.io/YOUR-REPO-NAME/` (for any other repo name)
   It can take a minute or two to go live.

## Editing later
- Update text directly in `index.html`.
- To add a new project card, copy one of the `<div class="card">` blocks under the `#projects` section and edit its text and link.
- To swap the photo, replace `assets/kifayyah.png` (keep the same filename, or update the `src` in `index.html`).
