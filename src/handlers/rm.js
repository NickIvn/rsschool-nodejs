import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export async function handleRemove(filePath) {
  const fullPath = `${process.cwd()}/${filePath}`;

  await new Promise((resolve, reject) => {
    fs.unlink(fullPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  getCurrentDir();
}
