import React, { useState } from 'react';
import './AddCard.scss';
import { Link } from 'react-router-dom';

const AddCard = () => {

  return (
    <form className="debit-card-form">
      <h2>Add Debit Card</h2>
      <div className="form-group-container">
        <div className="form-group">
          <label>Holder Name</label>
          <input
            type="text"
            name="holderName"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="0000 - 0000 - 0000 - 0000"
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            required
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            placeholder="Enter your CVV"
            required
          />
        </div>
      </div>
      <div className="form-buttons">
        <button type="button" className="cancel-button">Cancel</button>
        <Link to="/success" className='link'>
          <button type="submit" className="checkout-button">Add Card</button>
        </Link>
      </div>
    </form>
  );
};

export default AddCard;
