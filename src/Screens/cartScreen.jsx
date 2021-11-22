import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams,useLocation, Link,useNavigate} from 'react-router-dom'
import { addCart } from '../actions/cartActions';
import Message from '../components/Message';
const   CartScreen = () => {
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const location = useLocation();
    const productid =params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const RemoveItemHandler =()=>{

    } 
    useEffect(() => {
     if(productid){
        dispatch(addCart(productid,qty))
     }
    }, [dispatch,productid,qty])
const checkoutHandler =()=>{
    navigate('signin?redirect=shipping');
}
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?
            (<Message>
                Cart is empty . <Link to="/"> Go shopping</Link>
            </Message>  )  
            :(
                <ul>
                    {cartItems.map(item=>(
                        <li key={item.product}>
                            <div className="row">
                                <div className="">
                                    <img className="small" src={item.image} alt={item.name} />
                                </div>
                                <div className="min-30">
                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                                </div>
                                <div className="">
                                    <select value={item.qty} onChange={e=>dispatch(addCart(item.product,Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x=>(
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="">
                                    {item.price}
                                </div>
                                <div className="">
                                    {item.qty*item.price}
                                </div>
                                <div className="">
                                    <button type="button" onClick={()=>RemoveItemHandler(item.product)}>Remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )
            }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Subtotal ({cartItems.reduce((a,c)=>a+c.qty,0)} items) : ${cartItems.reduce((a,c)=>a+c.price*c.qty,0)} </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                                proceed to checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default CartScreen
