import fs from 'fs';
import solc from 'solc';
import compilerSettings from './compilerSettings';

function findImports(path) {
  const output = fs.readFileSync(path.replace('file://', ''));
  return { contents: output.toString() };
}

export default function compileContracts(sources) {
  const settings = { ...compilerSettings, sources };
  const compiledContracts = solc.compileStandardWrapper(JSON.stringify(settings), findImports);
  return JSON.parse(compiledContracts);
}
