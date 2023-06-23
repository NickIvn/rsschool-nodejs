import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import zlib from 'zlib';

export function handleCompress(filePath, destinationPath) {
  const currentDirectory = process.cwd();
  const fullFilePath = `${currentDirectory}/${filePath}`;
  const fullDestinationPath = `${currentDirectory}/${destinationPath}`;

  let hasReadError = false;

  const readable = fs.createReadStream(fullFilePath);
  const writable = fs.createWriteStream(fullDestinationPath);

  const brotliOptions = {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
    },
  };

  const compressStream = zlib.createBrotliCompress(brotliOptions);

  readable.pipe(compressStream).pipe(writable);

  readable.on('error', (error) => {
    console.error('Operation failed');
    hasReadError = true;
    writable.destroy();
  });

  writable.on('finish', () => {
    if (!hasReadError) {
    // console.log('File compressed successfully');
    getCurrentDir();
    }
  });

  writable.on('error', (error) => {
    console.error('Operation failed');
  });
}
