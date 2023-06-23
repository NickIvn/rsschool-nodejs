import fs from 'fs';

export function handleRename(oldName, newName) {
  const currentDirectory = process.cwd();
  const oldPath = `${currentDirectory}/${oldName}`;
  const newPath = `${currentDirectory}/${newName}`;

  fs.rename(oldPath, newPath, (error) => {
    if (error) {
      console.error('Operation failed');
      return;
    }

    console.log(`Renamed file from ${oldName} to ${newName}`);
  });
}
