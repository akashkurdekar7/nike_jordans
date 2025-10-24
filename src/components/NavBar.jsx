import React, { useEffect, useState } from 'react'
import blackLogo from '../assets/images/black-logo.png'
import { FaUser } from "react-icons/fa";
const NavBar = () => {
  const [active, setActive] = useState('Home')
  useEffect(() => {
    setActive('Home')
  }, [])
  return (
    <nav className=' fixed top-0 left-0 right-0 z-50 px-[2vw] py-[.5vw]'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src={blackLogo} alt="" className='w-[4vw]' />
          </div>
          <div className="">
            <ul className="flex gap-2">
              <li className="text-black border border-white bg-white px-[1vw] py-[.5vw] rounded-[8vw] text-[1vw] cursor-pointer longshot tracking-[.1vw] uppercase">Home</li>
              <li className="text-black border px-[1vw] py-[.5vw] rounded-[8vw] text-[1vw] cursor-pointer longshot tracking-[.1vw] uppercase">Shop</li>
              <li className="text-black border  px-[1vw] py-[.5vw] rounded-[8vw] text-[1vw] cursor-pointer longshot tracking-[.1vw] uppercase">About</li>
              <li className="text-black border  px-[1vw] py-[.5vw] rounded-[8vw] text-[1vw] cursor-pointer longshot tracking-[.1vw] uppercase">Contact</li>
            </ul>
          </div>
          <div className="">
            <button className=" border border-black p-3 rounded-full bg-black/90 hover:bg-black/50">
              <FaUser className='text-[1vw] text-white ' />
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar