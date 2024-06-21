import React, { useState, useEffect } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Reviews from './ProductDetailComponents/Reviews'
import SelectedProduct from './ProductDetailComponents/SelectedProduct'
import ProductFeatures from './ProductDetailComponents/ProductFeatures'
import MerchantInfo from './ProductDetailComponents/MerchantInfo'
import { useParams } from 'react-router-dom'
import { getProductsById } from "../../api/products"
import RelatedProduct from '../../components/RelatedProducts'

const ProductDetail = () => {
  const { productId } = useParams()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsById(setProducts, setLoading, productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div>
      <Header />
      <SelectedProduct products={products} loading={loading} />
      <ProductFeatures products={products} loading={loading} />
      <MerchantInfo />
      <Reviews />
      <RelatedProduct isRelatedProduct={true} />
      <Footer />
    </div>
  )
}

export default ProductDetail