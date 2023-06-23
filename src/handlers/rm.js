import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export function handleRemove(filePath) {
  const currentDirectory = process.cwd();
  const fullPath = `${currentDirectory}/${filePath}`;

  fs.unlink(fullPath, (error) => {
    if (error) {
      console.error('Operation failed', error);
      return;
    }
    getCurrentDir();
  });
}

