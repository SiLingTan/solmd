import compile from './compile';
import markdown from './markdown';

export default function (contracts, args) {
  const compiledContracts = compile(contracts, args);
  return markdown(compiledContracts, args);
}
