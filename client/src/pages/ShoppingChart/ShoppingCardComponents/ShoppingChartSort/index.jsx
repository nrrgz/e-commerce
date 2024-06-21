import React from 'react'
import "./ShoppingChartSort.scss"

const ShoppingChartSort = () => {
  return (
    <div className='shopping-chart-sort'>
      <div className="shopping-chart-nav">
        <div className="shopping-chart-title">
          <h4>Shopping Chart</h4>
          <p>Showing your choices product</p>
        </div>
        <div className="shopping-chart-buttons">
          <p>Sort by:</p>
          <select>
            <option>Latest Added</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ShoppingChartSort