# pstackebrandt.github.io

![GitHub last commit](https://img.shields.io/github/last-commit/pstackebrandt/pstackebrandt.github.io)
![GitHub issues](https://img.shields.io/github/issues/pstackebrandt/pstackebrandt.github.io)
![GitHub version](https://img.shields.io/badge/version-1.10.3-blue)

- [pstackebrandt.github.io](#pstackebrandtgithubio)
  - [Purpose of app](#purpose-of-app)
  - [Setup](#setup)
  - [Run app in development mode](#run-app-in-development-mode)
  - [Prepare for deployment](#prepare-for-deployment)
  - [Deploy app](#deploy-app)
  - [Build app for production](#build-app-for-production)
  - [Project management](#project-management)
  - [Documentation](#documentation)
  - [Cursor IDE Configuration](#cursor-ide-configuration)
  - [History](#history)
    - [Publishing](#publishing)

## Purpose of app

This page is a simple homepage I use to link to my training projects.
I created it initially to train React and publishment of React apps.

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run app in development mode

In the project directory, you can run:

```powershell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Prepare for deployment

Don't upgrade the version number in the `package.json` file manually. Use the following commands instead:

```powershell
npm version patch  # Example: For bug fixes (1.0.0 → 1.0.1)
npm version minor  # Example: For new features (1.0.0 → 1.1.0)
npm version major  # Example: For breaking changes (1.0.0 → 2.0.0)
```

Those will update the version number in the `package.json` file and trigger relative scripts.

## Deploy app

Run deploy script (incl. build) and publish to github pages

```powershell
npm run deploy
```

This will update the `gh-pages` branch. Possibly previous installation of gh cli is required.

## Build app for production

```powershell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project management

I use github for project management.

- I use the issues section to track tasks.
- I use the projects section to track the board.

## Documentation

Documentation can be found in the /docs directory. See the [docs](docs/README.md) directory for more information.

## Cursor IDE Configuration

This project includes configuration files for Cursor IDE to improve performance and AI context management:

### .cursorignore

The `.cursorignore` file tells Cursor which files and directories to exclude from various operations like search, indexing, and AI context. Similar to `.gitignore`, it uses pattern matching.

**Key exclusions:**
- Dependencies and node_modules
- Build artifacts and output directories
- Environment files with potentially sensitive information
- Cache, logs, and temporary files
- Large binary files (images, fonts, etc.)
- Package lock files

### .cursorindexingignore

The `.cursorindexingignore` file specifically controls what's excluded from Cursor's code indexing functionality. 
This helps improve performance by reducing the indexed codebase size.

**Key exclusions:**

- Build output and generated files
- Large data files (with exceptions for config files)
- Test fixtures and documentation files
- Source maps and other large non-source files

### How to Use

1. **For new team members:**
   - No action needed - these files are part of the repository and will be applied automatically

2. **Customizing the ignore files:**
   - Add patterns similar to `.gitignore` syntax
   - Use `!` to negate a pattern (include something that would otherwise be excluded)
   - Use `/` prefix to specify directory-only matches

3. **When to update:**
   - Add new patterns when introducing new build artifacts or large files
   - Remove patterns if those files become important for AI context or code indexing

## History

The app runs now directly in the root folder, not in a subfolder like its predecessor.

### Publishing

- The app is now published with github pages.
