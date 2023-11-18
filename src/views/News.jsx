import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sitetitle from '../components/Sitetitle'
import SectionTitle from '../components/generics/SectionTitle'
import Articles from '../components/generics/Articles'

const News = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sitetitle title="News & Articles"/>
      <SectionTitle description="Test"/>
      <Articles/>
      
      <Footer/>
    </div>  
  )
}

export default News