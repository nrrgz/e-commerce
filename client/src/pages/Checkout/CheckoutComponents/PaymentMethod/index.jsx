import React from 'react'
import "./PaymentMethod.scss"
import Paypal from "../../../../assets/icons/paypal-logo.svg"
import Stripe from "../../../../assets/icons/stripe-logo.svg"
import Payoneer from "../../../../assets/icons/payoneer-logo.svg"

const PaymentMethod = () => {
  return (
    <div className='payment-method'>
      <h2>Payment Method</h2>
      <div className="payment-line">
        <input type="radio" name="payment" id="payment-1" />
        <div className="payment-img">
          <img src={Paypal} alt="paypal" />
        </div>
        <div className="payment-method-details">
          <h3>Paypal</h3>
          <p>yelenastacia99@gmail.com</p>
        </div>
      </div>
      <div className="payment-line">
        <input type="radio" name="payment" id="payment-1" />
        <div className="payment-img">
          <img src={Stripe} alt="Stripe" />
        </div>
        <div className="payment-method-details">
          <h3>Stripe</h3>
          <p>8329 3288 823 ****</p>
        </div>
      </div>
      <div className="payment-line">
        <input type="radio" name="payment" id="payment-1" />
        <div className="payment-img">
          <img src={Payoneer} alt="payoneer" />
        </div>
        <div className="payment-method-details">
          <h3>Payoneer</h3>
          <p>8329 3288 823 ****</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod