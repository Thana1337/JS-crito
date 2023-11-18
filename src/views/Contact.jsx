import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sitetitle from '../components/Sitetitle'
import ContactPage from '../components/ContactPage'
import MessageForm from '../components/MessageForm'


const Contact = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sitetitle title="Let's Connect" />
      <ContactPage/>
      <MessageForm/>
      <Footer/>
    </div>
  )
}

export default Contact