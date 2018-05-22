import compileContracts from './compileContracts';
import formatContractOutput from './formatContractOutput';

function formatSource(contractFiles) {
  return contractFiles.reduce((accum, filepath) => ({
    [filepath]: { urls: [`file://${filepath}`] },
  }), {});
}

export default function (contractFiles) {
  const sources = formatSource(contractFiles);
  const rawOutput = compileContracts(sources);
  const formattedOutput = formatContractOutput(rawOutput);
  return formattedOutput;
}
