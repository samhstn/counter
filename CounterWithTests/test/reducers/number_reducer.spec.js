import expect from 'expect';

import numberReducer from '../../src/reducers/number_reducer.js';

describe('numberReducer', () => {
  it('should return initial state', () => {
    const actual = numberReducer(undefined, {type: 'asdf'});
    const expected = 0;
    expect(actual).toEqual(expected);
  });
  it('should return a predefined state', () => {
    const actual = numberReducer(10, {type: 'asdf'});
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  it('should increment from initial state', () => {
    const actual = numberReducer(undefined, {type: 'INCREMENT'});
    const expected = 1;
    expect(actual).toEqual(expected);
  });
  it('should increment from predefined state', () => {
    const actual = numberReducer(10, {type: 'INCREMENT'});
    const expected = 11;
    expect(actual).toEqual(expected);
  });
  it('should decrement from predefined state', () => {
    const actual = numberReducer(10, {type: 'DECREMENT'});
    const expected = 9;
    expect(actual).toEqual(expected);
  });
});

