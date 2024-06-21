import React from 'react'
import IpadAir from '../../../../assets/images/iPad Air 2020.png'
import "./PromoBanner.scss"

const PromoBanner = () => {
  return (
    <div className='promo-banner'>
      <div className="promo-banner-img">
        <img src={IpadAir} alt="ipad-air" />
      </div>
      <div className="promo-banner-content">
        <p className='promo-banner-title'>Ipad Air Gen 5</p>
        <p className='promo-banner-text'>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in sapien quam risus sed diam.</p>
        <div className="promo-banner-buttons">
          <button className='buy-btn'>Buy $900</button>
          <button className='detail-btn'>View Detail</button>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner