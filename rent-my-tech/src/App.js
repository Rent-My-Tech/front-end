import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App() {
  return (
<Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
  </Switch>
</Router>
  
  )
}

export default App;