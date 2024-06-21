import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addItemToCart } from '../../../../store/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import "./SelectedProduct.scss"
import { Link, useNavigate } from 'react-router-dom';
import Arrow from "../../../../assets/icons/arrow-right.svg"
import Star from "../../../../assets/icons/star.svg"
import Ellipse from "../../../../assets/icons/ellipse.svg"
import Cart from "../../../../assets/icons/shopping-cart-green.svg"

const SelectedProduct = ({ products }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    dispatch(addItemToCart(products)); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    dispatch(addItemToCart(products)); 
    navigate('/shopping-chart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='selected-product'>
      <div className="product-heading">
        <div className="pagination-header">
          <Link to="/" className='link'>
            <p>Home</p>
          </Link>
          <img src={Arrow} alt="arrow" />
          <p>Electronic</p>
          <img className='brand-arrow' src={Arrow} alt="arrow" />
          <p className='brand-name'>Gaming Gear</p>
          <img src={Arrow} alt="arrow" />
          <p className='selected-text'>{products?.attributes?.title}</p>
        </div>
      </div>
      <div className="selected-product-details">
        <div className="react-swiper">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {products?.attributes?.images?.data.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={import.meta.env.VITE_BASE_URL + image.attributes.url} alt={`product image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {products?.attributes?.images?.data.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={import.meta.env.VITE_BASE_URL + image.attributes.url} alt={`thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-details">
          <p className='product-title'>{products?.attributes?.title}</p>
          <div className="product-rating">
            <img src={Star} alt="star" />
            <p>{products?.attributes?.rating}</p>
            <img src={Ellipse} alt="ellipse" />
            <p>{products?.attributes?.isSold}</p>
          </div>
          <p className='product-price'>${products?.attributes?.price}</p>
          <p className='product-desc'>{products?.attributes?.description}</p>
          <div className="product-variant">
            <p>Product Variant</p>
            <div className="product-type-color">
              <div className="product-type">
                <p>Type</p>
                <select>
                  <option defaultValue={products?.attributes?.type}>{products?.attributes?.type}</option>
                </select>
              </div>
              <div className="product-color">
                <p>Color</p>
                <select>
                  <option>{products?.attributes?.color}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-buttons">
            <button className='buy-now' onClick={handleBuyNow}>Buy now</button>
            <div className="add-to-cart" onClick={handleAddToCart}>
              <img src={Cart} alt="cart" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct;
