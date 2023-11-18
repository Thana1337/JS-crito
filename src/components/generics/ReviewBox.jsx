import React from 'react'

const ReviewBox = ({name, title, description, img}) => {
  return (
    <div className="review-box">
    <div className="review-box-top">
        <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        <p>{description}</p>
    </div>
    <div className="review-box-bottom">
        <div>
            <img src={img} alt="Profile picture of Cassandra"/>
        </div>
        <div>
            <h3>{name}</h3>
            <p id="red">{title}</p>
        </div>
    </div>
</div>
  )
}

export default ReviewBox