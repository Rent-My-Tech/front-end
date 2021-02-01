import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';





export default function Login(props) {
  return (
    
    <PageContainer>
      <Nav><h3>Rent My<span> Tech</span></h3>
      <Link to='/'>Home</Link></Nav>
<FormContainer>
  <LeftContainer>
   
  </LeftContainer>
  <RightContainer>
<h2>Hello! <br /> Welcome back. </h2>

    <form>
      <label>Username</label> <br />
<input
type='text'
name='userName'
placeholder='Username here...'
// value={}
>
</input><br />
<label>Password</label><br />
<input
type='text'
name='password'
placeholder='Password here...'
// value={}
>
</input><br />
{/* <a className='forgot' href='#'>forgot password?</a><br /> */}
<div className='select'><select
name='dropdown'>
    <option name=''>-select-</option>
    <option name='renter'>renter</option>
    <option name='owner'>owner</option>
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
  border: 0.3rem solid #385A64;
  box-sizing:border-box;
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
  font-size: 2rem;
  padding: 0.7rem;
  border-radius:2rem;
  align-self: center;
  padding-right:2rem;
  padding-left: 2rem;
  
}

a {
  font-size:1.4rem;
  margin-right:2rem;
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
        background:#385A64;
        color: #f3e8e8;
        padding: 0.3rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 1rem;
        
    }
`

const Nav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;
box-sizing:border-box;
background: #385A64;
color: #f3e8e8;
width:100vw;
height: 6%;
margin-top:-2.7%; 
display:flex;
justify-content:space-between;
align-items:center;

h3 {
  font-size:1.6rem;
  margin-left:2rem;
  letter-spacing: 0.2rem;
}
span {
 color: #FF4F5A;
}
a {
  font-size:1.4rem;
  margin-right:2rem;
  text-decoration:none;
  color: #f3e8e8;
  letter-spacing: 0.2rem;
}
a:hover {
  color:#FF4F5A;
} 
`