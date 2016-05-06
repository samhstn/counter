import React, { Component } from 'react';
import { connect } from 'react-redux';

import Number from './Number.js';
import Button from './Button.js';
import { increment, decrement } from '../actions/index.js';

class Counter extends Component {
  render() {
    const { number, increment, decrement } = this.props;
    return (
      <div>
        <Number number={ number } />
        <Button handleClick={ increment } text="+" />
        <Button handleClick={ decrement } text="-" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.Number
})

export default connect(mapStateToProps, { increment, decrement })(Counter); 
