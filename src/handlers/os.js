import os from 'os';
import { getCurrentDir } from '../helpers/index.js';

export function printOSInfo(args) {
  if (args === '--EOL') {
    console.log(JSON.stringify(os.EOL));
  } 
  
  else if (args === '--cpus') {
    const cpus = os.cpus();
    console.log('Total CPUs:', cpus.length);
    
    const cpuData = cpus.map((cpu, index) => ({
      'CPU': `CPU ${index + 1}`,
      'Model': cpu.model,
      'Speed': `${cpu.speed} MHz`,
    }));
    
    console.table(cpuData);
  }
  
  else if (args === '--homedir') {
    const homedir = os.homedir();
    console.log( homedir);
  } 
  
  else if (args === '--username') {
    const username = os.userInfo().username;
    console.log(username);
  } 
  
  else if (args === '--architecture') {
    const nodeArch = process.arch;
    console.log(nodeArch);
  } 
  
  else {
    console.log('Invalid argument');
  } getCurrentDir();
}