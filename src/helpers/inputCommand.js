import { getCurrentDir } from '../helpers/index.js';

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
      'os'
    ];
      if (command_list.includes(command)) {
        if (args.length >= 2) {
          myEmitter.emit(command, ...args);
          } else if (command === 'ls') {
            myEmitter.emit('ls');
          } else if (command === 'os') {
            myEmitter.emit(command, args[0]);
          } else {
            myEmitter.emit(command, args)
          }
        } else {
          console.log('Invalid command');
          getCurrentDir();
        }
};