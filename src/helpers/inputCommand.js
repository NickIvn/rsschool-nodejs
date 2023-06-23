export const inputCommand = (input, myEmitter) => {
    const [command, ...args] = input.split(' ');
    const command_list = ['cat', 'add', 'rn', 'cd', 'up', 'ls', 'cp'];
    for (let i = 0; i < command_list.length; i++) {
      if (command === command_list[i]) {
        if (command === 'ls') {
          myEmitter.emit('ls');
        } else if (command === 'rn' && args.length === 2) {
          const [oldName, newName] = args;
          myEmitter.emit('rn', oldName, newName);
        } else if (command === 'cp' && args.length === 2) {
          const [source, newDirectory] = args;
          myEmitter.emit('cp', source, newDirectory);
        }else {
          myEmitter.emit(command, args)
        }
          break;
        }
      }
};