import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
expect.extend(expectJSX);

import Button from '../../src/components/Button.js';

describe('Button', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Button handleClick={() => 'click'} text='+' />)
  it('should be of type button', () => {
    const actual = renderer.getRenderOutput().type;
    const expected = 'button';
  });
  it('should have a prop of text', () => {
    const actual = renderer.getRenderOutput().props.children;
    const expected = '+';
    expect(actual).toEqual(expected);
  });
  it('should have a prop of text', () => {
    const actual = renderer.getRenderOutput().props.onClick();
    const expected = 'click';
    expect(actual).toEqual(expected);
  });
  it('Button renders correctly', () => {
    const actual = renderer.getRenderOutput();
    const expected = <button onClick={() => 'click'}>+</button>
    expect(actual).toEqualJSX(expected);
  });
});

