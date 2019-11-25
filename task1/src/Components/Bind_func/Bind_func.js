import React, { Component } from 'react';
import  Bind from './Bind.js';


class Bind_func extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red'
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'red' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.color}}>
        <Bind clickHandler={this.changeColor} currentColor={this.state.color}></Bind>
      </div>
    )
  }
}
export default Bind_func;



