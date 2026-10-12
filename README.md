# Gifs App

A React and TypeScript learning project for searching GIFs through the Giphy API. The interface is in Spanish and starts with an empty gallery until you enter a search term.

## Current features

- Dark theme with the Montserrat Alternates font.
- Responsive GIF gallery with two to five columns, depending on screen width.
- GIF cards showing an image, title, and dimensions from the API response.
- Search automatically after 500 ms without typing, or immediately with **Buscar** or Enter. Submitting with the button or Enter clears the input.
- Up to 25 GIFs per search, using Giphy's original images and Spanish language parameter.
- Search terms are trimmed and lowercased; blank searches are ignored.
- Up to eight unique search terms stored in memory, with newly added terms first. History resets when the page reloads.

Clicking a previous search currently logs the term to the console; it does not repeat the search. The card text `(size in MB)` is a placeholder; file sizes are not calculated. Loading indicators, empty-result messages, and API error handling are not implemented yet.

## Tech stack

- React 19 and TypeScript 6.
- Axios for Giphy API requests.
- Vite 8 with the React plugin and React Compiler enabled through the Babel preset.
- ESLint with TypeScript, React Hooks, and React Refresh rules.
- Plain CSS for styling and responsive layouts.

## Getting started

Use Node.js 22.13+ on the 22.x release line, or Node.js 24+, with npm to satisfy the installed Vite and ESLint requirements.

From the repository directory:

```sh
npm ci
```

Copy `.env.template` to `.env` in the repository root. In PowerShell:

```powershell
Copy-Item .env.template .env
```

Set your Giphy API key in `.env` (the template references the Giphy developer dashboard):

```dotenv
VITE_GIPHY_API_KEY=your_giphy_api_key
```

`.env` is ignored by Git. The `VITE_` variable is used by the browser client and is included in the client bundle.

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your terminal. Restart the server after changing `.env`. Giphy API requests, GIF images, and the Google Fonts stylesheet require internet access.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Run the TypeScript build checks and create the production bundle in `dist/`. |
| `npm run lint` | Run ESLint across the project. |
| `npm run preview` | Serve the production build locally after running `npm run build`. |

There is currently no automated test script configured.

### Current validation status

- `npm run build` currently fails: the untyped empty arrays in `GifsApp.tsx` are inferred as `never[]`, and enums in `giphy.response.ts` conflict with `erasableSyntaxOnly`.
- `npm run lint` completes with one warning about the missing `onQuery` dependency in the `SearchBar.tsx` effect.

The build errors must be resolved before creating a production bundle for preview.

## Project structure

```text
src/
  main.tsx                 # React entry point; renders the app in StrictMode
  GifsApp.tsx              # Search state, history, and API orchestration
  index.css                # Global styles and responsive grid
  gifs/
    actions/
      get-gifs-by-query.action.ts # Fetch and map Giphy results to Gif records
    api/
      giphy.api.ts         # Axios client and environment-based API key
    components/
      SearchBar.tsx        # Debounced input and explicit search submission
      PreviousGifs.tsx     # Previous-search labels and click callback
      DisplayGifs.tsx      # GIF cards
    interfaces/
      gif.interface.ts     # App GIF model
      giphy.response.ts    # Giphy API response types
  shared/components/
    CustomHeader.tsx       # Title and optional description
  mock-data/
    gifs.mock.ts           # Six sample GIF records; unused by the current app
.env.template              # Required environment variable template
index.html                 # HTML entry point and Google Fonts stylesheet
vite.config.ts             # Vite plugins and React Compiler configuration
eslint.config.js           # Lint configuration
tsconfig*.json             # TypeScript configuration
```

`getGifsByQuery` requests `/search` through the Axios client and maps each result to `id`, `title`, `url`, `width`, and `height`. `GifsApp` stores the returned records and passes them to `DisplayGifs`. The sample records in `src/mock-data/gifs.mock.ts` remain available for development but are not rendered by default.
