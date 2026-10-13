# AI-Assisted Personal Portfolio Website

A responsive UX design student portfolio starter built with React and Vite. It includes an introduction, about section, sample project cards with case-study outline dialogs, skills, design process, contact section, mobile navigation, and a custom abstract hero illustration made from CSS shapes.

## Important before submission

- Replace `Your Name`, `yourname`, `YOUR CITY`, and `hello@example.com` with your own details.
- Replace the sample project concepts with work you actually completed. If a project is conceptual, label it as a concept.
- The email-copy action uses the Clipboard API where supported and falls back to opening an email draft.
- Project cards open a case-study outline modal. Add your actual research, design screenshots, findings, and reflection.
- The abstract hero visual is CSS-generated, not an external AI-generated image. To meet the assignment's explicit generative-AI requirement, generate an original image with an image-generation tool, include it in `public/`, reference it in the site, and document the actual prompt/tool and your revisions in `AI-WORKLOG.md`.

## Requirements

- Node.js 18 or later
- npm
- Git and a GitHub account for repository submission
- A Vercel account for deployment

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## GitHub

Create an empty repository on GitHub, then run these commands in this project directory. Replace the URL with your repository's actual URL.

```bash
git init
git add .
git commit -m "Build initial UX portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel

1. Push the code to GitHub.
2. Sign in to Vercel and import the repository.
3. Framework preset: Vite (or let Vercel detect it).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy, then test the live URL on desktop and mobile.

## Suggested UX test checklist

- [ ] Navigation links jump to the right sections.
- [ ] Mobile menu opens, closes, and works with keyboard focus.
- [ ] Project dialogs open and close; clicking outside closes them.
- [ ] Email action works in a supported browser.
- [ ] No horizontal overflow at narrow widths.
- [ ] Text contrast and font sizes are readable.
- [ ] All placeholder details and sample projects are replaced.
- [ ] Live URL opens in a private/incognito browser.

## Assignment workflow

Design / wireframe → prompt → AI build → review → iterate → GitHub → deploy → test → improve.

Do not claim that AI performed work you did not verify. Keep a record of prompts, actual changes, test results, and limitations.
