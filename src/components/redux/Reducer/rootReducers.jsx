import { combineReducers } from "redux";
import productsReducer from "./ProductsReducers";

const rootReducers = combineReducers({productsReducer});


export default rootReducers;