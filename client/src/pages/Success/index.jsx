import React from 'react'
import "./Success.scss"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SuccessIcon from "../../assets/icons/success.svg"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success'>
      <Header />
      <div className="success-container">
        <img src={SuccessIcon} alt="tick-circle" />
        <h1>Your Payment is Succesfull</h1>
        <p>Your payment will be proceed in 30 mins. If any problem please chat to customer service.
          Detail information will included below
        </p>
        <div className="success-buttons">
          <Link to="/" className='link'>
          <button className='back-to-home'>Back to home</button>
          </Link>
          <button className='check-detail'>Check Detail</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Success