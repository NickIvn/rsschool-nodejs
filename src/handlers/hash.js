import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import crypto from 'crypto';

export function calculateHash(fileName) {
  const currentDirectory = process.cwd();
  const filePath = `${currentDirectory}/${fileName}`;
  const hash = crypto.createHash('sha256');

  const readable = fs.createReadStream(filePath);

  readable.on('data', (data) => {
    hash.update(data);
  });

  readable.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(fileHash);
    getCurrentDir();
  });

  readable.on('error', (error) => {
    console.error('Operation failed');
  });
}
