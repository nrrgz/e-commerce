import React from 'react'
import "./ProductCard.scss";
import Star from "../../../assets/icons/star.svg"
import Ellipse from "../../../assets/icons/ellipse.svg"
import Heart from "../../../assets/icons/heart.svg"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id, title, description, price, image, rating, isSold, brand}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-detail/${id}`)
  }

  return (
      <div className="card-wrapper" onClick= {handleClick} >
        <div className="product-img">
          <div className="heart-img">
            <img src={Heart} alt="heart" className='heart' />
          </div>
          <img src={image} alt="product" className='product' />
        </div>
        <div className="card-details">
        <div className="card-row">
          <p className='product-title'>{title}</p>
          <p className='product-price'>${price}</p>
        </div>
        <p className='product-brand'>{brand}</p>
        <div className="product-details">
          <div className="product-rating">
            <img src={Star} alt="star" />
            <p>{rating}</p>
          </div>
          <div className="product-sold">
            <img src={Ellipse} alt="ellipse" />
            <p>{isSold}</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default ProductCard