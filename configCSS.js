import readlineSync from "readline"
import chalk from "chalk";

var rl = readlineSync.createInterface({
  input: process.stdin,
  output: process.stdout
});

let configCSS = [];

rl.on('line', (addConfigCSS) => {
  configCSS.push(addConfigCSS)
  if (addConfigCSS === "SAIR") {
    console.log((chalk.red)("Propriedades CSS adicionadas\n") + (chalk.yellow)(configCSS.sort()));
    rl.close()
  }
});