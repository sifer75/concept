import React from 'react'

function WebElement({ name }) {
  return (
    <>
         <div className="webElement">
              <p>{name}</p>
              <div className={name}></div>
            </div>
    </>
  )
}

export default WebElement