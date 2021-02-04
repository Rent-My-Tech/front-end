import React, { useState } from 'react';
import ItemsList from './ItemsList';
import { connect } from 'react-redux';
import {addItem} from '../actions/actions';
import { v4 as uuid } from 'uuid';


const RentForm = (props) => {

    const initialState = {
        name:"",
        price: "",
        description:"",
        id: uuid()
    }

    const [newItem, setNewItem] = useState(initialState);
    
    const handleChange = (e) => {
        setNewItem({...newItem,[e.target.name]:e.target.value})
        };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addItem(newItem)
    };  

    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
            <form onSubmit={handleSubmit}>
            <input 
            placeholder="Item Name"
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
            value={newItem.name}
             />
           
            <input 
            placeholder="Price"
            type='number'
            name='price'
            id='price'
            onChange={handleChange}
            value={newItem.price}
            />

            <input 
            placeholder="Description"
            type='text'
            name='description'
            id='description'
            onChange={handleChange}
            value={newItem.description}
            />

            <button>List Item</button>

        </form>

        <ItemsList />
       
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