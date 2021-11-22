import {createStore,applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { cartReducers } from './reducers/cartReducers';
import {productReducer,productDetailsReducer} from "./reducers/productReducer"
const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
};
const reducer = combineReducers({
    productList:productReducer,
    productDetails :productDetailsReducer,
    cart:cartReducers,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,initialState,composeEnhancer(applyMiddleware(thunk))
);
export default store;