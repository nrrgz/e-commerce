import React from "react";
import "./CategoryCard.scss";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ id, title, img, productQuantity }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-list/${id}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={img} alt="category" />
      <p className='category-title'>{title}</p>
      <p className='category-products'>{productQuantity}</p>
    </div>
  );
};

export default CategoryCard;
