import fs from 'fs';
import { argv } from 'process';
import readline from 'readline';
import { currentDirectory } from './helpres/currentDirectory.js';

const args = Object.fromEntries(
    argv.slice(2).map((arg) => {
        const [key, value] = arg.split('=')
        return [key, value]
    })
)
const username = args['--username'] ? args['--username'] : 'Anonim';

console.log(`Welcome to the File Manager, ${username}!`);
currentDirectory();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
rl.on('line', (input) => {
    if (input === '.exit') {
      rl.close();
      return;
    }
    processUserInput(input);
  });


