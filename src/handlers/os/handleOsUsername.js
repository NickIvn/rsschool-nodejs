import os from 'os';
import { getCurrentDir } from '../../helpers/index.js';

export async function handleOsUsername() {
  try {
    const { username } = os.userInfo();
    console.log(`Username: ${username}`);
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed', error);
  }
}
