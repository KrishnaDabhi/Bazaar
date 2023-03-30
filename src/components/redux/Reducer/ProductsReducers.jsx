import { DECREMENT, INCREMENT, SET_ADDCART, SET_PRODUCTS, SET_SEARCH_PRODUCTS, SET_SEND_ID } from "../type/type"

const initialeValue = {
    products: [],
    filterProducts: [],
    carts: [],
    count: 0,
    searchproducts: [],
}

const productsReducer = (state = initialeValue, action) => {
    console.log("action =", action);


    switch (action.type) {


        case SET_PRODUCTS:
            console.log("action.payload =", action.payload.products);
            return {
                ...state,
                products: action.payload.products,//updated state - array

            };

        case SET_SEND_ID:
            let id = action.payload;
            console.log("id=", id.id);
            console.log("state.products=", state.products);
            let x = state.products.filter(item => item.id === id.id);
            console.log("x=", x);
            return {
                ...state,
                filterProducts: x

            };

        case SET_SEARCH_PRODUCTS:
            let title = action.payload;
            console.log(" title.products=", title.products);



            let map =state.products.map((x)=>{
                return x.title 
            })
          
            let filter = map.find(item =>item.title === map.title)
            console.log("filter = ",filter);
       
            let data = title.products.filter(item => console.log("item.title",item.title) === console.log("map.toLowercase()",filter))
            console.log("data =",data);

            return {
                ...state,
                products:data
     

            };

        case SET_ADDCART:

            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count <= 0 ? 0 : state.count - 1
            }




        default:
            return state;
    }
}

export default productsReducer;