const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlPath = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Fix absolute paths to relative paths
html = html.replace(/src="\/_expo/g, 'src="./_expo');
html = html.replace(/href="\/favicon/g, 'href="./favicon');

// Write the fixed HTML back
fs.writeFileSync(htmlPath, html);

// Fix font paths in the JavaScript bundle
const jsFiles = fs.readdirSync(path.join(__dirname, 'dist', '_expo', 'static', 'js', 'web'));
for (const jsFile of jsFiles) {
  if (jsFile.endsWith('.js')) {
    const jsPath = path.join(__dirname, 'dist', '_expo', 'static', 'js', 'web', jsFile);
    let jsContent = fs.readFileSync(jsPath, 'utf8');
    
    // Fix absolute asset paths to relative paths
    // From _expo/static/js/web/ to assets/ = ../../../../assets/
    jsContent = jsContent.replace(/"\/assets\//g, '"../../../../assets/');
    
    fs.writeFileSync(jsPath, jsContent);
  }
}

// Create .nojekyll file to disable Jekyll processing (allows _expo directory)
const nojekyllPath = path.join(__dirname, 'dist', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

console.log('Fixed HTML paths and added .nojekyll for GitHub Pages deployment');
