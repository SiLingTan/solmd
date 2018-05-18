import fs from 'fs';
import solc from 'solc';

function findImports(path) {
  const output = fs.readFileSync(path.replace('file://', ''));
  return { contents: output.toString() };
}

export default function compileContracts(sources) {
  const res = solc.compileStandardWrapper(JSON.stringify({
    language: 'Solidity',
    sources,
    settings: {
      outputSelection: {
        '*': {
          '*': [
            'abi',
            'asm',
            'ast',
            'bin',
            'bin-runtime',
            'clone-bin',
            'interface',
            'opcodes',
            'srcmap',
            'srcmap-runtime',
            'devdoc',
            'userdoc',
          ],
        },
      },
    },
  }), findImports);
  return JSON.parse(res);
}
