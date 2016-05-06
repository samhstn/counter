import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
expect.extend(expectJSX);

import Number from '../../src/components/Number.js';

describe('Number', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Number number={0} />)
  it('should be of type div', () => {
    const actual = renderer.getRenderOutput().type;
    const expected = 'div';
  });
  it('should have one prop of number', () => {
    const actual = renderer.getRenderOutput().props.children;
    const expected = 0;
    expect(actual).toEqual(expected);
  });
  it('Number works', () => {
    const actual = renderer.getRenderOutput();
    const expected = <div>0</div>
    expect(actual).toEqualJSX(expected);
  });
});

