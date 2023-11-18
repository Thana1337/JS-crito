import React from 'react'
import element from '../assets/img/Element1.svg'
import Button from './generics/Button'
import showcase from '../assets/img/showcase.png'
import SectionTitle from './generics/SectionTitle'

const Showcase = () => {
  return (
  <div className="Hero">
    <img className="drawing-lines" src={element} alt="Drawing lines"/>
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Button title="Get Consulting" type="yellow-animation" url="/get-consulting"/>
            <Button title="Learn More" type="trans-animation" url="/learn-more"/>  
        </div>
        <img src={showcase} alt="Man in suite with a tablet"/>
    </div>
  </div>
  )
}

export default Showcase