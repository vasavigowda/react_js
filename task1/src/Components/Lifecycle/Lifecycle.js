import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log('good morning');
    }
    componentWillMount(){
        console.log('good afternoon');
    }
    componentDidMount(){
        console.log('good evening');
    }
    render() {
        return (
            <div>
                good night
            </div>
        );
    }
}

export default Lifecycle;