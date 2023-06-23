import fs from 'fs';

export function handleAdd(fileName) {
  const currentDirectory = process.cwd();
  const filePath = `${currentDirectory}/${fileName}`;

  fs.writeFile(filePath, '', (error) => {
    if (error) {
      console.error('Operation failed');
      return;
    }

    console.log(`Created file: ${fileName}`);
  });
}
