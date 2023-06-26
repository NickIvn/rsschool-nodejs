import os from 'os';
import { getCurrentDir } from '../../helpers/index.js';

export async function handleOsEOL() {
  try {
    const eol = JSON.stringify(os.EOL);
    console.log(`System EOL: ${eol}`);
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed', error);
  }
}
