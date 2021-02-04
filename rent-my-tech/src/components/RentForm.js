import React, { useReducer, useState } from 'react';
import ItemsList from './ItemsList';
import { itemsList, reducer } from '../reducers/reducer';

const RentForm = () => {

    //initial state for individual items
    // const initialState = {
    //     itemName:"",
    //     price: "",
    //     description:""
    // }

    //     const [newItem, setNewItem] = useState(initialState);
    //     const [state, dispatch] = useReducer(reducer, itemsList);

        // console.log(state) // contains itemsList
        // console.log(newItem) // contains initial state
        // console.log(reducer)
        // console.log(itemsList)

        // const handleChange = (e) => {
        //     setNewItem({...state,[e.target.name]:e.target.value}) // is this updating newItem?
        // }

    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
            <form>
            <input 
            placeholder="Item Name"
            type='text'
            name='itemName'
            // onChange={handleChange}
            // value={newItem.itemName}
             />
           
            <input 
            placeholder="Price"
            type='number'
            name='price'
            // onChange={handleChange}
            // value={newItem.price} 
            />

            <input 
            placeholder="Description"
            type='text'
            name='description'
            // onChange={handleChange}
            // value={newItem.description} 
            />

            {/* <button onClick={() =>
                dispatch({type: 'ADD_ITEM', payload:newItem})
            }>List Item</button> */}

        </form>
            {/* {itemsList.map((item, index) => (
        <div className="itemBox">
                        <p key={index}><b>Item Name:</b><br/>{item.itemName}</p>
                        <p key={index}><b>Price:</b><br/>{item.price}</p>
                        <p key={index}><b>Description:</b><br/>{item.description}</p>
                        <button>Delete</button>
                    </div>
                    ))}; */}

        <ItemsList itemsList={itemsList} />
       
        </>
    )
}


export default RentForm;