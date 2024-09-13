import React from 'react'

import './Card.css'
const Card = ({title, date, priority, description}) => {
  return (
    <div className="card">
      <div>
        <h1>{title}</h1>
        <hr className='funnyline'/>
        <h3>{date}</h3>
        <h4>{priority}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card