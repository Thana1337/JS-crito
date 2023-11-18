import React from 'react'
import SectionTitle from './generics/SectionTitle'
import ArticlesAPI from './generics/ArticlesAPI'

const MoreNews = () => {
  return (
    <>
    <div className='container'>
      <div>
      <SectionTitle description="Our News & Articles"/>
      <div className='articlesAPI'>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
        <ArticlesAPI/>
      </div>
      </div>
      <div className='pageCount'>
        <p>{"< 1 2 3 4 5 ... >"}</p>
      </div>

    </div>
    
    </>
  )
}

export default MoreNews