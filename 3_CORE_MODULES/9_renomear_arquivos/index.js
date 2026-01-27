const fs = require("fs");
const { zstdCompress } = require("zlib");

const arquivoAntigo = 'arquivo.txt';
const arquivoNovo = 'novo.txt';


fs.rename(arquivoAntigo, arquivoNovo, (err) => {

    if(err){
        console.log(err);
        return
    }

    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`)

})