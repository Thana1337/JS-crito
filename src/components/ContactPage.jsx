
import React from 'react'
import Button from '../components/generics/Button'

const ContactPage = () => {
  return (
    <div className="contact-page">
    <div className="container">
        <div className="fullscreene">
            <div className="box">
                <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="info">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31 <br/>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                <div className="info">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50 <br/> +46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="info">
                    <h3>Email us</h3>
                    <p>info@crito.com <br/> support@crito.com</p>
                </div>
            </div>

        </div>
        <div className="smallscreene">
            <div className="box">
                <Button title="Contact Us" type="black-animation" url="/contact/contact-us"/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default ContactPage