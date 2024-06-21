import React from 'react'
import "./MerchantInfo.scss"
import Logo from "../../../../assets/icons/logitech-logo-cropped.svg"
import Chat from '../../../../assets/icons/chat.svg'
import Shop from '../../../../assets/icons/shop.svg'

const MerchantInfo = () => {
  return (
    <div className='merchant-info'>
      <h2>Merchant Information</h2>
      <div className="merchant-line">
        <div className="merchant-logo">
          <img src={Logo} alt="logo" />
          <div className="merchant-name">
            <h4>Logitech Indonesia</h4>
            <p>Jakarta Pusat</p>
            <div className="merchant-detail">
              <div className="merchant-badge">
                <p>Top Rated Merchant</p>
              </div>
              <div className="merchant-badge">
                <p>Best Merchant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="chat">
            <img src={Chat} alt="chat" />
            <p>Chat</p>
          </div>
          <div className="visit">
            <img src={Shop} alt="shop" />
            <p>Visit Merchant</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantInfo