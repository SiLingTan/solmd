/* eslint-env node, mocha */

import parseMethodOutputs from '../src/compile/parseMethodOutputs';

describe('parseMethodOutputs', () => {
  it('should notify user when return value is invalid', () => {
    parseMethodOutputs({ devDocs: { return: '' }, method: { name: 'testMethod' } });
  });
});
