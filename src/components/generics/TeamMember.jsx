import React from 'react'

const TeamMember = ({name, title, img}) => {
  return (
    <div className="team-member">
    <img src={img} alt="Picture of" />
    <h3>{name}</h3>
    <p>{title}</p>
    </div>
  )
}

export default TeamMember