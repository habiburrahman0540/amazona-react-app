import React, { useEffect, useState } from 'react'
import {Link, useParams,useNavigate } from "react-router-dom"
import Rating from '../components/Rating';
import {productDetails} from '../actions/productAction'
import {useDispatch,useSelector} from 'react-redux'
import LoadingComponent from '../components/Loading'
import Message from '../components/Message';
const ProductScreen = (props) => {
    const dispatch = useDispatch();
    let params = useParams();
    const productid = params.id
const products = useSelector(state => state.productDetails);
const {loading,product,error} =products;
    useEffect(() => {
        dispatch(productDetails(productid));
    }, [dispatch,productid])
    const [qty,setQty] = useState(1)
    const navigate = useNavigate();
    const cartHandler =()=>{
         navigate(`/cart/${productid}?qty=${qty}`);
    }
    return (
        <>
        {loading ? <LoadingComponent/>
        : error ? <Message varient='danger'>{error}</Message>
        : (   <div>
            <Link to="/">Back to result</Link>
            <div className="row top ">
               <div className="col-2">
                   <img className="large" src={product.image} alt={product.name} />
               </div>
               <div className="col-1 ">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li><Rating ratings={product.rating} numReviews={product.numReviews}/></li>
                        <li>Price:${product.price}</li>
                        <li>
                            Description :<p>{product.description}</p>
                        </li>
                    </ul>
               </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div className="">Price</div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="">Status</div>
                                     <div className="">{product.countInStock > 0 ? (<span className="success">In Stock </span>):(<span className="error">Unavailable</span>)}</div>
                                </div>
                            </li>
                                {product.countInStock > 0 && (
                                    <li>
                                        <div className="row">
                                            <div className="">Qty</div>
                                            <div className="">
                                                <select value={qty} onChange={e=>setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(x=>(
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            <li>
                                <button onClick={cartHandler} disabled={product.countInStock > 0 ? '' :'disabled'} className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>)}
      
      </>
    )

    
}

export default ProductScreen
