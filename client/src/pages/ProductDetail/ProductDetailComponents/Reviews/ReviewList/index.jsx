import React from 'react'
import "./ReviewList.scss"
import Star from "../../../../../assets/icons/star.svg"
import User1 from "../../../../../assets/icons/user-1.svg"
import User2 from "../../../../../assets/icons/user-2.svg"
import User3 from "../../../../../assets/icons/user-3.svg"
import User4 from "../../../../../assets/icons/user-4.svg"
import Like from "../../../../../assets/icons/like.svg"
import Dislike from "../../../../../assets/icons/dislike.svg"
import Liked from "../../../../../assets/icons/like-checked.svg"
import Filter from "../../../../../assets/icons/filter.svg"


const ReviewList = () => {
  return (
    <div className='review-list'>
      <h4>Review Lists</h4>
      <div className="review-buttons">
        <div className="review-btns">
          <button className="add-review">All Reviews</button>
          <button>With Photo & Video</button>
          <button>With Description</button>
        </div>
        <div className="filter-review">
          <img src={Filter} alt="filter" />
        </div>
      </div>
      <div className="product-comment">
        <div className="review-comment">
          <div className="comment-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <p className='comment'>This is amazing product I have.</p>
          <p className='date'>July 2, 2020 03:29 PM</p>
          <div className="user-profile">
            <img src={User1} alt="user" />
            <p>Darrell Steward</p>
          </div>
        </div>
        <div className="feedback-buttons">
          <div className="like-button">
            <img src={Liked} alt="like" />
            <p>128</p>
          </div>
          <button className='dislike-button'>
            <img src={Dislike} alt="dislike" />
          </button>
        </div>
      </div>
      <div className="product-comment">
        <div className="review-comment">
          <div className="comment-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <p className='comment'>This is amazing product I have.</p>
          <p className='date'>July 2, 2020 1:04 PM</p>
          <div className="user-profile">
            <img src={User2} alt="user" />
            <p>Darlene Robertson</p>
          </div>
        </div>
        <div className="feedback-buttons">
          <div className="like-button">
            <img src={Like} alt="like" />
            <p>82</p>
          </div>
          <button className='dislike-button'>
            <img src={Dislike} alt="dislike" />
          </button>
        </div>
      </div>
      <div className="product-comment">
        <div className="review-comment">
          <div className="comment-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <p className='comment'>This is amazing product I have.</p>
          <p className='date'>June 26, 2020 10:03 PM</p>
          <div className="user-profile">
            <img src={User3} alt="user" />
            <p>Kathryn Murphy</p>
          </div>
        </div>
        <div className="feedback-buttons">
          <div className="like-button">
            <img src={Like} alt="like" />
            <p>9</p>
          </div>
          <button className='dislike-button'>
            <img src={Dislike} alt="dislike" />
          </button>
        </div>
      </div>
      <div className="product-comment last">
        <div className="review-comment">
          <div className="comment-stars">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <p className='comment'>This is amazing product I have.</p>
          <p className='date'>July 7, 2020 10:14 AM</p>
          <div className="user-profile">
            <img src={User4} alt="user" />
            <p>Ronald Richards</p>
          </div>
        </div>
        <div className="feedback-buttons">
          <div className="like-button">
            <img src={Like} alt="like" />
            <p>124</p>
          </div>
          <button className='dislike-button'>
            <img src={Dislike} alt="dislike" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewList