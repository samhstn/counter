import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { increment, decrement } from '../actions/index.js';
import Number from '../components/Number.js';
import Button from '../components/Button.js';
import store from '../../store.js';
import NumberReducer from '../reducers/Number.js';

describe('actions', () => {
  it('increment returns the correct object', () => {
    const actual = increment();
    const expected = {
      type: 'INCREMENT'
    };
    expect(actual).toEqual(expected);
  });

  it('decrement returns the correct object', () => {
    const actual = decrement();
    const expected = {
      type: 'DECREMENT'
    };
    expect(actual).toEqual(expected);
  });
});

describe('Number', () => {
  it('should render the number', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Number number='3' />);
    const actual = renderer.getRenderOutput();
    const expected = <h1>3</h1>
    expect(actual).toEqualJSX(expected);
  });
});

describe('Button', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Button handleClick='clicking' text='+' />)

  it('should be a button', () => {
    const actual = renderer.getRenderOutput().type;
    const expected = 'button';
    expect(actual).toEqual(expected);
  });
  it('should have an onClick property', () => {
    const actual = renderer.getRenderOutput().props.onClick;
    const expected = 'clicking';
    expect(actual).toEqual(expected);
  });
  it('should have a text input', () => {
    const actual = renderer.getRenderOutput().props.children;
    const expected = '+';
    expect(actual).toEqual(expected);
  });
});

describe('store', () => {
  it('should have an initial state of 0', () => {
    const actual = store.getState();
    const expected = {
      Number: 0
    };
  expect(actual).toEqual(expected);
  });
  it('should work with a series of actions', () => {
    const actions = [{ type: 'DECREMENT' }, { type: 'INCREMENT' }, { type: 'DECREMENT' }];
    actions.forEach(action => store.dispatch(action));
    const actual = store.getState();
    const expected = {
      Number: -1
    };
    expect(actual).toEqual(expected);
  });
});

describe('reducers', () => {
  it('should work for higher values', () => {
    const stateBefore = () => 100
    const action = { type: 'INCREMENT' };
    const actual = NumberReducer(stateBefore(), action);
    const expected = 101;
    expect(actual).toEqual(expected);
  });
  it('should work for lower values', () => {
    const stateBefore = () => -100
    const action = { type: 'INCREMENT' };
    const actual = NumberReducer(stateBefore(), action);
    const expected = -99;
    expect(actual).toEqual(expected);
  });
  
});
