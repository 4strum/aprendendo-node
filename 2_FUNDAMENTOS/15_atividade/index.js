const inquirer = require("inquirer");
const chalk = require('chalk'); 

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual seu nome?",
    },
    {
      name: "p2",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {

    if(!answers.p1 || !answers.p2){
       throw new Error(chalk.red("Nome e idade são obrigatorios!"))
    }else{
      const nome = answers.p1;
      const idade = answers.p2;
      console.log(chalk.bgYellow.black(`Seu nome é ${nome}`))
      console.log(chalk.bgYellow.black(`Sua idade é ${idade}`))
    }
  })
  .catch((err) => console.log(err));