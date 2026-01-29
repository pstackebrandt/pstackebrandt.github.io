# Claude Code Instructions

React portfolio/link hub for training projects. Deployed via GitHub Pages.

## Critical Rules

- **NEVER manually edit version in package.json** - Use `npm version patch|minor|major` (auto-updates README badge via `updateBadge.js`)
- **Run `npm run lint:md` before committing** - Linting is enforced
- **Prefer Bootstrap classes** over custom SCSS when possible
- **Tests required for components** - Use React Testing Library, see `TESTING_GUIDELINES.md`

## Key Commands

```bash
npm start          # Dev server
npm test           # Run tests
npm run build      # Production build
npm run deploy     # Deploy to gh-pages branch
npm run lint:md    # Lint Markdown files
```

## Component Structure

Components live in `src/components/{Name}/` with:
- `{Name}.js`, `{Name}.scss`, `{Name}.test.js`, `index.js`, `README.md`

## Gotchas

- **Routes**: Defined in `src/routes/App.js` - update when adding pages
- **SASS variables**: Use `src/styles/_variables.scss` for consistency
- **BEM methodology**: Required for custom CSS class naming
- **Testing Library priority**: Prefer `getByRole` > `getByText` > `getByTestId` (see `TESTING_GUIDELINES.md` section 10)

## Tech Stack

React 18, React Router DOM 7, Bootstrap 5 + React Bootstrap, SASS, Jest