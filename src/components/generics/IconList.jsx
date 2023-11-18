import React from 'react'

const IconList = ({title, description, icon}) => {
  return (
    <div className="icon-list">
    <div>
        {icon}
    </div>
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default IconList