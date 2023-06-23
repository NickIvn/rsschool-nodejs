import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export async function handleRemove(filePath) {
  const fullPath = `${process.cwd()}/${filePath}`;

  try {
    await fs.promises.access(fullPath, fs.constants.F_OK);
    await new Promise((resolve, reject) => {
      fs.unlink(fullPath, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('Operation failed');
  }
  getCurrentDir();
}
