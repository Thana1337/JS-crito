import React from 'react'
import Element from '../assets/img/Element3.svg'
import Button from './generics/Button'

const NewsLetter = () => {
  return (
    <div className="newsletter">
    <img className="drawing-lines" src={Element} alt="Drawing lines"/>
    <div className="container">
        <div>
            <h2>Get News Updates By Signup</h2>
        </div>
        <div className="subscribe">
            <div>
                <form name="subscribe-email" action="placeholder.html">
                    <input type="email" placeholder="username@domain.com"/>
                </form>
            </div>
            <Button title="Subscribe" type="yellow-animation" url="/news-letters"/>
        </div>
    </div>
</div>
  )
}

export default NewsLetter