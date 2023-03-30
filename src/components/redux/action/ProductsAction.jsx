import { SET_ADDCART, SET_PRODUCTS, SET_SEARCH_PRODUCTS, SET_SEND_ID } from "../type/type"
import axios from "axios";

// export const setProducts = (products) =>{

//     return{
//         type:SET_PRODUCTS,
//         payload:products
//     }
// }

export const sendId = (id) => {
    return async (dispatch) => {
        await axios.get(`https://dummyjson.com/products/${id}`).then((x) => {
            const res = x.data
            console.log("user id=", res);
            dispatch({
                type: SET_SEND_ID,
                payload: res
            })
        })
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        await axios.get('https://dummyjson.com/products')
            .then(x => {
                // response.data is the users
                const users = x.data;
                console.log("user =", users);
                dispatch({
                    type: SET_PRODUCTS,
                    payload: users
                })
            })
    }
}

export const productSearch = (title) =>{
    return async (dispatch) => {
        await axios.get(`https://dummyjson.com/products/search?q=${title}`).then(x=>{
            const res = x.data
            console.log("Search user title=", res);
            dispatch({
                type: SET_SEARCH_PRODUCTS,
                payload: res
            })

        })
    }
}
export const addCart = (id) => {
    return {
        type: SET_ADDCART,
        payload: id
    }

}
export const incNumber = () =>{
    return {
        type:'INCREMENT'
    }
}
export const decNumber = () =>{
    return {
        type:'DECREMENT'
    }
}