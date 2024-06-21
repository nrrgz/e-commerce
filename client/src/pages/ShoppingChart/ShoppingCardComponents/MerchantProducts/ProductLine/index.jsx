import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../../../../store/slices/cartSlice';
import "./ProductLine.scss"
import Minus from "../../../../../assets/icons/minus.svg"
import Add from "../../../../../assets/icons/add.svg"
import Trash from "../../../../../assets/icons/trash.svg"

const ProductLine = ({ item, image}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addItemToCart(item));
  };

  const handleDecrement = () => {
    dispatch(removeItemFromCart(item.id)); 
  };

  const handleDelete = () => {
    dispatch(removeItemFromCart(item.id)); 
  };

  return (
    <div className='product-line'>
      <div className="product-line-detail-container">
        <div className="product-line-checkbox">
          <input type="checkbox" id="fourStarsorUpper" />
          <label htmlFor="fourStarsorUpper"></label>
        </div>
        <div className="img-container">
          <img src={image} alt="product" />
        </div>
        <div className="product-line-details">
          <h3>{item.attributes.title}</h3>
          <h5>Central Jakarta</h5>
          <p>${item.attributes.price}</p>
        </div>
      </div>

      <div className="action-bar-container">
        <h6>Add to Favourite</h6>
        <div className="actions">
          <div className="action-bar">
            <img src={Minus} alt="minus" onClick={handleDecrement} />
            <p>{item.quantity}</p>
            <img src={Add} alt="add" onClick={handleIncrement} />
          </div>
          <div className="delete-bar" onClick={handleDelete}> 
          <img src={Trash} alt="trash" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductLine