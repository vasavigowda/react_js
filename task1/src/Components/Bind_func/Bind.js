import React from 'react';
import Navbar from '../Navbar/Navbar';

class Bind extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.clickHandler();
  }
  render() {
    return (
      <div>    
         
        <Navbar/>
     
      <div>

      <button onClick={this.handleClick}>I dont like {this.props.currentColor}</button>
      </div>
      </div>

    );
  }
} 

export default Bind;





