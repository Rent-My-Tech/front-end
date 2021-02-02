import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';


export default function Login(props) {

  const history = useHistory();

  //initialState
  const initialState = {
    username:"",
    password: "",
    userType: ""
  };

  const [user, setUser] = useState(initialState);

   //onChange handler
   const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  //onSelect handler??
  //need to figure out how to submit user type data. 


  //onSubmit handler
  const login = (e) => {
    e.preventDefault();
    axios
        .post("https://reqres.in/api/users", user)
        .then(res => {
          console.log(res.data)
          localStorage.setItem("token", res.data.payload);
          history.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
  }


  return (
    
    <PageContainer>
      <Nav />
<FormContainer>
  <LeftContainer>
   
  </LeftContainer>
  <RightContainer>
<h2>Hello! <br /> Welcome back. </h2>
<div className='redbar'></div>

    <form onSubmit={login}>
      <label>Username</label> <br />
<input
type='text'
name='username'
onChange={handleChange}
value={user.username}
>
</input><br />
<label>Password</label><br />
<input
type='password'
name='password'
onChange={handleChange}
value={user.password}
>
</input><br />
{/* <a className='forgot' href='#'>forgot password?</a><br /> */}
<div className='select'><select
name='dropdown'>
    <option name=''>select account type</option>
    <option name='userType' onChange={handleChange} value="renter">renter</option>
    <option name='userType' onChange={handleChange} value="owner">owner</option>
  </select></div>
<div className= 'btn'><button>Login</button>
<Link to='/signup'>New user? <span>Signup</span></Link></div> 


    </form> <br />
    
  </RightContainer>

</FormContainer>
 </PageContainer>
  
  );
}


const PageContainer = styled.div `
width:100vw;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction:column;`

const FormContainer = styled.div `
width: 70%;
height:80%;
display:flex;
flex-direction:row;`

const LeftContainer = styled.div`
background: url("https://i.ibb.co/dLD2hdM/Login.jpg");
background-size: cover; 
background-repeat:   no-repeat;
background-position: center center;  
flex:1;`

const RightContainer = styled.div`
/* border: 1px solid black; */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;
flex:1;
display:flex;
flex-direction:column;
align-items: center;

h2{
color: #1A2E35;
text-align:center;
font-size: 3.2rem;
}

.redbar {
    width: 40%;
    margin-top: -2.7rem;
    height:1%;
    background:#FF4F5A;
    border-radius: 2rem;
    margin-bottom: 2.5rem;
}

label{
  color: #1A2E35;
  font-size:1.2rem;
  

  
}

input[type="text"]{
  width:30rem;
  padding: 0.6rem;
  margin-bottom:1rem;
  font-size: 1.3rem;
  border-radius:3rem;
  outline:none;
  border: 0.1rem solid #1A2E35;
  box-sizing:border-box;
  box-shadow: none;
  background: #1A2E35;
  color: #f3e8e8;
}
//had to add this to make a password type input
input[type="password"]{
  width:30rem;
  padding: 0.6rem;
  margin-bottom:1rem;
  font-size: 1.3rem;
  border-radius:3rem;
  outline:none;
  border: 0.1rem solid #1A2E35;
  box-sizing:border-box;
  box-shadow: none;
  background: #1A2E35;
  color: #f3e8e8;
}

.btn {
display:flex;
justify-content:center;
align-self:center;
flex-direction:column;
text-align:center;

}

button {
  background: #385A64;
  color: #f3e8e8;
  border: none;
  font-size: 1.8rem;
  padding: 0.7rem;
  border-radius:2rem;
  align-self: center;
  padding-right:6rem;
  padding-left: 6rem;
  text-transform: uppercase;
  transition: background-color 0.5s ease;
  
}

button:hover {
      background: #FF4F5A;
      color:#1A2E35;
      font-weight:bold;
  }

a {
  font-size:1.2rem;
  /* margin-right:1.6rem; */
  text-decoration:none;
  color: #1A2E35;
  font-weight: bold;
  margin-top: 1rem;
  margin-left:1rem;
  
}

span {
  color: #FF4F5A;
}

.forgot {
    text-align:right;
    font-size:1rem;
}

.select{
    display:flex;
    justify-content:center;
    align-items:center;

    
}

.select select {
  margin-bottom: 1rem;
        background: #1A2E35;
        color: #f3e8e8;
        padding: 0.5rem;
        padding-right: 8rem;
        text-align: center;
        font-size: 1.2rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        
    }
`
