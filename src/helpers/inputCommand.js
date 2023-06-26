import { getCurrentDir } from '../helpers/index.js';
import { displayCommand } from './displayCommand.js';

export const inputCommand = (input, myEmitter) => {
    const [command, ...args] = input.split(' ');
    const command_list = [
      'cat',
      'add',
      'rn',
      'cd',
      'up',
      'ls',
      'cp',
      'mv',
      'rm',
      'hash',
      'compress',
      'decompress',
      'os',
      'help'
    ];
      if (command_list.includes(command)) {
        if (args.length >= 2) {
          myEmitter.emit(command, ...args);
          } else if (command === 'ls') {
            myEmitter.emit('ls');
          } else if (command === 'os') {
            myEmitter.emit(command, args[0]);
          } else if (command === 'help') {
            displayCommand();
          } else {
            myEmitter.emit(command, args)
          }
        }  else if (command !== '.exit') {
          console.log('Invalid command');
          getCurrentDir();
        }
};