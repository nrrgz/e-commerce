import React from 'react'
import "./Banner.scss"
import BannerImg from "../../../../assets/images/bg-img.png"

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className="main-banner">
        <h1>Upgrade Your Wardrobe
          With Our Collection</h1>
        <p>Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est ullamcorper nisl amet non mollis.</p>
        <div className="banner-buttons">
          <button className='button-buy'>Buy Now</button>
          <button className='button-detail'>View Detail</button>
        </div>
      </div>
      <div className="banner-img">
        <img src={BannerImg} alt="banner" />
      </div>
    </div>
  )
}

export default Banner