import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sitetitle from '../components/Sitetitle'
import PageNotFound from './PageNotFound'

const Service = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sitetitle title="Services"/>
      <div className='NotFound'>
        <p id='title'>Sorry, this site is currently not available.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Service