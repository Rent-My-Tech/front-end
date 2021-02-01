<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> main
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <h1>UseMyTech</h1>
     
    </div>
  );
=======
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
>>>>>>> main
}

export default App;