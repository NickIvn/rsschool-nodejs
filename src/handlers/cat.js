import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export async function handleCat(fileName) {
  const filePath = `${process.cwd()}/${fileName}`;

  try {
    const readable = fs.createReadStream(filePath, { encoding: 'utf8' });

    readable.on('data', (chunk) => {
      console.log(chunk);
    });

    await new Promise((resolve) => {
      readable.on('end', () => {
        resolve();
      });

      readable.on('error', (error) => {
        console.error('Operation failed');
        resolve();
      });
    });

    getCurrentDir();
  } catch (error) {
    console.error('Operation failed');
  }
}
