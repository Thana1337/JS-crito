import React from 'react'
import FeaturesBox from './generics/FeaturesBox'
import Button from './generics/Button'
import SectionTitle from './generics/SectionTitle'

const Features = () => {
  return (
    <div className="features">
    <div className="borderout"></div>
    <div className="container">
        <div className="features-right">
            <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
            <div>
                <Button title="Learn More" type="yellow-animation" url="/learn-more"/>
            </div>
            
        </div>
        <div className="features-left">
            <div><i className="fa-regular fa-handshake"></i><FeaturesBox title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/> </div>
            <div><i className="fa-light fa-lightbulb-on"></i><h2>Business Advice</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div><i className="fa-regular fa-chart-mixed-up-circle-dollar"></i><h2>Business Advice</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div><i className="fa-regular fa-hand-holding-box"></i><h2>Business Advice</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        </div>
    </div>
</div>
  )
}

export default Features