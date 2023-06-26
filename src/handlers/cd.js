import { getCurrentDir } from "../helpers/index.js";
import os from 'os';

export const handleCd = async ([pathToDirectory]) => {
    try {
        const targetDirectory = pathToDirectory || os.homedir();
        process.chdir(targetDirectory);
        getCurrentDir();
    } catch(err) {
        console.error('Operation failed');
    }
};
