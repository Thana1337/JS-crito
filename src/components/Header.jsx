import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/img/Logo.svg'
import MobileMeny from './MobileMeny'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)
  return (
    <>
    {menuOpen ? (    
    <MobileMeny/>):
     <></> }
    <header>
    <div className="container">
        <Link to="/"><img src={Logo} alt="Crito logotype"/></Link>
        <button onClick={()=>setMenuOpen(!menuOpen)} className={`menu-bars ${menuOpen ? 'fixed': ''}`}>{menuOpen ? (<i className="fa-regular fa-xmark"></i>): <i className=" fa-regular fa-bars"></i>} </button>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="content-box">
                        <i className="fa-light fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-light fa-envelope"></i>
                        info@crito.com                        
                    </div>
                    <div className="content-box last">
                        <i className="fa-light fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM                       
                    </div>
                </div>         
                <div className="social">
                    <Link to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="https://www.twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></Link>
                    <Link to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>  
            <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Service">Service</NavLink>
                    <NavLink to="/News">News</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </nav>
                <Link className="buttonyellow" to="/login">Login <i className="fa-regular fa-arrow-up-right-from-square"></i></Link>
            </div>     
        </div>
    </div>
    </header>
    </>
  )
}

export default Header