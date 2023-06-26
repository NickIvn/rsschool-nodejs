import { handleOsEOL } from './handleOsEOL.js';
import { handleOsCpus } from './handleOsCpus.js';
import { handleOsHomedir } from './handleOsHomedir.js';
import { handleOsUsername } from './handleOsUsername.js';
import { handleOsArchitecture } from './handleOsArchitecture.js';

export function handleOsCommand(arg) {
  switch (arg) {
    case '--EOL':
      handleOsEOL();
      break;
    case '--cpus':
      handleOsCpus();
      break;
    case '--homedir':
      handleOsHomedir();
      break;
    case '--username':
      handleOsUsername();
      break;
    case '--architecture':
      handleOsArchitecture();
      break;
    default:
      console.error('Invalid argument');
      break;
  }
}
