# Gifs App

A React and TypeScript learning project for a GIF search interface. The UI is in Spanish and currently displays a gallery of six GIFs from local mock data.

## Current features

- Dark theme with the Montserrat Alternates font.
- Responsive GIF gallery with two to five columns, depending on screen width.
- GIF cards showing an image, title, and dimensions from the mock data.
- Search input, a **Buscar** button, and sample previous searches: Goku, Saitama, Miku, and Pandas.

The search controls and previous-search items are visual placeholders: they do not filter results, fetch GIFs, or save history yet. The card text `(size in MB)` is also a placeholder; file sizes are not calculated.

## Tech stack

- React 19 and TypeScript 6.
- Vite 8 with the React plugin and React Compiler enabled through the Babel preset.
- ESLint with TypeScript, React Hooks, and React Refresh rules.
- Plain CSS for styling and responsive layouts.

## Getting started

Use Node.js 22.13+ on the 22.x release line, or Node.js 24+, with npm to satisfy the installed Vite and ESLint requirements.

From the repository directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

No API key or environment variables are required. GIF images load from Giphy URLs, and the font loads from Google Fonts, so those assets require internet access.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Run the TypeScript build checks and create the production bundle in `dist/`. |
| `npm run lint` | Run ESLint across the project. |
| `npm run preview` | Serve the production build locally after running `npm run build`. |

There is currently no automated test script configured.

## Project structure

```text
src/
  main.tsx                 # React entry point; renders the app in StrictMode
  GifsApp.tsx              # Search interface and GIF gallery
  index.css                # Global styles and responsive grid
  mock-data/
    gifs.mock.ts           # Gif interface and six sample GIF records
index.html                 # HTML entry point and Google Fonts stylesheet
vite.config.ts             # Vite plugins and React Compiler configuration
eslint.config.js           # Lint configuration
tsconfig*.json             # TypeScript configuration
```

To change the sample gallery, edit `src/mock-data/gifs.mock.ts`. Each GIF record contains `id`, `title`, `url`, `width`, and `height`. The gallery renders these records in `src/GifsApp.tsx`.
