/* eslint-env node, mocha */
const assert = require('assert');
const fs = require('fs');
const solmd = require('../src/index').default;
const expected = require('./solmd/expected');

describe('solmd', () => {
  it('GavCoin', () => (
    solmd(['test/solmd/general/GavCoin.sol'], { dest: 'test/output.md' })
      .then(() => fs.readFileSync('./test/output.md', 'utf8'))
      .then((res) => {
        assert.equal(res, expected.general.GavCoin, 'did not produce the correct output');
      })
  ));

  it('should have no ToC', () => (
    solmd(['test/solmd/notoc/GavCoin.sol'], { dest: 'test/output.md', noToc: true })
      .then(() => fs.readFileSync('./test/output.md', 'utf8'))
      .then((res) => {
        assert.equal(res, expected.notoc.GavCoin, 'did not produce the correct output');
      })
  ));

  it('should have events', () => (
    solmd(['test/solmd/events/GavCoin.sol'], { dest: 'test/output.md' })
      .then(() => fs.readFileSync('./test/output.md', 'utf8'))
      .then((res) => {
        assert.equal(res, expected.events.GavCoin, 'did not produce the correct output');
      })
  ));
});
