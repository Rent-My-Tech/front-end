
export const itemsList = [
    {
        itemName:"Nikon DSLR",
        price: "20.00",
        description:"High Res Photos",
        // active:false,
    },
    {
        itemName:"Nintendo Switch",
        price: "25.00",
        description:"Includes Animal Crossing",
        // active:false,
    }

]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                itemName: action.payload,
                price: action.payload,
                description: action.payload
            }
            default:
                return state
    }
}