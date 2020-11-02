import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
class App extends Component {


  render() {
    return (
      <BrowserRouter>

        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={Dashboard} />


      </BrowserRouter>
    )
  }
}
export default App;