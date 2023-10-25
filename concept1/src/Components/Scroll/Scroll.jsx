import React, { useState } from 'react'
import './Scroll.css'

function Scroll ({ scrollNext, scrollPrev }) {
  return (
   <>
    <div className='container-button'>
        <button className='B B1' onClick={scrollNext}></button>
        <button className='B B2' onClick={scrollPrev}></button>
    </div>
   </>
  )
}

export default Scroll