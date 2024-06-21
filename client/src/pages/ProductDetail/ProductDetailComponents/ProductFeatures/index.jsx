import React from 'react'
import "./ProductFeatures.scss"
import Tick from '../../../../assets/icons/tick-circle.svg'

const ProductFeatures = ({ products }) => {
  
  return (
    <div className='product-features'>
      <div className="features-tab">
        <button className='selected'>Detail Product</button>
        <button>Merchant</button>
        <button>Reviews</button>
        <button>Related Product</button>
      </div>
      <p className='product-title'>{products?.attributes?.title}</p>
      <p className='product-desc'>{products?.attributes?.description}</p>
      <div className="details">
        <div className="specification">
          <h2>Specification</h2>
          <div className="spec">
            <p className='spec-title'>Brand</p>
            <p className='spec-value'>Logitech</p>
          </div>
          <div className="spec">
            <p className='spec-title'>Type</p>
            <p className='spec-value'>{products?.attributes?.type}</p>
          </div>
          <div className="spec">
            <p className='spec-title'>Resolution</p>
            <p className='spec-value'>100-25600 dpi</p>
          </div>
          <div className="spec">
            <p className='spec-title'>Max Speed</p>
            <p className='spec-value'>&gt;40G2</p>
          </div>
          <div className="spec">
            <p className='spec-title'>Max Acceleration</p>
            <p className='spec-value'>&gt;300 IPS</p>
          </div>
        </div>
        <div className="in-the-box">
          <h2>In The Box</h2>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>UG502 X LIGHTSPEED Wireless Gaming Mouse</p>
          </div>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>DPI-Shift button cover</p>
          </div>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>USB-C charging cable</p>
          </div>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>LIGHTSPEED USB-A receiver</p>
          </div>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>USB extension cable</p>
          </div>
          <div className="box-items">
            <img src={Tick} alt="tick" />
            <p className='box-title'>User Documentation</p>
          </div>
        </div>
        <div className="system-required">
          <h2>System Required</h2>
          <p>- USB port</p>
          <p>- Internet access for optional software download</p>
          <p>- Windows® 10 or later</p>
          <p>- macOS 10.14 or later</p>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures