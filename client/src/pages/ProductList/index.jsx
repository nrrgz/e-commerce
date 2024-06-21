import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigation from "./ProductListComponents/Navigation";
import { getProducts, searchProducts } from "../../api/products";
import Sidebar from './ProductListComponents/Sidebar';
import FilteredProducts from "./ProductListComponents/FilteredProducts";
import { useParams, useLocation } from 'react-router-dom';
import "./ProductList.scss";
import { getCategoriesById } from '../../api/category';

const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceSort, setPriceSort] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const productType = new URLSearchParams(location.search).get('productType');


  const [category, setCategory] = useState([]);
  console.log(query)
  useEffect(() => {
    if (query) {
      searchProducts({ setData: setProducts, setLoading, query });
    } else {
      getProducts({
        setData: setProducts,
        setLoading,
        categoryId,
        priceSort,
        productType
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId, priceSort, query]);

  const applyFilters = (filters) => {
    if (query) {
      searchProducts({ setData: setProducts, setLoading, query });
    }
    getProducts({
      setData: setProducts,
      setLoading,
      categoryId,
      priceGte: filters.priceGte,
      priceLte: filters.priceLte,
      productType: filters.productType,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    getCategoriesById(setCategory, setLoading, categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId]);

  return (
    <div>
      <Header />
      <Navigation setPriceSort={setPriceSort} category={category}/>
      <div className="main">
        <Sidebar applyFilters={applyFilters} />
        <FilteredProducts products={products} loading={loading} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
