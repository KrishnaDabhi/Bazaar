import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "./components/redux/Reducer/rootReducers";
import thunk from "redux-thunk";

// export const store = createStore(rootReducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__ ());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));