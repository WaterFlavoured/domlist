import React from 'react'
import './Card.css'
const EnterCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <div className="card">
      
      
        <form>
            <div className='tits'>
              <input type="text" className='ntitle' placeholder='Title...'/>
            </div>
            
            <hr className='funnyline'/>
            <fieldset>
              <legend>Priority</legend>
              <input type="radio" name="priority" value="low" /> 
              <label htmlFor="low">Low</label>
              <input type="radio" name="priority" value="medium" />
              <label htmlFor="medium">Medium</label> 
              <input type="radio" name="priority" value="high" />
              <label htmlFor="high">High</label> 
            </fieldset>
            <div className='tits2'>
              <textarea className='atext'/>
            </div>
            <div className='cardSubBox'>
              <button onSubmit={handleSubmit} className='cardSub'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default EnterCard