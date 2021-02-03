import React, { useState } from 'react';
import ItemList from './ItemsList';

const RentForm = () => {

    //initial state for individual items
    const initialState = {
        itemName:"",
        price: "",
        description:""
    }

    const [newItem, setNewItem] = useState(initialState);

    const handleChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value})

    }

    const addItem = (e) => {
        e.preventDefault();



    }




    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
        <form>
           
            <input 
            placeholder="Item Name"
            type='text'
            name='itemName'
            onChange={handleChange}
            value={newItem.itemName}
             />
           
            <input 
            placeholder="Price"
            type='number'
            name='price'
            onChange={handleChange}
            value={newItem.price} 
            />

            <input 
            placeholder="Description"
            type='text'
            name='description'
            onChange={handleChange}
            value={newItem.description} 
            />

            <button>List Item</button>

        </form>

        <ItemList />

        </>
    )
}


export default RentForm;