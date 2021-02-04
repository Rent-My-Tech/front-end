
export const itemsList = {
    isFetching: false,
    rentalItems:[],
    newItem:{},
    error:""
}


// [
   
//     {
//         itemName:"Nintendo Switch",
//         price: "25.00",
//         description:"Includes Animal Crossing",
//         active:false,
//     }

// ]

export const reducer = (state = itemsList, action) => {
    switch(action.type) {
        case ('FETCH_ITEM_START'):
            return ({
                ...state,
                isFetching: true
            });
        case ('FETCH_ITEM_SUCCESS'):
            return ({
                ...state,
                isFetching: false,
                rentalItems: action.payload
            });
        case ('FETCH_ITEM_FAIL'):
            return ({
                ...state,
                isFetching: false,
                error:action.payload
            });
        case ('ADD_ITEM_START'):
            return ({
                ...state,
                isFetching: true
            });
        case ('ADD_ITEM_SUCCESS'):
            return ({
                ...state,
                rentalItems:[...state.rentalItems, action.payload], //newItem?
                isFetching: false
            });
        case ('ADD_ITEM_FAIL'):
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            });
            default:
                return state
    }
};