const fs = require('fs');

const html = fs.readFileSync('backup_index.html', 'utf-8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);

if (match && match[1]) {
  fs.writeFileSync('src/App.css', match[1].trim());
  console.log('Successfully extracted CSS to src/App.css');
} else {
  console.log('Could not find style tag');
}
