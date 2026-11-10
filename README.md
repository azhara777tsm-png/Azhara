# Engineering College: static multi-page website

## Overview and page map
Brochure site for a fictional technical college. Black, red and light-blue theme, Bootstrap 5, vanilla JS, no build step.

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, CSS 3D cube, highlights, stats |
| Programs | `about.html` | About text and filterable program cards |
| Admissions | `admissions.html` | Process steps, tuition table, FAQ |
| Student Life | `student-life.html` | News and clubs |
| Contact | `contact.html` | Contact details and form |
| Register | `registration.html` | Advanced registration form |

## Features
- Fixed, collapsible top navbar with active states on every page
- Mobile-first responsive layout (Bootstrap grid and utilities)
- Registration form: inline validation, success states, password rules, future-date check, accessible labels, confirmation message
- Contact form: validation, honeypot and arithmetic anti-spam check, success/failure message
- Extra interaction 1: program filter (works as a plain list without JS)
- Extra interaction 2: 3D card tilt on pointer move (disabled with reduced motion)
- Native `<details>` FAQ, skip link, visible focus, `prefers-reduced-motion` support

## Known limitations
- Forms do not send data anywhere (static site); success messages are client-side only.
- Bootstrap and Google Fonts load from a CDN.

## Credits
- Bootstrap 5.3 (MIT), Space Grotesk font (SIL OFL). No other third-party assets; all visuals are CSS.

## Live site
`https://<your-username>.github.io/<repo-name>/`: use the navbar to move between pages.
