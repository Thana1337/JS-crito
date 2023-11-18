import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Logos from '../components/Logos'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import ProjectNCases from '../components/ProjectNCases'
import OurTeam from '../components/OurTeam'
import Reviews from '../components/Reviews'
import ArticlesAndNews from '../components/ArticlesAndNews'
import NewsLetter from '../components/NewsLetter'
import MobileMeny from '../components/MobileMeny'

const Home = () => {
  return (
    <>
        <div className='wrapper'>
            <Header/>
            <Showcase/>
            <Logos/>
            <Features/>
            <AboutCompany/>
            <OurServices/>
            <WhyUs/>
            <ProjectNCases/>
            <OurTeam/>
            <Reviews/>
            <ArticlesAndNews/>
            <NewsLetter/>
            <Footer/>
        </div>

    </>
  )
}

export default Home