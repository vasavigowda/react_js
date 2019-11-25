import React,{Component} from 'react';
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




 
class App extends Component{
  state={
        person:[{
              name:"vasvigowda"
            }]
        } 
        buttonClickHandler=()=>{
          console.log("clicked");
          this.setState({
          person:[{
              name:'niveditha'
            }]
          })
        } 
render(){
  return(
    <div className="App">

      {/* <State/> */}
  {/* <p>{this.state.person[0].name}</p>
  <button onClick={this.buttonClickHandler}>clickhere</button> */}
  {/* <Userinput/>
  <Useroutput age="22"/> */}
  {/* <Useroutput age="22"/> */}
  <Router>
    <switch>
          <Route exact path='/' component={Bind_func}></Route> 
       {/* <Route exact path='/' component={Lifecycle}></Route>  */}
       {/* <Route exact path='/' component={Signuppage}></Route> */}
      {/* <Route exact path='/Signinpage' component={Signinpage}></Route>  */}
           </switch>
 </Router>

</div>
  )
}
}
export default App;
