import { useContext, useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {delItem} from '../../store/action/action'
import Buttons from '../../components/button/index'
import { NavLink } from 'react-router-dom';
import './index.css'

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  let total = 0;
  // const handleClose = (product) => {
  //   dispatch(delItem(product));
  // } 

  const cartItems = (cartItem) => {
    total += cartItem.price;
   return (
    <>
       
    <div className="shopping-cart" key={cartItem.id}>

    <div className="product">
      <div className="product-image">
        <img src={cartItem.image} />
      </div>
      <div className="product-details">
        <div className="product-title">{cartItem.title}</div>
        <p className="product-description">{cartItem.description}</p>
      </div>
      <div className="product-price">{cartItem.price}</div>
      <div className="product-quantity">
        <input type="number" value={1} min={1} max={10} />
      </div>
      <Buttons text="Remove" onClick={() => delItem(cartItem.id)}/>
    </div>

</div>
    </>
   )
  }

  const emptyCart = () => {
    <>
      <div>
        <h1>
          Your Cart is empty
        </h1>
      </div>
    </>
  }

  return (
    <div>
     <h1>Shopping Cart</h1>
      <div className="column-labels">
      <label className="product-image">Image</label>
      <label className="product-details">Product</label>
      <label className="product-price">Price</label>
      <label className="product-quantity">Quantity</label>
      <label className="product-removal">Remove</label>
      <label className="product-line-price">Total</label>
    </div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      
      <div className="totals">

      <div className="totals-item totals-item-total">
        <label>Grand Total</label>
        <div className="totals-value" id="cart-total">{total}</div>
      </div>
    </div>
      <NavLink to="/">
        <button className="checkout">Checkout</button>
      </NavLink>
    </div>
  )
}

export default Cart