import * as os from 'os';

export const currentDirectory = () => {
    const dir = os.homedir();
console.log(`You are currently in ${dir}`);
}
