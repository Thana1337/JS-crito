import React from 'react'

const Button= ({type, url,title}) => {
    

    const getButtonClass = () => {
        switch(type) {
            case `yellow`:
                return `buttonyellow`
            case `black`:
                return `buttonblack`
            case `yellow-animation`:
                return `buttonyellow-animation`
            case `black-animation`:
                return `buttonblack-animation`
            case `trans-animation`:
                return `buttontrans-animation`
            default:
                return `buttontrans`
        }
    }


  return (

    <div className="btn-animation-div">
    <span className={getButtonClass()}><a href={url}><span>{title}<i className="fa-regular fa-arrow-up-right"></i></span></a></span>
    </div>
    // <span className={getButtonClass()}><a href={url}><span>{title}<i className="fa-regular fa-arrow-up-right"></i></span></a></span>
  )
}

export default Button