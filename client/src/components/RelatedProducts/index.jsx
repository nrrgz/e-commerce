import React, { useEffect, useState } from 'react'
import "./RelatedProducts.scss"
import ProductCard from '../Products/ProductCard'
import { getProducts } from '../../api/products'

const RelatedProducts = ({ isRelatedProduct }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts({ setData: setProducts, setLoading});
  }, []);

  let visibleProducts = products;

  if (isRelatedProduct) {
    visibleProducts = products.slice(0, 4);
  }
  return (
    <div className='related-product'>
      <div className="related-product-header">
        <h2>Related Product</h2>
        <button>View Detail</button>
      </div>
      <div className="card-related-product">
        <div className="card-products">
          {loading && <h1>Loading...</h1>}
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={
                import.meta.env.VITE_BASE_URL +
                product.attributes?.images?.data[0].attributes.url
              }
              title={product.attributes.title}
              description={product.attributes.description}
              price={product.attributes.price}
              rating={product.attributes.rating}
              isWishlist={product.attributes.isWishlist}
              isSold={product.attributes.isSold}
              brand={product.attributes.brand}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
