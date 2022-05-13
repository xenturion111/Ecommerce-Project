import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import './index.css'

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams()
    
    useEffect(() => {
      const getProduct = async () =>{
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json());
        setLoading(false);
      }
      getProduct();
    }, [])

    // const Loading = () => {
    //   return (
    //     <>
    //       Loading ...
    //     </>
    //   )
    // }

  return (
    <div className="container">

        <div class="left-column">
            <img src={product.image} alt="Product title" />
        </div>
      
      
        <div class="right-column">
      
          <div class="product-description">
            <span>{product.title}</span>
            <h1>{product.category}</h1>
            <p>{product.description}</p>
          </div>
      
          <div class="product-configuration">
          <div class="product-price">
            <span>{product.price} $</span>
            <a href="#" class="cart-btn">Add to cart</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail