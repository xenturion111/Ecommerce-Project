import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProduct } from '../../store/action/action'
import './index.css'
import Buttons from '../../components/button/index'

const Product = () => {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <div>
      <h1 className="Title">List Of Products</h1>
      {isLoading ? (
        <h1>Sedang Loading</h1>
      ) : (
        // <p>{JSON.stringify(members, null, 4)}</p>
        <div className='allProducts'>
          {products.map((data) => {
            return (
              <>
              <div className="product" key={data.id}>
                  <img className="productImage" src={data.image} />
                  <h3 className="productTitle">{data.title}</h3>
                  <span className="productCategory">{data.category}</span>
                  <p className="productDesc">{data.description}</p>
                  
                  <Buttons text='BUY' /> <br />
                  <span className="productPrice">$ {data.price}</span>
                  
                </div> 
              </>
            );
          })}
          </div>
      )}
    </div>
  )
}

export default Product




                