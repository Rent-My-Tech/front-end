import React, {useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchItem } from '../actions/actions';

const ItemsList = (props) => {
console.log(props)


useEffect(() => {
    props.fetchItem() // do I need props?
},[]);


    return(
        <>
            <ItemBox>
            <div className="mainBox"> 
                <div className="itemsList">
                    <div className="itemBoxTitle">
                        <h1>ITEMS FOR RENT</h1> 
                    </div>
                        {props.rentalItems.map((item, index) => (  
                    <div className="itemBox">
                        <p key={index}><b>Item Name:</b><br/>{item.itemName}</p>
                        <p key={index}><b>Price:</b><br/>{item.price}</p>
                        <p key={index}><b>Description:</b><br/>{item.description}</p>
                        <button>Delete</button>
                    </div>
                     ))} 
                </div>
            </div>
            </ItemBox>
        </>
    )
}

    const mapStateToProps = state => {
        console.log(state)
        return {
            isFetching: state.isFetching,
            rentalItems: state.rentalItems,
            newItem:state.newItem, //not sure I need this here 
            error: state.error
        }
    }



export default connect(mapStateToProps, {fetchItem})(ItemsList)


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

.itemBoxTitle{

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


