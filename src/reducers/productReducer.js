import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_LIST_DETAILS_REQUEST,
    PRODUCT_LIST_DETAILS_SUCCESS,PRODUCT_LIST_DETAILS_FAIL
} from '../constants/productConstants'
export const productReducer =(state={products:[],loading:true},action)=>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading:true}
        case PRODUCT_LIST_SUCCESS:
            return { loading:false, products:action.payload}
        case PRODUCT_LIST_FAIL:
            return { loading:false,error:action.payload}
        default:
            return state;
    }
}
export const productDetailsReducer =(state={product:{},loading:true},action)=>{
    switch (action.type) {
        case PRODUCT_LIST_DETAILS_REQUEST:
            return {
                loading:true
            }
        case PRODUCT_LIST_DETAILS_SUCCESS:
            return {
                loading:false,
                product:action.payload
            }
        case PRODUCT_LIST_DETAILS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}