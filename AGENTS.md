# Portfolio Agent Guide

## Project shape

- This is a dependency-free static portfolio. `index.html` contains the markup, all CSS, and all JavaScript; `images/` contains the local visual assets.
- Open `index.html` directly for basic checks, or serve the project root with `python3 -m http.server 8000` when testing browser behavior.
- There is no package manager, build step, lint configuration, or automated test suite.

## Architecture and conventions

- The page is an interactive scrapbook/book. `.stage` owns the full-screen interaction surface, `.craft-workspace` owns the draggable background, and `.book-shell`/`.book-pages` own the book layout.
- Portfolio pages are entries in the inline `spreads` array. Each entry provides a theme, key, label, and `left`/`right` HTML template strings. Keep spread indexes and navigation targets aligned.
- `applyBoard()` and `applyFace()` inject spread HTML into the two visible boards and the animated `.flip-leaf`. Preserve valid template-literal syntax when editing spread content.
- Keep local asset paths relative to the project root. Quote paths containing spaces, such as `images/glue stick.png`.
- Reuse the existing CSS variables, typography, paper textures, and scrapbook visual language. Prefer focused changes over introducing a framework or splitting files without a clear need.

## Interaction invariants

- Navigation includes header links, brand-home, Back/Next buttons, page-edge zones, corner turn zones, and Left/Right arrow keys. Preserve their `data-target`/`data-dir` behavior when changing markup.
- `flipTo()` guards against invalid indexes and overlapping animations. Do not bypass `isFlipping` or update `currentSpread` before the animation finishes.
- Stage pointer dragging must continue to ignore interactive descendants (`button`, `a`, form controls, and `video`). Keep pointer capture and workspace offset clamping intact.
- The book is scaled as one unit for responsive layouts. Check both narrow widths and short viewport heights after layout changes.
- Preserve reduced-motion behavior and verify browser-console errors, missing assets, and keyboard/touch interactions after JavaScript changes.

## Validation

- Run `git diff --check` after edits.
- Serve locally with `python3 -m http.server 8000` and inspect the page in a browser for visual or interaction changes.
- Smoke-test the initial About spread, every navigation route, page flipping, dragging, resizing, mobile layout, reduced motion, and asset loading.