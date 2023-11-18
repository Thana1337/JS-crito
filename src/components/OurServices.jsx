import React from 'react'
import ServiceSlides from './generics/ServiceSlides'
import Button from '../components/generics/Button'
import drawingLines from '../assets/img/Element2.svg'
import SectionTitle from './generics/SectionTitle'

const OurServices = () => {
  return (
    <section className="services">
                <img className="drawing-lines" src={drawingLines} alt="Drawing lines" />
                <div className="container">
                    <div className="top">
                        <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
                    </div>
                    <div className="middle">
                        <ServiceSlides title="Business Advice" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dignissimos fugit rerum!" url="/services/business-advice"/>
                        <ServiceSlides title="Startup Business" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dignissimos fugit rerum!" url="/services/startup-business"/>
                        <ServiceSlides title="Finiancial Advice" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dignissimos fugit rerum!" url="/services/financial-advice"/>
                        <ServiceSlides title="Risk Management" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dignissimos fugit rerum!" url="/services/risk-management"/>
                    </div>
                    <div className="bottom">
                        <div>
                            <div className="btn-animation-div">
                                <Button type="trans-animation" url="/services/browse-services" title="Browse Services"/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

  )
}

export default OurServices