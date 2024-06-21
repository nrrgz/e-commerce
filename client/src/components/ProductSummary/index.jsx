import React from "react"
import { useSelector } from 'react-redux';
import "./ProductSummary.scss"
import DiscountShape from "../../assets/icons/discount-shape.svg"
import Arrow from "../../assets/icons/arrow-right2.svg"
import { Link } from 'react-router-dom'

const ProductSummary = () => {
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.attributes.price); 
      
      return total + itemPrice * item.quantity; 
    }, 0);
  };

  return (
    <div className='product-summary'>
      <p className='product-summary-title'>Product Summary</p>
      <div className="summary-selected-products">
        <p>No products selected</p>
      </div>
      <div className="prices">
        <div className="price-line">
          <p>Total Price</p>
          <p>$0</p>
        </div>
        <div className="price-line">
          <p>Total Price (Discount)</p>
          <p>$0</p>
        </div>
        <div className="price-line">
          <p>Tax & Fee</p>
          <p>$0</p>
        </div>
      </div>
      <div className="total-price">
        <h3>Total</h3>
        <p>${calculateTotal().toFixed(2)}</p> 
      </div>
      <div className="use-promo">
        <img src={DiscountShape} alt="discount" />
        <div className="promo-text">
          <h5>Use a Promo</h5>
          <p>Choose product to use promo</p>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>
      <Link to="/checkout" className='link'>
        <button className='button-checkout'>Checkout</button>
      </Link>
    </div>
  )
}

export default ProductSummary