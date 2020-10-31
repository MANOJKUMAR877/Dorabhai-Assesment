import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

clicked=()=>{
  alert("hai")
}

  render() {
    return (

      
        <div className="main">
         
          <div className="main-header">
            <h1>Login Form</h1>
            <hr />
            <h3>Welcome to Login</h3>
            <p><input type="text" placeholder="username" onChange={(event, newname) => { this.setState({ username: newname }) }} /></p>
            <p><input type="password" placeholder="password" onChange={(event, newname) => { this.setState({ password: newname }) }} /></p>
            <p><button onClick={this.clicked}>continue</button></p>
          </div>
         
        </div>
     

    )
  }
}

export default App