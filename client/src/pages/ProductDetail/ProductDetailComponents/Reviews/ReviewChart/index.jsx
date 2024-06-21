import React from 'react'
import "./ReviewChart.scss"
import Star from "../../../../../assets/icons/star.svg"

const ReviewChart = () => {
  return (
    <div className="review-chart">
      <h4>Product Reviews</h4>
      <div className="review-bar">
        <div className="summary">
          <div className="rating-circle">
            <svg width="84" height="84">
              <circle
                cx="42"
                cy="42"
                r="38"
                stroke="#e0e0e0"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="42"
                cy="42"
                r="38"
                stroke="#FFA439"
                strokeWidth="4"
                fill="none"
                strokeDasharray="238"
                strokeDashoffset="48"
                strokeLinecap="round"
              />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="#000">
                4.8
              </text>
            </svg>
          </div>
          <div className="rating-details">
            <div className="stars">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            <div className="reviews">from 1.25K reviews</div>
          </div>
        </div>
        <div className="breakdown">
          <div className="breakdown-item">
            <span className="star-label">5.0</span>
            <img src={Star} alt="star" />
            <div className="bar">
              <div className="filled" style={{ width: '85%' }}></div>
            </div>
            <span className="count">2823</span>
          </div>
          <div className="breakdown-item">
            <span className="star-label">4.0</span>
            <img src={Star} alt="star" />
            <div className="bar">
              <div className="filled" style={{ width: '50%' }}></div>
            </div>
            <span className="count">38</span>
          </div>
          <div className="breakdown-item">
            <span className="star-label">3.0</span>
            <img src={Star} alt="star" />
            <div className="bar">
              <div className="filled" style={{ width: '15%' }}></div>
            </div>
            <span className="count">4</span>
          </div>
          <div className="breakdown-item">
            <span className="star-label">2.0</span>
            <img src={Star} alt="star" />
            <div className="bar">
              <div className="filled" style={{ width: '0%' }}></div>
            </div>
            <span className="count">0</span>
          </div>
          <div className="breakdown-item">
            <span className="star-label">1.0</span>
            <img src={Star} alt="star" />
            <div className="bar">
              <div className="filled" style={{ width: '0%' }}></div>
            </div>
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReviewChart