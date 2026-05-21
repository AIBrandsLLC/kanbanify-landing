# Kanbanify Landing

Static-exported Next.js App Router marketing site for Kanbanify.

## Quick Start

```bash
npm install
npm run dev
```

Build the static export:

```bash
npm run build
```

The production build is emitted to `out/` and the Docker image serves that folder with Nginx.

## Routes

- `/`
- `/features`
- `/solutions`
- `/pricing`
- `/resources`
- `/signup`
- `/privacy`
- `/terms`
- `/cookies`
- `/dpa`

The legal pages render from JSON files in `data/legal/`.
