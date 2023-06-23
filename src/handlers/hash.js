import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import crypto from 'crypto';

export async function calculateHash(fileName) {
  const filePath = `${process.cwd()}/${fileName}`;
  const hash = crypto.createHash('sha256');

  const readable = fs.createReadStream(filePath);

  await new Promise((resolve, reject) => {
    readable.on('data', (data) => {
      hash.update(data);
    });

    readable.on('end', () => {
      const fileHash = hash.digest('hex');
      console.log(fileHash);
      resolve();
    });

    readable.on('error', (error) => {
      reject(error);
    });
  });

  getCurrentDir();
}
