import React from 'react';

const RentForm = () => {





    return(
        <>
        <h1>List your Tech!</h1>
        <form>
            <label for="itemName">Item Name:</label>
            <input name="itemName" />
            <input placeholder="Price:" />
            <input placeholder="Description:" />

        </form>
        </>
    )
}


export default RentForm;