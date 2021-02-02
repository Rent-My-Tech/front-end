import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'





export default function Home(props) {



    return (
      <Page >
        <Navigation>
        <div className='red-box'></div>
         {/* <h3>Rent My <span>Tech </span></h3>  */}
         <div className='links'>
    <Link to='/'>Home</Link> 
    <Link to='/signup'>Sign Up</Link> 
    <Link to='/login'>Login</Link>
    </div>
    </Navigation>
<TopContainer>
<LeftContainer>
  
  </LeftContainer>
<RightContainer>
<h3>Rent My <span className='tech'>Tech</span></h3>
<div className='blue-bar'></div>
<div className='p-holder'><p>
  Tired of paying ridiculous fees for camera and other equipment rentals?
    Bypass the middleman and rent from a <span>real person!</span></p>
    <img src="https://i.ibb.co/yf0CXcS/Add-User-amico.png" alt="computer"/> <br /> 
    <Link to='/signup'>Rent <span>now!</span></Link>
    </div>
</RightContainer>

</TopContainer>




    </Page >
        
    )
}

//STYLES----------------------------------

const Page = styled.div `
  width:100vw;
  height:100vh;`


//NAV-----------------------------------------------

const Navigation = styled.div`
box-sizing:border-box;
background: #385A64;
color: #f3e8e8;
width:100vw;
height: 10%;
margin-top:-0.7%; 
display:flex;
justify-content:space-between;
align-items:center;

h3 {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
  font-size:1.9rem;
  margin-left: -30rem;
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
    height: 100%;
    width: 60%;
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
  padding: 7rem;
}
a:hover {
  color:#df5f68;
} 



`
// Top Container--------------------------------------------------------
const TopContainer = styled.div`
width: 100vw;
height:90vh;
display:flex;
justify-content:center;

`

const LeftContainer = styled.div`
background: url("https://i.ibb.co/tZtC1Bt/Devices-bro.png");
background-size: cover; 
background-repeat:   no-repeat;
background-position: center center;  
flex:1;`

//Text Container--------------------------------------------------------



const RightContainer = styled.div`


box-sizing:border-box;
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;
flex:1;
display:flex;
flex-direction:column;
align-items: center;

h3 {
  font-size: 5rem;
  color: #1A2E35;
  margin-top: 3rem;
}

span {
  color: #df5f68;
  font-weight:bold;
}

.blue-bar {
  width:40%;
  height: 1%;
  background: #385A64;
  border-radius: 20rem;
  margin-top: -4rem;
}

.p-holder {

  width: 50%;
  margin-top: 2rem;
  font-size: 1.3rem;
  color: #EBEBEB;
  text-align:center;
  background: #1A2E35;
  padding: 1rem;
  height: 30%;
  border-radius: 4rem;


  img {
    height: 25rem;
  }
  a {
    background: #1A2E35;
  color: #EBEBEB;
  border: none;
  font-size: 1.8rem;
  padding: 0.7rem;
  border-radius:2rem;
  align-self: center;
  padding-right:6rem;
  padding-left: 6rem;
  font-weight: bold;
  text-decoration:none;
  transition: background-color 0.5s ease;
  }


}

`


