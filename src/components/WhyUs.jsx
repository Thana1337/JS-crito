import React from 'react'
import SectionTitle from './generics/SectionTitle'
import IconList from './generics/IconList'
import whyChooseUs from '../assets/img/why-choose-us.png'
import bg from '../assets/img/BG.png'

const WhyUs = () => {
  return (
    <div className="why-choose-us">
    <div className="container">
        <div className="wcu-left">
            <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
            <div className="wcu-list">
                <IconList icon={<i className="fa-regular fa-thumbs-up "></i>} title="Process Excellence" description="Lorem ipsum dolor sit amet consectetur."/>
                <IconList icon={<i className="fa-regular fa-hexagon-check "></i>} title="Strategic Planning" description="Lorem ipsum dolor sit amet consectetur."/>
                <IconList icon={<i className="fa-regular fa-pen-nib "></i>} title="Experience Design" description="Lorem ipsum dolor sit amet consectetur."/>
                <IconList icon={<i className="fa-solid fa-head-side-gear "></i>} title="Artificial Intelligence" description="Lorem ipsum dolor sit amet consectetur."/>
            </div>
        </div>
        <div className="wcu-right">
            <img id="bg" src={bg} alt="background color beige"/>
            <img id="wcu-image" src={whyChooseUs} alt="two women communicating on a meeting"/>
        </div>
    </div>
</div>
  )
}

export default WhyUs