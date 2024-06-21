import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MerchantProducts.scss"
import ProductLine from './ProductLine'
import Logo from "../../../../assets/icons/logitech-logo-cropped.svg"
import { fetchProducts } from "../../../../store/slices/productSlice";
import { initializeCart } from "../../../../store/slices/cartSlice";

const MerchantProducts = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='merchant-products'>
      <div className="merchant-products-title">
        <img src={Logo} alt="logo" />
        <div className="merchant-products-text">
          <h2>Logitech Indonesia</h2>
          <p>Central Jakarta</p>
        </div>
      </div>
      <div className="product-lines">
        {cartItems.map(item => (
          <ProductLine key={item.id} item={item} image={`${import.meta.env.VITE_BASE_URL}${item.attributes?.images?.data[0].attributes.url}`}/> 
        ))}
      </div>
    </div>
  )
}

export default MerchantProducts