import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Lifecycle extends Component {
   constructor(props){
    super(props);
     console.log('set props');
    }
    componentWillMount(){
      console.log('before render');
    }
    componentDidMount(){
        console.log('after render');
    }
    render() {
        return (

            <div>
                <Navbar/>
                <h1>hello world</h1>
            </div>
        );
    }
}

export default Lifecycle;