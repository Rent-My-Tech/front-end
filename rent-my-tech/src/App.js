import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

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
    <Route path="/Dashboard"> 
      <Dashboard />
    </Route>
  </Switch>
</Router>
  
  )
}

export default App;