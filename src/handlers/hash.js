import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js";
import crypto from 'crypto';

export async function calculateHash(fileName) {
  const filePath = `${process.cwd()}/${fileName}`;
  const hash = crypto.createHash('sha256');

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    console.error('Operation failed');
    return;
  }

  const readable = fs.createReadStream(filePath);

  try {
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
  } catch (error) {
    console.error('Operation failed');
  }
  getCurrentDir();
}
