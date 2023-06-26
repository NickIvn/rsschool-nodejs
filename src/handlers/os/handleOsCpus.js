import os from 'os';
import { getCurrentDir } from '../../helpers/index.js';

export async function handleOsCpus() {
  try {
    const cpuData = os.cpus().map(({ model, speed }) => ({
      model,
      speed: `${speed} MHz`,
    }));
    console.table(cpuData);
    getCurrentDir();
  } catch (error) {
    console.error('Operation failed', error);
  }
}
