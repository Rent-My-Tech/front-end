import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav'

export default function contact(){
  return(
    <Page >
   <Nav />
 <TopContainer>
    <RightContainer>

<h3>Contact Us</h3>
<div className='bar'></div> 
<form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                 
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                       </div>
                    </div>
              
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
              
                      </div>
                
             
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>


    
</RightContainer>
</TopContainer>
</ Page >

);
}


//STYLES
   
  
  const Page = styled.div `
  width:100vw;
  height:100vh;
  margin-top:2rem;
  background: url("https://i.ibb.co/FhF19Vv/2451377.jpg");
  background-repeat:   no-repeat;
  background-position: center center;  
  background-size: cover;
  flex:1;`
  




//NAV

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

${'' /* .red-box {
    height:6.3rem;
    width:0.5%;
    background:#df5f68;
    
} */}

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

// `

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
  font-size: 3.2rem;
  color: #1A2E35;
  margin-top: 5rem;
}

span {
  color: #df5f68;
  font-weight:bold;
}


.bar {
  width:12%;
  height: 1%;
  background:#fe3845;
  border-radius: 20rem;
  margin-top: -2rem;
  margin-bottom: +4rem;
}

.contact-holder {

  width: 10%;
  margin-top: 2rem;
  font-size: 2rem;
  color: black;
  text-align:center;
  background: rgb(175,179,190, 0.5);
  padding: 1rem;
  height: 30%;
  border-radius: 1rem;


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


.form-group {
  width: 100%;
  padding: 5px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}

.btn{
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

.form-control {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
`
