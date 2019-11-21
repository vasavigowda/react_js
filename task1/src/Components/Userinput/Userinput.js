import React, { Component } from 'react';

class Userinput extends Component {
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="name"/>
            </div>
        );
    }
}

export default Userinput;




// function App() {
//    
//     return (
//       <div className="App">
  
//         <Router>
//           <switch>
//            <Route exact path='/' component={Userinput}></Route>
//           {/* <Route exact path='/' component={Lifecycle}></Route> */}
//             {/* <Route exact path='/' component={Signuppage}></Route>
//             <Route exact path='/Signinpage' component={Signinpage}></Route> */}
//           </switch>
//           <Useroutput age="22"/>
//           <Useroutput age="22"/>
//         <p>{this.state.person[0].name}</p>
//         </Router>
//       </div>
//     );
//   }