import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delItem} from '../../store/action/action'
import Buttons from '../../components/button/index'
import './index.css'

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  
  const handleClose = (product) => {
    dispatch(delItem(product));
  } 

  const cartItems = (cartItem) => {
   return (
    <>
        <h1>Shopping Cart</h1>

    <div class="shopping-cart" key={cartItem.id}>

    <div class="column-labels">
      <label class="product-image">Image</label>
      <label class="product-details">Product</label>
      <label class="product-price">Price</label>
      <label class="product-quantity">Quantity</label>
      <label class="product-removal">Remove</label>
      <label class="product-line-price">Total</label>
    </div>

    <div class="product">
      <div class="product-image">
        <img src={cartItem.image} />
      </div>
      <div class="product-details">
        <div class="product-title">{cartItem.title}</div>
        <p class="product-description">{cartItem.description}</p>
      </div>
      <div class="product-price">{cartItem.price}</div>
      <div class="product-quantity">
        {/* <input type="number" value="1" min="1"> */}
      </div>
      <Buttons text="Remove" onclick={() => handleClose(cartItem)}/>
    </div>

    <div class="totals">
      <div class="totals-item">
        <label>Subtotal</label>
        <div class="totals-value" id="cart-subtotal">71.97</div>
      </div>
      <div class="totals-item">
        <label>Tax (5%)</label>
        <div class="totals-value" id="cart-tax">3.60</div>
      </div>
      <div class="totals-item">
        <label>Shipping</label>
        <div class="totals-value" id="cart-shipping">15.00</div>
      </div>
      <div class="totals-item totals-item-total">
        <label>Grand Total</label>
        <div class="totals-value" id="cart-total">90.57</div>
      </div>
    </div>
        
      <button class="checkout">Checkout</button>

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
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  )
}

export default Cart