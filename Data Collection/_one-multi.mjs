import fs   from 'fs';
import path from 'path';
//--------------------------------------------
var txt=fs.readFileSync("./_multi-one.text", 'utf8');
txt=txt.replace(/\r/g,'');
var sections=txt.split("\n----------\n");
for (const section of sections){
    var parts=section.split('\n-\n');
    if(parts.length==4){
        var file=parts[0];
        var content=parts[1]+"\n-\n"+parts[2]+"\n-\n"+parts[3].trim();
        console.log(file)
        fs.writeFileSync("./"+file, content, 'utf8');
    }
}
//--------------------------------------------
