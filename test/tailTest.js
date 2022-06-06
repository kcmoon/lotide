const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns 2 for the array.length of ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words).length, 2);
  });
  it('return 0 for array of ["hello"]', () => {
    assert.deepEqual(tail(['hello']).length, 0);
  })
});