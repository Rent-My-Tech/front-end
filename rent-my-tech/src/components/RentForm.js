import React, { useState, useEffect } from 'react';
import ItemsList from './ItemsList';
import { connect } from 'react-redux';
import {addItem} from '../actions/actions';
import { v4 as uuid } from 'uuid';


const RentForm = (props) => {

    const initialState = {
        itemname:"",
        itemcost: "",
        itemdescription:"",
        itemid: uuid()
    }

    const [newItem, setNewItem] = useState(initialState);
    
    const handleChange = (e) => {
        setNewItem({...newItem,[e.target.name]:e.target.value})
        };

    const handleSubmit = () => {
        // e.preventDefault()
        props.addItem(newItem)
    };  

//    useEffect(() => {
//        const handleSubmit = () => {
//         useEffect(() => {
//             props.addItem(newItem)
//         },[]);
//        }


       

    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
            <form onSubmit={handleSubmit}>
            <input 
            placeholder="Item Name"
            type='text'
            name='itemname'
            id='itemname'
            onChange={handleChange}
            value={newItem.itemname}
             />
           
            <input 
            placeholder="Price"
            type='number'
            name='itemcost'
            id='itemcost'
            onChange={handleChange}
            value={newItem.itemcost}
            />

            <input 
            placeholder="Description"
            type='text'
            name='itemdescription'
            id='itemdescription'
            onChange={handleChange}
            value={newItem.itemdescription}
            />

            <button>List Item</button>

        </form>

        <ItemsList newItem2={newItem} />
       
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        rentalItems: state.rentalItems,
        error: state.error
    }
}


export default connect(mapStateToProps, {addItem})(RentForm);