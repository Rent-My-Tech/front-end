import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import RentForm from './RentForm';
import ItemsList from './ItemsList';


export default function Dashboard(props) {
    // console.log(props.user.username)


    
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

        <Dash>
            <div className="topDash">
                <div className="statusBox">
                    <div className="userTypeBox">                         
                        <p><b>Account Type:</b> {props.user.userType}</p>
                    </div>
                    <div className="welcomeTextBox">                         
                        <p>Welcome, {props.user.username}!</p>
                    </div>
                </div>
                <div className="rentForm">
                    <RentForm />
                </div>
            </div>
        </Dash>
        
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

`

const Dash= styled.div`

.topDash{
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
}

.statusBox {
  background-color:#BC343D;
  color: white;
  width:30vw;
  display:flex;
  flex-direction:column-reverse;
  margin-top:0.5rem;
  margin-left:2rem;
  border-radius:80px;

  }

  .welcomeTextBox{
      margin-left: 2rem;
      font-size:1.5rem;
      font-weight:bolder;
  }

  .userTypeBox{
    margin-left: 2rem;
    font-size:1.2rem;
    margin-top:0rem;
  }

  .rentForm{
      background-color:#1B2E35;
      color: white;
      width:80vw;
      display:flex;
      flex-direction: column;
      align-items:center;
      margin-top:0.5rem;
      margin-right:2rem;
      border-radius:80px;
    }

    /* .bottomDash{
        display:flex;
        flex-direction:column;
        align-items:center;
        }

    .itemsList{
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#FFCBCF;
        width:80vw;
        color:#BC343D;
        border-radius:80px;
        margin-top:1.0rem;
    } */


`