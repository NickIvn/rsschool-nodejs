import fs from 'fs';
import { getCurrentDir } from "../helpers/index.js"

export async function handleRename(oldName, newName) {
  const oldPath = `${process.cwd()}/${oldName}`;
  const newPath = `${process.cwd()}/${newName}`;

  await new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  getCurrentDir();
}
