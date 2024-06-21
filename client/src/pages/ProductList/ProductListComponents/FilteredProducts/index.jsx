import React from 'react'
import ProductCard from '../../../../components/Products/ProductCard'
import "./FilteredProducts.scss"

const Products = ({ products, loading }) => {
  return (
    <div>
      <div className='products-list'>
        <div className="card-products">
          {loading && <h1>Loading...</h1>}
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={
                  import.meta.env.VITE_BASE_URL +
                  product.attributes?.images?.data[0].attributes.url
                }
                title={product.attributes.title}
                brand={product.attributes.brand}
                price={product.attributes.price}
                rating={product.attributes.rating}
                isWishlist={product.attributes.isWishlist}
                isSold={product.attributes.isSold}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Products