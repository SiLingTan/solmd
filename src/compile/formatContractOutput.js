import path from 'path';
import parseAbi from './parseAbi';

function getFilename(fileWithContract) {
  return fileWithContract.split(':')[0];
}

export default function formatContractOutput({ contracts }) {
  return Object.keys(contracts).reduce((accum, fileWithContract) => {
    const filename = getFilename(fileWithContract);
    const name = path.basename(filename, '.sol');
    const contract = contracts[fileWithContract][name];
    const { title, author } = contract.devdoc;
    return Object.assign(accum, {
      [name]: {
        ...contract,
        name,
        title,
        author,
        abiDocs: parseAbi(contract),
      },
    });
  }, {});
}
