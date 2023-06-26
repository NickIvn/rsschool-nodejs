import os from 'os';
import { getCurrentDir } from '../../helpers/index.js';

export async function handleOsArchitecture() {
  try {
    const architecture = os.arch();
    console.log(`CPU Architecture: ${architecture}`);
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed', error);
  }
}
