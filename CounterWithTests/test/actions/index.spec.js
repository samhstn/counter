import expect from 'expect';

import { increment, decrement } from '../../src/actions/index.js';

describe('increment', () => {
  const expected = increment();
  const actual = { type: 'INCREMENT'}
  expect(expected).toEqual(actual);
});

describe('decrement', () => {
  const expected = decrement();
  const actual = { type: 'DECREMENT'}
  expect(expected).toEqual(actual);
});
