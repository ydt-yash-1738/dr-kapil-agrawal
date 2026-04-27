const fs = require('fs');
const path = require('path');
function walk(dir) {
  let list = [];
  try {
    fs.readdirSync(dir).forEach(f => {
      if (f === 'node_modules' || f.startsWith('.git')) return;
      let p = path.join(dir, f);
      if(fs.statSync(p).isDirectory()) list = list.concat(walk(p));
      else list.push(p);
    });
  } catch(e){}
  return list;
}
let files = walk('d:/manan');
let stats = files.filter(f => f.match(/\.(png|jpe?g|avif|webp)$/i)).map(f => ({f, m: fs.statSync(f).mtimeMs}));
stats.sort((a,b) => b.m - a.m);
fs.writeFileSync('d:/manan/client/all_recent.json', JSON.stringify(stats.slice(0, 10), null, 2));
