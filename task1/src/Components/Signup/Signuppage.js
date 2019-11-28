import React, { Component } from 'react';
import './Signuppage.css';
import Navbar from '../Navbar/Navbar';

class Signuppage extends Component {
    render() {
        return (
            <div>
        <div>
        <Navbar/>
        <br/><br/><br/>
        </div>
            <div className="textcolor">
                <h1>Sign up form </h1>
                <form className="form">
                    <input type="text" placeholder="First name" className="input"></input><br /><br />
                    <input type="text" placeholder="Last name" className="input"></input><br /><br />
                    <input type="text" placeholder="Mail@example.com" className="input"></input><br /><br />
                    <input type="text" placeholder="Please enter a phone num" className="input"></input><br /><br />
                    <input type="Password" placeholder="Password" className="input"></input><br /><br />
                    <input type="password" placeholder="Confirm password" className="input"></input><br /><br />
                    <input type="checkbox" className="checkbox1"></input>
                    I agree to terms and Privacy Policies<br /><br />
                    <button className="button">Sign up</button>
                </form>
                <a href="/Signinpage">Signin</a>
            </div>
            </div>
        );
    }
}

export default Signuppage;