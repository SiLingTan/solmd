import fs from 'fs';
import getContractData from './getContractData';

function checkFilesExist(files) {
  files.forEach((file) => {
    if (!fs.existsSync(file)) {
      process.stderr.write(`${file}: No such file or directory
`);
      process.exit(1);
    }
  });
}

export default function (contractFiles) {
  checkFilesExist(contractFiles);
  return getContractData(contractFiles);
}
