import fs from 'fs';
import path from 'path';
import { getCurrentDir } from "../helpers/index.js"

export function handleCopyFile(source, newDirectory) {
  const currentDirectory = process.cwd();
  const sourcePath = `${currentDirectory}/${source}`;
  const destinationPath = path.join(currentDirectory, newDirectory, path.basename(source));

  fs.copyFile(sourcePath, destinationPath, (error) => {
    if (error) {
      console.error('Operation failed', error);
      return;
    }
    getCurrentDir();
  });
}
