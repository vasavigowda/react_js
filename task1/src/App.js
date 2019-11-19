import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signuppage from './Components/Signup/Signuppage';
import Signinpage from './Components/Signin/Signinpage';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Signinpage/>
      {/* <Signuppage/> */}
      <Router>
        <switch>
          <Route exact path='/Signuppage' component={Signuppage}></Route>
          <Route exact path='/' component={Signinpage}></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
