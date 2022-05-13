import React, { useEffect, setFilter, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProducts } from '../../store/action/action'
import './index.css'
import Buttons from '../../components/button/index'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Spinner from '../../components/loading/spinner'

const Products = () => {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <h1 className="Title">List Of Products</h1>
        <div className="filtering">
          <Stack  spacing={2} direction="row">
              <Button style= {{color: '#101E29', fontFamily: 'Koulen'}} variant="text">All</Button>
              <Button style= {{color: '#101E29', fontFamily: 'Koulen'}} variant="text">Men's</Button>
              <Button style= {{color: '#101E29', fontFamily: 'Koulen'}} variant="text">Women's</Button>
              <Button style= {{color: '#101E29', fontFamily: 'Koulen'}} variant="text">Jewerly</Button>
              <Button style= {{color: '#101E29', fontFamily: 'Koulen'}} variant="text">Electronic</Button>
            </Stack>
        </div>
      {isLoading === false ? (
        <div className='allProducts'>
          {products.map((data) => {
            return (
              <>
              <div className="product" key={data.id}>
                  <img className="productImage" src={data.image} />
                  <h3 className="productTitle">{data.title}</h3>
                  <span className="productCategory">{data.category}</span>
                  <p className="productDesc">{data.description}</p>
                  
                  <NavLink style={{textDecoration: 'none'}} to={`/products/${data.id}`}>
                    <Buttons text='BUY' />
                  </NavLink>
                  <br />
                  <span className="productPrice">$ {data.price}</span>
                  
                </div> 
              </>
            );
          })}
          </div>
      ) : (
        // <p>{JSON.stringify(members, null, 4)}</p>
        <Spinner />
      )}
    </div>
  )
}

export default Products




                