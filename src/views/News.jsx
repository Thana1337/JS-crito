import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/generics/Articles'
import MoreNews from '../components/MoreNews'
import Sitetitle from '../components/Sitetitle'
import NewsLetter from '../components/NewsLetter'

const News = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sitetitle title="News & Articles"/>
      <MoreNews/>
      <NewsLetter/>
      <Footer/>
    </div>  
  )
}

export default News