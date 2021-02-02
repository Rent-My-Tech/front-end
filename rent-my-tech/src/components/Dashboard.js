import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


export default function Dashboard(props) {
    console.log(props.user.username)


    return (
    <>
        <Navigation>
        <div className='red-box'></div>
         <h3>Rent My <span>Tech </span></h3> 
         <div className='links'>
            <Link to='/'>Home</Link> 
            <Link to='/'>Logout</Link> 
         </div>
        </Navigation>
        <div className="welcomeText">                         
            <h1>Welcome, {props.user.username}</h1>
        </div>
    </>   
        
    )
}

//STYLES----------------------------------
const Navigation = styled.div`
box-sizing:border-box;
background: #385A64;
color: #f3e8e8;
width:100vw;
height: 10%;
display:flex;
justify-content:space-between;
align-items:center;

h3 {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
  font-size:1.9rem;
  margin-left: -64rem;
  letter-spacing: 0.2rem;
}
span {
 color: #df5f68;
 font-weight: bold;
 font-size:2rem;
}

.red-box {
    height:6.3rem;
    width:0.5%;
    background:#df5f68;
    
}

.links {
    background: #df5f68;
    height: 6.4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 9rem 0 0 4rem;
    
}
.links:hover {
    background: #1A2E35;
    
}

a {
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    font-family: 'Quicksand', sans-serif;
  font-size:1.4rem;
  margin-right:2rem;
  text-decoration:none;
  color: #f3e8e8;
  letter-spacing: 0.2rem;
  font-weight:normal;
  padding-left: 5rem;
}
a:hover {
  color:#df5f68;
} 

.welcomeText {

}



`