import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMeny = () => {
  return (
    <div className="container">
        <div className='mobilemenu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/News">News</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default MobileMeny