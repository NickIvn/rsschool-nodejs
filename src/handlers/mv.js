import fs from 'fs';
import path from 'path';
import { getCurrentDir } from "../helpers/index.js"

export async function handleMoveFile(source, newDirectory) {
  const sourcePath = `${process.cwd()}/${source}`;
  const destinationPath = path.join(process.cwd(), newDirectory, path.basename(source));

  const readable = fs.createReadStream(sourcePath);
  const writable = fs.createWriteStream(destinationPath);

  await new Promise((resolve, reject) => {
    readable.pipe(writable);

    writable.on('finish', () => {
      fs.unlink(sourcePath, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    writable.on('error', (error) => {
      reject(error);
    });
  });

  getCurrentDir();
}
