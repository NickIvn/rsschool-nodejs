export const inputCommand = (input, myEmitter) => {
    const [command, ...args] = input.split(' ');
    const command_list = ['cat', 'add', 'rn', 'cd', 'up', 'ls'];
    //  нужно поймать ошибки и использовать brake
    for (let i = 0; i < command_list.length; i++) {
      if (command === command_list[i]) {
        if (command === 'ls') {
          myEmitter.emit('ls');
        }
        else {
          myEmitter.emit(command, args)
        }
      }
    }
};