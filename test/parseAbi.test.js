/* eslint-env node, mocha */

import parseAbi from '../src/compile/parseAbi';

describe('parseAbi', () => {
  it('should work with empty contract', () => {
    parseAbi({ abi: [{ name: 'testMethod' }], devdoc: {}, userdoc: {} });
    // TODO: assert
  });
});
