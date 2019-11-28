import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
    state = {
        person: [{
          name: "vasvigowda"
        }]
      }
      buttonClickHandler = () => {
        console.log("clicked");
        this.setState({
          person: [{
            name: 'niveditha'
          }]
        })
      }
    render() {
        return (
            <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <input type="text" name="name" placeholder="name"></input>
                <input type="text" name="name" placeholder="lastname"></input>
                <Useroutput age="22"/>
                  <p>{this.state.person[0].name}</p>
          <button onClick={this.buttonClickHandler}>clickhere</button>
        <Useroutput age="22"/> 
            </div>
            </div>
        );
    }
}

export default Userinput;
