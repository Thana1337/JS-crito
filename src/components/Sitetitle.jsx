import React from 'react'
import element from '../assets/img/Element1.svg'

const Sitetitle = ({title}) => {
  return (
    <div className="lets-connect">
    <img src={element} alt="Drawing lines"/>
    <div className="container">
        <h1>{title}</h1>
    </div>
   </div>
  )
}

export default Sitetitle