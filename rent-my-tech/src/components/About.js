import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav'

export default function About(){
  return(
    <Page >
        <Nav />
    <TopContainer>
    <RightContainer>

          <h3>About Us</h3>
          <div className='bar'></div>
          <p class="holder">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

</RightContainer>
</TopContainer>
</Page >
);
}

//STYLES
   
  
const Page = styled.div `
width:100vw;
height:100vh;
margin-top:1.76rem;
background: url("https://i.ibb.co/F3ZTLSY/2480553.jpg") center center no-repeat ;
background-size: cover;
flex:1;`

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
width:9%;
height: 1%;
background:#fe3845;
border-radius: 20rem;
margin-top: -2rem;
margin-bottom: +4rem;
}

.holder {

width: 50%;
margin-top: 2rem;
font-size: 2rem;
color: dark grey;
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
