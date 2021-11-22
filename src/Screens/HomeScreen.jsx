import React, {useEffect } from 'react';
import Product from '../components/Product';
import LoadingComponent from "../components/Loading"
import Message from "../components/Message";
import {useSelector,useDispatch} from 'react-redux'
import {listProducts} from "../actions/productAction"
const HomeScreen = () => {
const dispatch =useDispatch();
const productList = useSelector((state)=>state.productList);
const {loading,products,error} = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <>
        {loading ? <LoadingComponent/>
        : error ? <Message varient='danger'>{error}</Message>
        : (  <div className="row center">
        {products.map(product=>(
            <Product key={product._id} product={product} />
        ))}
          
      </div>)}
      
      </>
    )
}

export default HomeScreen
