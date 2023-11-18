import React from 'react'

const ServiceSlides = ({title, description, url}) => {
  return (
    <div className="slide">
        <i className="fa-thin fa-horizontal-rule"></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="arrow-btn">
            <a href={url}><i className="fa-light fa-arrow-right circle-icon"></i></a>
        </div>
    </div>
  )
}

export default ServiceSlides