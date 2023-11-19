import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({title, categori, description, img, alt, date, month, url}) => {


  return (
    <div className='article-news-middle'>
    <article>
    <Link to={url}>
        <div className="date">
            <div>{date}<br/><p>{month}</p></div>
        </div>
        <div className='imgContainer'><img src={img} alt={alt}/></div>
        <p>{categori}</p>
        <h3>{title}</h3>
        <p>{description}</p>
    </Link>
    </article>
    </div>
  )
}

export default Articles