import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/generics/Articles'
import MoreNews from '../components/MoreNews'
import Sitetitle from '../components/Sitetitle'

const News = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sitetitle title="News & Articles"/>
      <MoreNews/>
      <Articles/>
      <Footer/>
    </div>  
  )
}

export default News