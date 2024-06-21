import React from 'react'
import "./ReviewFilter.scss"
import Star from '../../../../../assets/icons/star.svg'
import Arrow from "../../../../../assets/icons/arrow-down.svg"

const ReviewFilter = () => {
  return (
    <div className='review-filter'>
      <h3>Reviews Filter</h3>
      <div className="rating">
        <div className="rating-header">
          <p>Rating</p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="line">
          <input type="checkbox" id="fiveStars" />
          <label htmlFor="fiveStars"></label>
          <img src={Star} alt="star" />
          <p>5</p>
        </div>
        <div className="line">
          <input type="checkbox" id="fourStars" />
          <label htmlFor="fourStars"></label>
          <img src={Star} alt="star" />
          <p>4</p>
        </div>
        <div className="line">
          <input type="checkbox" id="threeStars" />
          <label htmlFor="threeStars"></label>
          <img src={Star} alt="star" />
          <p>3</p>
        </div>
        <div className="line">
          <input type="checkbox" id="twoStars" />
          <label htmlFor="twoStars"></label>
          <img src={Star} alt="star" />
          <p>2</p>
        </div>
        <div className="line">
          <input type="checkbox" id="oneStars" />
          <label htmlFor="oneStars"></label>
          <img src={Star} alt="star" />
          <p>1</p>
        </div>
      </div>
      <div className="review-topics">
        <div className="review-t-header">
          <p>Review Topics</p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="line">
          <input type="checkbox" id="productQuality" />
          <label htmlFor="productQuality"></label>
          <p>Product Quality</p>
        </div>
        <div className="line">
          <input type="checkbox" id="sellerServices" />
          <label htmlFor="sellerServices"></label>
          <p>Seller Services</p>
        </div>
        <div className="line">
          <input type="checkbox" id="productPrice" />
          <label htmlFor="productPrice"></label>
          <p>Product Price</p>
        </div>
        <div className="line">
          <input type="checkbox" id="shipment" />
          <label htmlFor="shipment"></label>
          <p>Shipment</p>
        </div>
        <div className="line">
          <input type="checkbox" id="matchWithDesc" />
          <label htmlFor="matchWithDesc"></label>
          <p>Match with Description</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewFilter