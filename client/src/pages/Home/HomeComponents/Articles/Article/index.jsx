import React from "react";
import "./Article.scss"


const Article = ({ title, description, date, image}) => {
  return (
    <div className='article'>
      <img src={image} alt="article" />
      <div className="article-description">
        <p className='article-date'>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Article