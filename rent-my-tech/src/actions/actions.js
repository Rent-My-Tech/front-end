import axios from "axios"



export const fetchItem = () => dispatch => {
    dispatch({type:"FETCH_ITEM_START"})
    axios
        .post('https://pokeapi.co/api/v2/item')
        .then(res => {
            console.log(res.data)
            dispatch({type:"FETCH_ITEM_SUCCESS", payload: res.data})
        })
        .catch(error => {
            dispatch({type:"FETCH_ITEM_FAIL", payload: error})
        })
}




export const addItem = (newItem) => dispatch => {
    dispatch({type:"ADD_ITEM_START"})
    axios
        .post('https://pokeapi.co/api/v2/item', newItem)
        .then(res => {
            console.log(res)
            dispatch({type:"ADD_ITEM_SUCCESS", payload: res.data})
        })
        .catch(error => {
            dispatch({type:"ADD_ITEM_FAIL", payload: error})
        })
}