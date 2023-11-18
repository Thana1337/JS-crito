import React from 'react'

const ProjectImages = ({img, title,id}) => {
  return (
    <div id={id} className="p-s-img">
    <img src={img} alt="Man in a black suit reading a newspaper"/>
    <h3>{title}</h3>
    <div className="read-more-border">
        <a href="placeholder.html">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </div>
  )
}

export default ProjectImages