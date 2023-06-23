import fs from 'fs';
import path from 'path';
import { getCurrentDir } from "../helpers/index.js"

export async function handleMoveFile(source, newDirectory) {
  const sourcePath = `${process.cwd()}/${source}`;
  const destinationPath = path.join(process.cwd(), newDirectory, path.basename(source));

  try {
    const sourceExists = await fs.promises.access(sourcePath, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false);

    if (!sourceExists) {
      console.error('Operation failed');
      return;
    }

    await new Promise((resolve, reject) => {
      const readable = fs.createReadStream(sourcePath);
      const writable = fs.createWriteStream(destinationPath);

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
  } catch (error) {
    console.error('Operation failed');
  }
  getCurrentDir();
}
