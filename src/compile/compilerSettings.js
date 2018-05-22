export default {
  language: 'Solidity',
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
};
