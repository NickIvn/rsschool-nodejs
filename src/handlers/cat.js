import fs from 'fs';

export function handleCat(fileName) {
  const currentDirectory = process.cwd();
  const filePath = `${currentDirectory}/${fileName}`;

  const readable = fs.createReadStream(filePath, { encoding: 'utf8' });

  readable.on('data', (chunk) => {
    console.log(chunk);
  });

  readable.on('end', () => {
    console.log(`Finished reading file: ${fileName}`);
  });

  readable.on('error', (error) => {
    console.error('Operation failed');
  });
}
