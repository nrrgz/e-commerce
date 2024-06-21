import React from 'react';
import { useSelector } from 'react-redux';
import "./ShoppingChart.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShoppingCartSort from './ShoppingCardComponents/ShoppingChartSort';
import MerchantProducts from './ShoppingCardComponents/MerchantProducts';
import ProductSummary from '../../components/ProductSummary';
import RelatedProducts from '../../components/RelatedProducts';


const ShoppingChart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className='shopping-chart'>
      <Header />
      <ShoppingCartSort />
      <div className="shopping-chart-main">
        {cartItems.length > 0 && <MerchantProducts />}
        {cartItems.length > 0 && <ProductSummary />}
      </div>
      <RelatedProducts isRelatedProduct={true} />
      <Footer />
    </div>
  );
};

export default ShoppingChart;
