import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({title, categori, description, img, alt, date, month, url}) => {


  return (
    <article id="article1">
    <Link to={url}>
        <div className="date">
            <div>{date}<br/><p>{month}</p></div>
        </div>
        <img src={img} alt={alt}/>
        <p>{categori}</p>
        <h3>{title}</h3>
        <p>{description}</p>
    </Link>
    </article>
  )
}

export default Articles