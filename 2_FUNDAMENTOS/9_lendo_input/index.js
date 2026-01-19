import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua linguagem preferida?", (language) => {
  console.log("Minha linguagem preferida é: ", language);
  rl.close();
});
