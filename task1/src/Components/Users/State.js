import React, { Component } from 'react';

class State extends Component {
state = {
Users: [
{ add: 20 },

],
Users1: [
    { sub: 20 },
    
    ],
    Users2: [
        { multiply: 20 },
        
        ],
title: "operations"
}
makeMeYounger = () => {
const newState = this.state.Users.map((User) => {
const tempUser = User;
tempUser.add += 5;
return tempUser;
})
console.log(newState);
this.setState({ newState });
}
makeMeYounger1 = () => {
    const newState1 = this.state.Users1.map((User1) => {
    const tempUser1 = User1;
    tempUser1.sub -= 5;
    if(tempUser1==0){
        return 0;  
    }
    return tempUser1;
   
    })
    console.log(newState1);
    this.setState({ newState1});
    }
    makeMeYounger2 = () => {
        const newState2 = this.state.Users2.map((User2) => {
        const tempUser2 = User2;
        tempUser2.multiply *= 5;
        return tempUser2;
        })
        console.log(newState2);
        this.setState({ newState2});
        }
render() {
return (
<div>
    <div>
<button onClick={this.makeMeYounger}>add</button>
<br />
<h1>{this.state.title}</h1>
{
this.state.Users.map((User) => (
<div>User add={User.add}</div>
))
}
</div>
<div>
<button onClick={this.makeMeYounger1}>sub</button>
<br />
<h1>{this.state.title}</h1>
{
this.state.Users1.map((User1) => (
<div>User1 sub={User1.sub}</div>
))
}
</div>
<div>
<button onClick={this.makeMeYounger2}>multiply</button>
<br />
<h1>{this.state.title}</h1>
{
this.state.Users2.map((User2) => (
<div>User2 multiply={User2.multiply}</div>
))
}
</div>
</div>
)
}
}
export default State;