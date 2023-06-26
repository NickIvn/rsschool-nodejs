import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export async function handleAdd(fileName) {
  const filePath = `${process.cwd()}/${fileName}`;

  try {
    await fs.promises.writeFile(filePath, '');
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed');
  }
}
