import readline from "readline"
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function propertyCSS() {

  let configCSS = [];

  let reportCSS = rl.question = "Digite uma propriedade de CSS ou SAIR"
  console.log(chalk.hex('#FF8800').bold(reportCSS))

  rl.on('line', (addConfigCSS) => {
    configCSS.push(addConfigCSS)
    
    if (addConfigCSS.toUpperCase() === "SAIR") {
      configCSS.pop()
      console.log((chalk.hex("#FF0000").bold)("Propriedades CSS adicionadas\n") + (chalk.hex("#FFFF00").bold)(configCSS.sort().join('\n')));
      rl.close()
    }
  });
}
propertyCSS()
