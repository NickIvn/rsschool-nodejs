export const inputCommand = (input, myEmitter) => {
    const [command, ...args] = input.split(' ');
    const command_list = ['cat', 'add', 'rn', 'cd', 'up', 'ls', 'cp', 'mv', 'rm', 'hash', 'compress', 'decompress'];
    for (let i = 0; i < command_list.length; i++) {
      if (command === command_list[i]) {
        if (args.length >= 2) {
          myEmitter.emit(command, ...args);
        } else if (command === 'ls') {
          myEmitter.emit('ls');
        } else {
          myEmitter.emit(command, args)
        }
          break;
        }
      }
};