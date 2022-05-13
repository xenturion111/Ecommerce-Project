import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {useDispatch} from 'react-redux'
import {addItem, delItem} from '../../store/action/action'
import './index.css'
import { NavLink } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams()
    const [cartBtn, setCartBtn] = useState("Add to Shopping Cart");
    
    useEffect(() => {
      const getProduct = async () =>{
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json());
        setLoading(false);
      }
      getProduct();
    }, [])


    const dispatch = useDispatch();
    const handleCart = (product) => {
      if(cartBtn === "Add to Shopping Cart") {
        dispatch(addItem(product));
        setCartBtn("Remove from Shopping Cart");
      }else {
        dispatch(delItem(product))
        setCartBtn("Add to Shopping Cart");
      }
    } 

    // const Loading = () => {
    //   return (
    //     <>
    //       Loading ...
    //     </>
    //   )
    // }

  return (
    <div className="container">

        <div className="left-column">
            <img src={product.image} alt="Product title" />
        </div>
      
      
        <div className="right-column">
      
          <div className="product-description">
            <span>{product.title}</span>
            <h1>{product.category}</h1>
            <p>{product.description}</p>
          </div>
      
          <div className="product-configuration">
          <div className="product-price">
            <span>{product.price} $</span>
              <a onClick={() => handleCart(product)} className="cart-btn">{cartBtn}</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail