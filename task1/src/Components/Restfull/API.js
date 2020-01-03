import React, { Component } from 'react';
import Data_display from './Data_display';

class API extends Component {
  render() {
    return (
    <Data_display list={this.state.list} list1={this.state.list1}/>
    )
  }
  state = {
    list: ' ',
    list1:[]  
  }
    componentDidMount() {
      fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((hello) => {
        this.setState({ list1: hello })
      })
      .catch(console.log)
     
    
  }
}

export default API;