import React from 'react'
import blackLogo from '../assets/images/black-logo.png'

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
            <img src={blackLogo} alt="" className='w-[4vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>
  )
}

export default Loader