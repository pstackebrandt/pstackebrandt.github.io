// deploy.js
const fs = require('fs');
const path = require('path');

// Pfad zur index.html
const indexPath = path.join(__dirname, 'build', 'index.html');

// Lese index.html
fs.readFile(indexPath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    // Erstelle 404.html
    fs.writeFile(path.join(__dirname, 'build', '404.html'), data, 'utf8', function (err) {
        if (err) return console.log(err);
    });

    // Füge Umleitungsskript hinzu
    const redirectScript = `
    <script>
      (function(){
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect != location.href) {
          history.replaceState(null, null, redirect);
        }
      })();
    </script>
  `;
    const result = data.replace('<body>', '<body>' + redirectScript);

    // Schreibe die Änderungen zurück zu index.html
    fs.writeFile(indexPath, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
