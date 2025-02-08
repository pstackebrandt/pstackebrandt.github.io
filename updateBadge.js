const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

const readmePath = path.join(__dirname, 'README.md');
const versionBadgeUrl = `https://img.shields.io/badge/version-${packageJson.version}-blue`;

fs.readFile(readmePath, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  const updatedReadme = data.replace(/!\[GitHub version\]\(https:\/\/img\.shields\.io\/badge\/version-.*?-blue\)/, `![GitHub version](${versionBadgeUrl})`);

  fs.writeFile(readmePath, updatedReadme, 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('Version badge updated successfully!');
  });
}); 