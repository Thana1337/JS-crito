import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
    <p id='red'>{title}</p>
    <h2 id='title'>{description}</h2>
    </>
  )
}

export default SectionTitle