import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import axios from 'axios'

function App() {

 
  axios
  .get('https://kayode94-rentmytech.herokuapp.com/items/items')
  .then(res => {
      console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })





  //login initialState
  const loginState = {
    username:"",
    password: "",
    userType: false
  };

  const [user, setUser] = useState(loginState);
  

  //signup initialState

const signupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userType: false
}

const [newUser, setNewUser] = useState(signupState);



  return (
<Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login user={user} setUser={setUser} />
    </Route>
    <Route path="/signup">
      <SignUp newUser={newUser} setNewUser={setNewUser} />
    </Route>
    <PrivateRoute exact path="/Dashboard"> 
      <Dashboard user={user} component={Dashboard} />
    </PrivateRoute>
  </Switch>
</Router>
  
  )
}

export default App;