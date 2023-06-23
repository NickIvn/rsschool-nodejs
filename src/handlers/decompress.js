import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import zlib from 'zlib';

export async function handleDecompress(filePath, destinationPath) {
  const fullFilePath = `${process.cwd()}/${filePath}`;
  const fullDestinationPath = `${process.cwd()}/${destinationPath}`;

  let hasReadError = false;

  const readable = fs.createReadStream(fullFilePath);
  const writable = fs.createWriteStream(fullDestinationPath);

  const decompressStream = zlib.createBrotliDecompress();

  readable.pipe(decompressStream).pipe(writable);

  readable.on('error', (error) => {
    console.error('Operation failed');
    hasReadError = true;
    writable.destroy();
  });

  await new Promise((resolve, reject) => {
    writable.on('finish', () => {
      if (!hasReadError) {
        resolve();
      } else {
        reject(new Error('Operation failed'));
      }
    });

    writable.on('error', (error) => {
      reject(error);
    });
  });

  getCurrentDir();
}
