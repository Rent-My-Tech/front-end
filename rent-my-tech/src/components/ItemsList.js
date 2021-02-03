import React from 'react';
import styled from 'styled-components'

const ItemsList = () => {



    return(
        <>
            <ItemBox>
            <div className="mainBox"> 
                <div className="itemsList">
                    <h1>ITEMS FOR RENT</h1>  
                    <div className="itemBox">
                        <p><b>Item Name:</b><br/>Camera</p>
                        <p><b>Price:</b><br/>$20.00</p>
                        <p><b>Description:</b><br/>Nikon DSLR!</p>
                        <button>Delete</button>
                    </div>
                </div>
            </div>    
            </ItemBox>
        </>
    )
}


const ItemBox = styled.div `

.mainBox{
display:flex;
flex-direction:column;
align-items:center;
}

.itemsList {
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#FFCBCF;
    width:70vw;
    color:#BC343D;
    border-radius:80px;
    margin-top:1.0rem;
    margin-bottom:1.0rem;
}

.itemBox{
    background-color:#E1E1E1;
    border-radius:80px;
    border-color:#DF5F69;
    border-style:dotted;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:1rem;
    width:20vw;
    margin-bottom:15px;
}

p{
    color:#385A64;
    margin-top:5px;
    margin-bottom:5px;
}


`


export default ItemsList;