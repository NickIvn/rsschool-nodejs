import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export function handleAdd(fileName) {
  const currentDirectory = process.cwd();
  const filePath = `${currentDirectory}/${fileName}`;

  fs.writeFile(filePath, '', (error) => {
    if (error) {
      console.error('Operation failed');
      return;
    }
    getCurrentDir();
  });
}
