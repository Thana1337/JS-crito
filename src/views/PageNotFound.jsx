import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PageNotFound = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='NotFound'>
        <p id='title'>Sorry, this site is currently not available.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default PageNotFound