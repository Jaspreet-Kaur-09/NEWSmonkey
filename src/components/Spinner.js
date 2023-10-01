import React from 'react'
import loading from '../Fading lines.gif'

const Spinner=()=>{
    return (
      <div className='text-center my-4'>
        <img style={{weight:'30px',height:'30px'}} src={loading} alt={loading}/>
      </div>
        
      
    )
  }
  export default Spinner;

