import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signuppage from './Components/Signup/Signuppage';
import Signinpage from './Components/Signin/Signinpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lifecycle from './Components/Lifecycle/Lifecycle';

function App() {
  return (
    <div className="App">

      <Router>
        <switch>
        <Route exact path='/' component={Lifecycle}></Route>
          {/* <Route exact path='/' component={Signuppage}></Route>
          <Route exact path='/Signinpage' component={Signinpage}></Route> */}
        </switch>
      </Router>
    </div>
  );
}

export default App;
