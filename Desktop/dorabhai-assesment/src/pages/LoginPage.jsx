import React, { Component } from 'react'
import '../App.css'
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  clicked = () => {

    fetch('http://65.0.14.105/API/admin/adminLogin.php', {
      method: "post",
      body: JSON.stringify(this.state)
    }).then((response) => {
      response.json().then((result) => {
        
        localStorage.setItem("token",result.jwt)
        
      })
    })
  }

  render() {
    return (


      <div className="main">

        <div className="main-header">
          <h1>Login Form</h1>
          <hr />
          <h3>Welcome to Login</h3>
          <p><input type="text" placeholder="username" onChange={(e) => { this.setState({ username: e.target.value }) }} /></p>
          <p><input type="password" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }} /></p>
          <p><button onClick={this.clicked}>continue</button></p>
        </div>

      </div>


    )
  }
}

export default LoginPage