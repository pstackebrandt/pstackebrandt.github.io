# pstackebrandt.github.io

![GitHub last commit](https://img.shields.io/github/last-commit/pstackebrandt/pstackebrandt.github.io)
![GitHub issues](https://img.shields.io/github/issues/pstackebrandt/pstackebrandt.github.io)
![GitHub version](https://img.shields.io/badge/version-1.6.3-blue)

- [pstackebrandt.github.io](#pstackebrandtgithubio)
  - [Purpose of app](#purpose-of-app)
  - [Setup](#setup)
  - [Run app in development mode](#run-app-in-development-mode)
  - [Prepare for deployment](#prepare-for-deployment)
  - [Deploy app](#deploy-app)
  - [Build app for production](#build-app-for-production)
  - [Project management](#project-management)
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

## History

The app runs now directly in the root folder, not in a subfolder like its predecessor.

### Publishing

- The app is now published with github pages.
