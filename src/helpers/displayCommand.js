import { getCurrentDir } from "./currentDir.js";

export function displayCommand() {
  const commandList = [
    { command: "up", description: "Go upper from current directory" },
    { command: "cd path_to_directory", description: "Go to dedicated folder from current directory" },
    { command: "cd", description: "Go to home directory" },
    { command: "ls", description: "Print list of all files and folders in current directory" },
    { command: "cat path_to_file", description: "Read file and print it's content in console" },
    { command: "add new_file_name", description: "Create empty file in current working directory" },
    { command: "rn path_to_file new_filename", description: "Rename file" },
    { command: "cp path_to_file path_to_new_directory", description: "Copy file" },
    { command: "mv path_to_file path_to_new_directory", description: "Move file" },
    { command: "rm path_to_file", description: "Delete file" },
    { command: "os --EOL", description: "Get EOL(default system End-Of-Line)" },
    { command: "os --cpus", description: "Get host machine CPUs info" },
    { command: "os --homedir", description: "Get home directory" },
    { command: "os --username", description: "Get current system user name" },
    { command: "os --architecture", description: "Get CPU architecture" },
    { command: "hash path_to_file", description: "Calculate hash for file" },
    { command: "compress path_to_file path_to_destination", description: "Compress file (path_to_destination include filename)" },
    { command: "decompress path_to_file path_to_destination", description: "Decompress file (path_to_destination include filename)" },
    { command: ".exit, ctrl + C", description: "Exit from the program" },
  ];

  console.log("Commands list:");
  commandList.forEach(({ command, description }) => {
    console.log(`${command.padEnd(50)} - ${description}`);
  });

  getCurrentDir();
}
