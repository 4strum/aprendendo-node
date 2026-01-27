const path = require('path');

//path abosluto
console.log(path.resolve('teste.txt'));

//formar path 

const midFolder = "relatorios";
const nameFile = "a.txt"

const finalPath = path.join("/", midFolder, nameFile);

console.log(finalPath)