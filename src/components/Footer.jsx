import React from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/img/Logo-footer.svg'
import drawingLines from '../assets/img/Element4.svg'


const Footer = () => {
  return (

    <footer>
    <div className="container">
        <div className="top-footer">
            <div className="footer-info">
                <img src={logoFooter} alt="Crito logotyp"/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="meny-footer">
                <h4>Company</h4>
                <Link to="/company/about">About</Link>
                <Link to="/company/features">Features</Link>
                <Link to="/company/works">Works</Link>
                <Link to="/company/career">Career</Link>
            </div>
            <div className="meny-footer">
                <h4>Help</h4>
                <Link to="/help/customer-support">Customer Support</Link>
                <Link to="/help/delivery-details">Delivery Details</Link>
                <Link to="/help/terms-&-conditions">Terms & Conditions</Link>
                <Link to="/help/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="meny-footer">
                <h4>Resources</h4>
                <Link to="/resources/free-books">Free eBooks</Link>
                <Link to="/resources/development-tutorial">Development Tutorial</Link>
                <Link to="/resources/how-to-blog">How to - Blog</Link>
                <Link to="/resources/youtube-playlist">Youtube Playlist</Link>
            </div>
            <div className="meny-footer">
                <h4>Link</h4>
                <Link to="/link/free-books">Free eBooks</Link>
                <Link to="/link/development-tutorial">Development Tutorial</Link>
                <Link to="/link/how-to-blog">How to - Blog</Link>
                <Link to="/link/youtube-playlist">Youtube Playlist</Link>
            </div>
        </div>
    </div>
    <div className="borderout">
        <img className="drawing-lines" src={drawingLines} alt="Drawing lines"/>
    </div>
    <div className="container">
        <div className="bottom-footer">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div className="social-footer">
                <Link to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="https://www.twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></Link>
                <Link to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
    </div>
</footer>
  )
}

export default Footer