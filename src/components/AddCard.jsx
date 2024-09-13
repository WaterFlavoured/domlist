import React from 'react'
import './Card.css'
const AddCard = ({handleClick, showGenerate}) => {
  return (
    <div className='cardadd' onClick={handleClick}>
      {showGenerate ? <h1>-</h1> : <h1>+</h1>}
    </div>
  )
}

export default AddCard