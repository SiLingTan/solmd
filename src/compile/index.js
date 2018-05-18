import fs from 'fs';
import parseAbi from './parse-abi';
import solc from './solc';

function getContractMetadata(contract) {
  const { fileName } = contract;
  const { devdoc } = contract;
  const { author, title } = devdoc;
  return {
    fileName: fileName.replace(process.env.PWD, ''),
    author,
    title,
  };
}

function compile({ contracts }) {
  const data = [];
  Object.keys(contracts).forEach((contractName) => {
    const contract = contracts[contractName];
    const metadata = getContractMetadata(contract);
    data.push({
      ...metadata,
      name: contractName,
      abiDocs: parseAbi(contract),
    });
  });

  return data;
}

function checkFilesExist(files) {
  files.forEach((file) => {
    if (!fs.existsSync(file)) {
      process.stderr.write(`${file}: No such file or directory
`);
      process.exit(1);
    }
  });
}

export default function (contractFiles, opts) {
  checkFilesExist(contractFiles);
  return solc(contractFiles)
    .then(({ contracts }) => compile({ ...opts, contracts }))
    .catch(() => {
      console.error(`solmd: Failed to compile contracts at ${contractFiles}`); // eslint-disable-line no-console
      process.exit(1);
    });
}
