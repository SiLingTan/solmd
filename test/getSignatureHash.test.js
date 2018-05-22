/* eslint-env node, mocha */

import assert from 'assert';
import getFunctionSignature from '../src/compile/getSignatureHash';

describe('getSignatureHash', () => {
  it('getSignatureHash', () => {
    assert.equal(getFunctionSignature(''), 'c5d24601');
  });
});
