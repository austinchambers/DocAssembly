var fs=require('fs');
Docxtemplater = require('docxtemplater');

content = fs
    .readFileSync(__dirname+"/../Templates/input.docx","binary");

doc=new Docxtemplater(content);

doc.setData({
    "firstname":"John",
    "lastname":"Doe"
});

doc.render();

var buf = doc.getZip()
             .generate({type:"nodebuffer"});

fs.writeFileSync(__dirname+"/../Output/output.docx",buf);