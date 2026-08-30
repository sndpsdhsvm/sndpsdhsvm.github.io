# Sandeep S — Portfolio

Personal portfolio site, live at [sndpsdhsvm.github.io](https://sndpsdhsvm.github.io).

## Features

- Responsive layout (desktop, tablet, mobile)
- Light / dark mode with toggle, saved to `localStorage`
- Auto-detects browser prefers-color-scheme, no flash on load
- Typing animation, scroll-reveal animations
- Sticky navbar with active-section highlight
- Collapsible mobile menu
- Contact form (opens a prefilled email via `mailto:`)

## Tech

- HTML, CSS, JavaScript (vanilla)
- [Unicons](https://iconscout.com/unicons) icons
- [Typed.js](https://github.com/mattboldt/typed.js) + [ScrollReveal](https://scrollrevealjs.org/) via CDN

## Structure

```
.
├── index.html
└── assets
    ├── css/          light-mode.css, dark-mode.css
    ├── js/           main.js
    ├── images/       avatar, favicon
    └── pdf/          Sandeep(Resume).pdf
```

## Run locally

Serve from the project root (no build step):

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Hosted on GitHub Pages from the `main` branch. Push to publish:

```sh
git add -A
git commit -m "your message"
git push
```

## Contact

- Email: sndp.sdhsvm@gmail.com
- LinkedIn: https://www.linkedin.com/in/sndpsdhsvm/
- GitHub: https://github.com/sndpsdhsvm