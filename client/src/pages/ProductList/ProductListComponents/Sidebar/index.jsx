import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import Star from "../../../../assets/icons/star.svg"
import { useNavigate, useSearchParams } from "react-router-dom";

const Sidebar = ({ applyFilters }) => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [productType, setProductType] = useState(searchParams.get('productType')|| "");
  const navigate = useNavigate();

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const handleApplyFilters = () => {
    applyFilters({ priceGte: minPrice, priceLte: maxPrice, productType });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleApplyFilters();
    }
  };
  useEffect(() => {
    if (productType) {
    setSearchParams({ ...searchParams, productType })
      
    }
  }, [productType])

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleProductTypeSubmit = (event) => {
    event.preventDefault();
    navigate(`/productType?query=${productType}`);
  };

  const applyPriceRange = (min, max) => {
    applyFilters({ priceGte: min, priceLte: max });
  };

  useEffect(() => {
    applyFilters({ priceGte: minPrice, priceLte: maxPrice, productType });
  }, [productType]);

  return (
    <div className='sidebar'>
      <div className="sidebar-heading">
        <h2>Filter Option</h2>
      </div>
      <div className="best-filter">
        <h3>Best Filter</h3>
        <div className="line">
          <input type="radio" id="fourStarsorUpper" />
          <label htmlFor="fourStarsorUpper" ></label>
          <img src={Star} alt="star" />
          <p>4 stars or upper</p>
        </div>
        <div className="line">
          <input type="radio" id="sameDayDelivery" />
          <label htmlFor="sameDayDelivery"></label>
          <p>Same-day delivery</p>
        </div>
        <div className="line">
          <input type="radio" id="cod" />
          <label htmlFor="cod"></label>
          <p>COD</p>
        </div>
        <div className="line">
          <input type="radio" id="discount" />
          <label htmlFor="discount"></label>
          <p>Discount</p>
        </div>
      </div>
      <div className="location">
        <h3>Location</h3>
        <div className="line">
          <input type="radio" id="bandung" />
          <label htmlFor="bandung"></label>
          <p>Bandung</p>
        </div>
        <div className="line">
          <input type="radio" id="jakarta" />
          <label htmlFor="jakarta"></label>
          <p>Jakarta</p>
        </div>
        <div className="line">
          <input type="radio" id="medan" />
          <label htmlFor="medan"></label>
          <p>Medan</p>
        </div>
        <div className="line">
          <input type="radio" id="surabaya" />
          <label htmlFor="surabaya"></label>
          <p>Surabaya</p>
        </div>
        <div className="line">
          <input type="radio" id="jogja" />
          <label htmlFor="jogja"></label>
          <p>Jogja</p>
        </div>
        <div className="show-all">
          <p><a href="#">Show All</a></p>
        </div>
      </div>
      <div className="type-section">
        <h3>Type</h3>
        <div className="line">
          <input type="radio" id="mouse" name="pt" value={'Mouse'} onSubmit={handleProductTypeSubmit} onChange={handleProductTypeChange} />
          <label htmlFor="mouse" ></label>
          <p>Mouse</p>
        </div>
        <div className="line">
          <input type="radio" id="headphone" name="pt" onSubmit={handleProductTypeSubmit} onChange={handleProductTypeChange} value={'Headphone'} />
          <label htmlFor="headphone"></label>
          <p>Headphone</p>
        </div>
        <div className="line">
          <input type="radio" id="clothing" name="pt" onSubmit={handleProductTypeSubmit} onChange={handleProductTypeChange} value={'Clothing'} />
          <label htmlFor="clothing"></label>
          <p>Clothing</p>
        </div>
        <div className="line">
          <input type="radio" id="drone" name="pt" onSubmit={handleProductTypeSubmit} onChange={handleProductTypeChange} value={'Drone'} />
          <label htmlFor="drone"></label>
          <p>Drone</p>
        </div>
        <div className="line">
          <input type="radio" id="tablet" name="pt" onSubmit={handleProductTypeSubmit} onChange={handleProductTypeChange} value={'Tablet'} />
          <label htmlFor="tablet"></label>
          <p>Tablet</p>
        </div>
        <div className="show-all-categories">
          <p><a href="#">Show All Categories</a></p>
        </div>
      </div>
      <div className="price-section">
        <h3>Price Range</h3>
        <div className="price-range">
          <div className="select">
            <select>
              <option>USD</option>
            </select>
          </div>
          <input type="number" placeholder='Minimum price'
            value={minPrice}
            onChange={handleMinPriceChange} onKeyDown={handleKeyDown} />
        </div>
        <div className="price-range">
          <div className="select">
            <select>
              <option>USD</option>
            </select>
          </div>
          <input type="number" placeholder='Maximum price' value={maxPrice}
            onChange={handleMaxPriceChange} onKeyDown={handleKeyDown} />
        </div>
        <button
          onClick={() => applyPriceRange(0, 200)}>$0 - $200</button>
        <button onClick={() => applyPriceRange(200, 500)}>$200 - $500</button>
        <button onClick={() => applyPriceRange(500, 1500)}>$500 - $1500</button>
      </div>
    </div>
  )
}

export default Sidebar