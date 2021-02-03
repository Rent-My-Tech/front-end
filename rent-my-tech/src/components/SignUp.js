import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import Nav from './Nav'
import axios from 'axios';


export default function SignUp(props) {


const history = useHistory();

//onChange handler
const handleChange = (e) => {
  props.setNewUser({...props.newUser, [e.target.name]: e.target.value})
};

//onSubmit handler
const createAccount = (e) => {
  e.preventDefault();
  axios
      .post("https://reqres.in/api/users", props.newUser)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
          history.push('/login')
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
<h2> Create an account. </h2>
<div className='redbar'></div>
 <Link className='account' to='/login'>
     Already have an account? <span className='login'>Login</span></Link>

<form onSubmit={createAccount}>


<label>First Name</label> <br />
<input
type='text'
name='firstName'
onChange={handleChange}
value={props.newUser.firstName}
/>< br/>

<label>Last Name</label> <br />
<input
type='text'
name='lastName'
onChange={handleChange}
value={props.newUser.lastName}
/><br />

<label>Username</label> <br />
<input
type='text'
name='username'
onChange={handleChange}
value={props.newUser.userName}
/><br />

<label>Email</label> <br />
<input
type='email'
name='email'
onChange={handleChange}
value={props.newUser.email}
/><br />

<label>Password</label> <br />
<input
type='password'
name='password'
onChange={handleChange}
value={props.newUser.password}
/>

<div className='select'><select
name='dropdown'>
    <option name=''>select account type</option>
    <option name='renter'>Renter</option>
    <option name='owner'>Owner</option>
  </select></div>
  <div className= 'btn'><button>Sign Up</button>
</div> 

</form>
  
</RightContainer>

</FormContainer>
</PageContainer>
  
  );
}

//Styles

//main box ---------------------------------------------------
const PageContainer = styled.div `
width:100vw;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction:column;`

//box holding image and form----------------------------------
const FormContainer = styled.div `
width: 70%;
height:80%;
display:flex;
flex-direction:row;`

//image container----------------------------------------------
const LeftContainer = styled.div`
background: url("https://i.ibb.co/dfXw5GS/Signup.jpg");
background-size: cover; 
background-repeat:   no-repeat;
background-position: center center;  
flex:1;`

//form container-----------------------------------------------
const RightContainer = styled.div`
box-sizing:border-box;
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
margin-bottom: -0.2rem;
}

.redbar {
    width: 40%;
    height:1%;
    background:#FF4F5A;
    border-radius: 2rem;
}

a {
  font-size:1.4rem;
  margin-right:2rem;
  text-decoration:none;
  font-weight: bold;
  margin-top: 1rem;
  margin-left:1rem;
  color: #7b8183;
  font-size: 0.9rem;
margin-bottom:3rem;
  
}

.login {
    color: #FF4F5A;
}

label{
  color: #1A2E35;
  font-size:1.1rem;
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

input[type="email"]{
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



.account{
    font-size: 1rem;
    color: #1A2E35;
    
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
