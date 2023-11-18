import React from 'react'

const FeaturesBox = ({title,description}) => {
  return (
    <div className='FeatureBox'>
        <h2>{title}</h2><p>{description}</p>
    </div>
  )
}

export default FeaturesBox