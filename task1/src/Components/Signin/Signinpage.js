import React, { Component } from 'react';
import './Signinpage.css';
import profile from './profile.jpeg';

class Signinpage extends Component {
    render() {
        return (
            <div className="textcolor">
                <h1>Login form</h1>
                <img src={profile}/>
                <form>
                <input type="text" placeholder="mobile or Email" className="input"></input><br/><br/>
                <input type="Password" placeholder="Password" className="input"></input><br/><br/> 
                <input type="checkbox" className="checkbox"></input>
                Remember me<br/><br/>
                <button className="signin">Sign in</button>
                </form>
                Create a new account<br/>
                or
                <div className="socialicons">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className="icons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                </div>
                </div>
                <a href="Signuppage">Signuppage</a>
            </div>
        );
    }
}

export default Signinpage;