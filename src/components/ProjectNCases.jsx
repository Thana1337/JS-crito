import React from 'react'
import projectOne from '../assets/img/project1.png'
import projectTwo from '../assets/img/project2.png'
import projectThree from '../assets/img/project3.png'
import projectFour from '../assets/img/project4.png'
import Button from './generics/Button'
import SectionTitle from './generics/SectionTitle'
import ProjectImages from './generics/ProjectImages'


const ProjectNCases = () => {
  return (
    <div className="project-studies">
    <div className="container">
        <div className="title">
            <SectionTitle title="Projects & Case Studies" description="Let's Looks Our Global Projects" />
        </div>
        <div className="galleri">
            <ProjectImages img={projectOne} title="Grow your business"/>
            <ProjectImages img={projectTwo} title="Why your client needs a responsive website"/>
            <ProjectImages id="invis" img={projectThree} title="Educate your emplyees to get better results"/>
            <ProjectImages id="invis" img={projectFour} title="Business Insights is a important piece of your business"/>
        </div>
        <div className="p-s-buttom">
            <Button title="All Recent Projects" type="black-animation" url="/project-and-case-studies/all-recent-project"/>
        </div>



    </div>
</div>
  )


}

export default ProjectNCases