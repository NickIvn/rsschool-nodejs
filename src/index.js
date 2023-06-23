import os from 'os';
import { argv } from 'process';
import readline from 'readline';
import EventEmitter from 'events';
import {
    handleAdd,
    handleCat,
    handleRename,
    handleCd,
    handleUp,
    handleList 
} from './handlers/index.js'
import { inputCommand } from './helpers/inputCommand.js';

process.chdir(os.homedir());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const myEmitter = new EventEmitter();

myEmitter
    .on('cat',handleCat)
    .on('add', handleAdd)
    .on('rn', handleRename)
    .on('up', handleUp)
    .on('cd', handleCd)
    .on('ls', handleList)


const FileManager = async () => {
    const args = Object.fromEntries(
        argv.slice(2).map((arg) => {
            const [key, value] = arg.split('=')
            return [key, value]
        })
    )
const username = args['--username'] ? args['--username'] : 'Anonim';

console.log(`Welcome to the File Manager, ${username}!`);
console.info('You are currently in', os.homedir());


rl.on('line', (input) => {
    if (input.trim() === '.exit') {
      rl.close(); 
    }
    inputCommand(input, myEmitter);
  })
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
}

await FileManager();

