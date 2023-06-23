import os from 'os';
import { getCurrentDir } from '../../helpers/index.js';

export async function handleOsHomedir() {
  try {
    const homedir = os.homedir();
    console.log(`Home directory: ${homedir}`);
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed', error);
  }
}
