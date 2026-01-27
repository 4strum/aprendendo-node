const fs = require('fs');

if(!fs.existsSync('./minha_pasta')){
    console.log("Não existe");
    fs.mkdirSync('minha_pasta');
}else if(fs.existsSync('./minha_pasta')){
    console.log("Existe");
}