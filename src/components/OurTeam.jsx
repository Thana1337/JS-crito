import React from 'react'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'
import Kristine from '../assets/img/kristineP.png'
import Mark from '../assets/img/markA.png'
import Kimberly from '../assets/img/KimberlyH.png'
import Justin from '../assets/img/JustinW.png'
import TeamMember from './generics/TeamMember'


const OurTeam = () => {
  return (

    <div className="team">
    <div className="container">
        <div className="team-top">
            <div>
                <SectionTitle title="Meet Our Team" description="Experience Team members" />
            </div>
            <div>
                <Button title="Browse Team" type="trans-animation" url="/browse-team" />
            </div>
        </div>
        <div className="team-middle">
        <TeamMember img={Kristine} name="Kristine Palmer" title="Chef Operatiion Officer"/>
        <TeamMember img={Mark} name="Mark Aubri" title="Senior Consultant"/>
        <TeamMember img={Kimberly} name="Kimberly Hansen" title="Senior Consultant"/>
        <TeamMember img={Justin} name="Justin Willoman" title="Senior Tech Consultant"/>
        </div>
        <div className="team-bottom">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle active"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
        </div>
    </div>

</div>
  )
}

export default OurTeam