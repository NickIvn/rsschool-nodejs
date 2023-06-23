import fs from 'fs';
import path from 'path';
import { getCurrentDir } from "../helpers/index.js"

export async function handleCopyFile(source, newDirectory) {
  const sourcePath = `${process.cwd()}/${source}`;
  const destinationPath = path.join(process.cwd(), newDirectory, path.basename(source));

  try {
    await fs.promises.access(sourcePath, fs.constants.F_OK);
    await fs.promises.copyFile(sourcePath, destinationPath);
  } catch (error) {
    console.error('Operation failed');
  }
  getCurrentDir();
}
