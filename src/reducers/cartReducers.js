import {CART_ADD_ITEM} from '../constants/cartConstants';
export const cartReducers=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const ExistItem = state.cartItems.find(x=>x.product===item.product);
            if(ExistItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>x.product === ExistItem.product ? item : x)
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
            
    
        default:
            return state;
    }
}