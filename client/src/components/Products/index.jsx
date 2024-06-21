import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.scss";
import ProductCard from './ProductCard';
import { fetchProducts } from "../../store/slices/productSlice";

const Products = ({ isMainPage }) => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const loadMore = () => {
    setDisplayCount(displayCount + 8);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='products'>
      <div className="products-header">
        <h2>Popular Product on Lenny</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
      </div>
      <div className="card-products">
        {products.slice(0, displayCount).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={`${import.meta.env.VITE_BASE_URL}${product.attributes?.images?.data[0].attributes.url}`}
            title={product.attributes.title}
            description={product.attributes.description}
            price={product.attributes.price}
            rating={product.attributes.rating}
            isSold={product.attributes.isSold}
            brand={product.attributes.brand}
          />
        ))}
      </div>
      {isMainPage && products.length > displayCount && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default Products;
