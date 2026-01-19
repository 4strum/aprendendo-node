// mais de um valor
const x = 10;
const y = "Joao";
const z = [1, 2, 3];

console.log(x, y, z);

//contagem de impressoes
console.count(`valor de x é: ${x}, contagem `);
console.count(`valor de x é: ${x}, contagem `);
console.count(`valor de x é: ${x}, contagem `);
console.count(`valor de x é: ${x}, contagem `);

// varivel entre string
console.log("O nome é %s, e ele é programador ", y);

//limpar console
setTimeout(() => {
  console.clear();
}, 2000);
