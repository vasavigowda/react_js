import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signuppage from './Components/Signup/Signuppage';
import Signinpage from './Components/Signin/Signinpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lifecycle from './Components/Lifecycle/Lifecycle';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';
import State from './Components/Users/State';
import Bind_func from './Components/Bind_func/Bind_func';
import API from './Components/Restfull/API';

class App extends Component {
  render() {
    return (
      <div className="App">   
     
        <Router>
        <switch>
        <Route exact path='/' component={API}></Route> 
        {/* <Route exact path='/bind_func' component={Bind_func}></Route> 
        <Route exact path='/lifecycle' component={Lifecycle}></Route> 
        <Route exact path='/userinput' component={Userinput}></Route> 
        <Route exact path='/state' component={State}></Route> 
        <Route exact path='/' component={Signuppage}></Route>
        <Route exact path='/Signinpage' component={Signinpage}></Route>  */}
        </switch>
        </Router>
      </div>
    )
  }
}
export default App;
