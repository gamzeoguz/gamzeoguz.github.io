import React from 'react'

function Toggle({theme, onClick}) {
  return (
    <div className="toggle" onClick={onClick} theme={theme}>
      <div className='notch'>
        <div className="crater"></div>
        <div className="crater"></div>
      </div>
      <div>
        <div className='shape sm'></div>
        <div className='shape sm'></div>
        <div className='shape md'></div>
        <div className='shape lg'></div>
      </div>
    </div>
  

  )
}

export default Toggle