import { promises as fs } from 'fs';
import { resolve } from 'path';
import { getCurrentDir } from '../helpers/index.js';

export const handleList = async () => {
  try {
    const currentPath = resolve(process.cwd());
    const files = await fs.readdir(currentPath);

    const directories = [];
    const fileList = [];

    for (const file of files) {
      const filePath = resolve(currentPath, file);
      const stats = await fs.stat(filePath);
      const fileType = stats.isFile() ? 'File' : 'Directory';

      if (stats.isDirectory()) {
        directories.push({ File: file, Type: fileType });
      } else {
        fileList.push({ File: file, Type: fileType });
      }
    }

    directories.sort((a, b) => a.File.localeCompare(b.File));
    fileList.sort((a, b) => a.File.localeCompare(b.File));

    const sortedList = [...directories, ...fileList];

    console.table(sortedList);
    getCurrentDir();
  } catch (err) {
    console.error('Operation failed');
  }
};
