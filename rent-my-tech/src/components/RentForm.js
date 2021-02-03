import React, { useReducer, useState } from 'react';
import ItemsList from './ItemsList';
import { itemsList, reducer } from '../reducers/reducer';

const RentForm = () => {

    //initial state for individual items
    const initialState = {
        itemName:"",
        price: "",
        description:""
    }

        const [newItem, setNewItem] = useState(initialState);
        const [state, dispatch] = useReducer(reducer, itemsList);

        console.log(state) // contains itemsList
        console.log(newItem)

        const handleChange = (e) => {
            setNewItem({[e.target.value]:e.target.name})
        }

    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
            <form onClick={() =>
                dispatch({type: 'ADD_ITEM', payload:newItem})
            }>
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

        <ItemsList newItem={newItem} />

        </>
    )
}


export default RentForm;