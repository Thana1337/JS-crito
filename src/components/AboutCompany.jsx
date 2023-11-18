import React from 'react'
import SectionTitle from './generics/SectionTitle'
import samantha from '../assets/img/samantha.png'
import { Link } from 'react-router-dom'
import Button from './generics/Button'

const AboutCompany = () => {
  return (
    <div className="about-company">
    <div className="container">
        <div className="left-side-about">
            <div className="samantha">
                <h3>Samantha Brown,<p> Founder</p>
                </h3>
                <p id="citat">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
            <div className="about-left">
                    <img src={samantha} alt="samantha brown, founder of crito"/>
            </div>
        </div>   
        <div className="about-right">
            <div className="top">
                <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>
                <div className="paragraph">
                    <p id="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    </p>
                    <p id="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="learn-more">
                    <Button title="Learn More" type="black-animation" url="/about-company/learn-more"/>    
                </div>
                <div className="intro-video">
                    <Link to="/intro-video"><i className="fa-solid fa-play icon-border"></i>Intro video</Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutCompany