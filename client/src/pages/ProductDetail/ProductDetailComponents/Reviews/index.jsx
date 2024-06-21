import React from 'react'
import "./Reviews.scss"
import ReviewChart from './ReviewChart'
import ReviewFilter from './ReviewFilter'
import ReviewList from './ReviewList'

const Reviews = () => {
  return (
    <div className='reviews-tab'>
      <ReviewChart />
      <div className="reviews-main">
        <ReviewFilter />
        <ReviewList />
      </div>
    </div>
  )
}

export default Reviews