import React from 'react'
import "./Navigation.scss"
import Arrow from '../../../../assets/icons/arrow-right.svg'
import Menu2 from '../../../../assets/icons/menu-2.svg'
import Menu from '../../../../assets/icons/menu.svg'
import { Link } from 'react-router-dom'
import ArrowUp from "../../../../assets/icons/arrow-up.svg"
import ArrowDown from "../../../../assets/icons/arrow-up1.svg"

const Navigation = ({ setPriceSort, category }) => {

  return (
    <div className='heading'>
      <div className="pagination-header">
        <Link to="/" className='link'>
          <p>Home</p>
        </Link>
        <img src={Arrow} alt="arrow" />
        <p>Electronic</p>
        <img src={Arrow} alt="arrow" />
        <p className='selected-text'>Gaming Gear</p>
      </div>
      <div className="search-heading">
        <div className="product-name">
          <h3>Showing product for {category?.attributes?.title}</h3>
          <p>Showing 1-60 Products</p>
        </div>
        <div className="sort">
          <p>Sort by:</p>
          <div className="select-menu">
            <div className="desc" onClick={() => { setPriceSort('desc') }}>
              <img src={ArrowUp} alt="arrow up" />
            </div>
            <div className="asc" onClick={() => { setPriceSort('asc') }}>
              <img src={ArrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="menu-icon">
            <img src={Menu2} alt="menu2" />
          </div>
          <div className="menu-icon">
            <img src={Menu} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation