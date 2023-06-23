import fs from 'fs';
import path from 'path';
import { getCurrentDir } from "../helpers/index.js"

export function handleMoveFile(source, newDirectory) {
  const currentDirectory = process.cwd();
  const sourcePath = `${currentDirectory}/${source}`;
  const destinationPath = path.join(currentDirectory, newDirectory, path.basename(source));

  const readable = fs.createReadStream(sourcePath);
  const writable = fs.createWriteStream(destinationPath);

  readable.pipe(writable);

  writable.on('finish', () => {
    fs.unlink(sourcePath, (error) => {
      if (error) {
        console.error('Operation failed', error);
        return;
      }
      getCurrentDir();
    });
  });
}