import React from 'react';

const RentForm = () => {





    return(
        <>
        <h1>Enter the items you want to list below:</h1>
        
        <form>
           
            <input placeholder="Item Name" />
           
            <input placeholder="Price" />

            <input placeholder="Description" />

            <button>List Item</button>

        </form>
        </>
    )
}


export default RentForm;