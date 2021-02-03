import React from 'react';
import styled from 'styled-components'

const ItemsList = () => {



    return(
        <>
            <h1>ITEMS FOR RENT</h1>
            <ItemBox>
            <div className="itemBox">
                <p><b>Item Name:</b><br/>Camera</p>
                <p><b>Price:</b><br/>$20.00</p>
                <p><b>Description:</b><br/>Nikon DSLR!</p>
            </div>
            </ItemBox>
        </>
    )
}


const ItemBox = styled.div `

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