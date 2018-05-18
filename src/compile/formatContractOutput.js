export default function formatContractOutput({ contracts }) {
  return Object.keys(contracts).reduce((accum, k) => {
    const file = k.split(':')[0];
    const fileFragments = file.split('/');
    const contractName = fileFragments[fileFragments.length - 1].split('.sol')[0];
    const contract = contracts[k][contractName];
    const fileName = `${process.env.PWD}/${k.split(':')[0]}`;
    return Object.assign(accum, {
      [contractName]: {
        ...contract,
        fileName,
        abi: contract.abi,
        devdoc: contract.devdoc,
        userdoc: contract.userdoc,
      },
    });
  }, {});
}
