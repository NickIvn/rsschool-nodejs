import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import zlib from 'zlib';

export function handleDecompress(filePath, destinationPath) {
  const currentDirectory = process.cwd();
  const fullFilePath = `${currentDirectory}/${filePath}`;
  const fullDestinationPath = `${currentDirectory}/${destinationPath}`;

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

  writable.on('finish', () => {
    if (!hasReadError) {
    // console.log('File decompressed successfully');
    getCurrentDir();
    }
  });

  writable.on('error', (error) => {
    console.error('Operation failed');
  });
}
