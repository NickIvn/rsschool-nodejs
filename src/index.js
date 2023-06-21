import fs from 'fs';
import { argv } from 'process';
import readline from 'readline';

const args = Object.fromEntries(
    argv.slice(2).map((arg) => {
        const [key, value] = arg.split('=')
        return [key, value]
    })
)
const username = args['--username'] ? args['--username'] : 'Anonim'

console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentDirectory = process.cwd();

function printCurrentDirectory() {
  console.log(`You are currently in ${currentDirectory}`);
}

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

printCurrentDirectory();
