export default function formatContractOutput({ contracts }) {
  return {
    contracts: Object.keys(contracts).reduce((o, k) => {
      const file = k.split(':')[0];
      const fileFragments = file.split('/');
      const contractName = fileFragments[fileFragments.length - 1].split('.sol')[0];
      const contract = contracts[k][contractName];
      const fileName = `${process.env.PWD}/${k.split(':')[0]}`;
      return {
        ...o,
        [contractName]: {
          ...contract,
          fileName,
          abi: contract.abi,
          devdoc: contract.devdoc,
          userdoc: contract.userdoc,
        },
      };
    }, {}),
  };
}
