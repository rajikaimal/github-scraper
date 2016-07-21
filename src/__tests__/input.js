jest.unmock('../components/core/input.react.js');
jest.dontMock('react')
jest.dontMock('react-dom')
jest.dontMock('react-addons-test-utils')

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../components/core/input.react.js';

function handleClick(value) {
    let username = value;
    return username;
}

describe('InputComponent', () => {
  it('to return a text to callback', () => {
    const input = TestUtils.renderIntoDocument(
      <Input onclick={handleClick} />
    );

    const inputNode = ReactDOM.findDOMNode(input);

    TestUtils.Simulate.click(input.refs.username);

    expect(handleClick).toBeDefined();
  });
});