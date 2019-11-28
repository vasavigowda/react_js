import React, { Component } from 'react';
import  './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
              <a  className="nav1" href='/'>Task1</a>
              <a className="nav1" href='/lifecycle'>Task2</a>
              <a className="nav1" href='/Userinput'>Task3</a>
              <a className="nav1" href='/state'>Task4</a>
              <a className="nav1" href='/Bind_func'>Task5</a>
              <a className="nav1" href='/API'>Task6</a>
            </div>
            
        );
    }
}

export default Navbar;