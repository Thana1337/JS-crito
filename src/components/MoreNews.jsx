import React, { useState } from 'react'
import SectionTitle from './generics/SectionTitle'
import ArticlesAPI from './generics/ArticlesAPI'
import { NavLink } from 'react-router-dom'


const MoreNews = () => {

  const [hasGoneForward, setHasGoneForward] = useState(false);

  const goToPreviousPage = () => {
    if (window.history.length > 1) {
      window.history.back();
    }
  };

  const goToNextPage = () => {
    window.location.href = '/next-page';
    setHasGoneForward(true);
  };


  return (
    <>
    <div className='container'>
      <div className='headroom'>
      <SectionTitle description="Our News & Articles"/>
        <div className='articlesAPI'>
          <ArticlesAPI/>
        </div>
      </div>
      <div className='pageCount'>
        <button onClick={goToPreviousPage} disabled={!hasGoneForward}>&lt;</button>
        <NavLink to="/News">1</NavLink>
        <NavLink to="/News-2">2</NavLink>
        <NavLink to="/News-3">3</NavLink>
        <NavLink to="/News-4">4</NavLink>
        <button onClick={goToNextPage}>&gt;</button>
      </div>

    </div>
    
    </>
  )
}

export default MoreNews