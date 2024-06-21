import React from 'react'
import "./Checkout.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductSummary from '../../components/ProductSummary'
import CheckoutNav from './CheckoutComponents/CheckoutNav'
import PaymentMethod from './CheckoutComponents/PaymentMethod'
import AddCard from './CheckoutComponents/AddCard'

const Checkout = () => {
  return (
    <div className='checkout'>
      <Header />
      <CheckoutNav />
      <div className="main">
        <div className="main-column">
          <PaymentMethod />
          <AddCard />
        </div>
        <ProductSummary />
      </div>
      <Footer />
    </div>
  )
}

export default Checkout