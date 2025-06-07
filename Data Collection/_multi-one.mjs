import fs   from 'fs';
import path from 'path';
//--------------------------------------------
var txt="";
//--------------------------------------------
const entries = fs.readdirSync("./", { withFileTypes: true });
for (const entry of entries) {
    if (entry.isFile()) {
        if(entry.name.toLowerCase().endsWith('.txt')) {
            if(txt!="") txt+="\n----------\n"
            txt+=entry.name+"\n-\n"
            const fullPath = path.join("./", entry.name);
            txt+=fs.readFileSync(fullPath, 'utf8');
        }
    }
}
//--------------------------------------------
fs.writeFileSync("./_multi-one.text", txt, 'utf8');
//--------------------------------------------
