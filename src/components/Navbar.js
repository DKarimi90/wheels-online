import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare} from 'react-icons/fa'


const Navbar = () => {
const [nav, setNav] = useState(false) 
const [logo, setLogo] = useState(false)
const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
}
  return (
    <div className='w-full h-28'>
        <div className='w-full h-full max-w-[1200px] mx-auto px-4 flex justify-between items-center'>
            <div>
                <h1 className={`${logo? 'hidden': 'block'} text-2xl font-bold border-b-[2px]`}>WheelsOnline</h1>
            </div>
            <div className='hidden md:flex items-center'>
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="shop" className="links">Shop</NavLink>
                <NavLink to="contact" className="links">Contact</NavLink> 
                <div className='ml-10'>
                    <BsSearch />
                </div>
            </div>
            
            {/* mobile menu */}
            <div onClick={handleNav} className='block md:hidden z-10'>
                {nav? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className={`w-full h-full bg-slate-500 absolute md:hidden top-0 left-0 flex flex-col px-4 py-10 ${nav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}>
                <h1 className='text-2xl font-bold border-b-[2px]'>WheelsOnline</h1>
                <NavLink to="/" onClick={handleNav} className="mob-links">Home</NavLink>
                <NavLink to="shop" onClick={handleNav} className="mob-links">Shop</NavLink>
                <NavLink to="contact" onClick={handleNav} className="mob-links">Contact</NavLink> 
                <div className='flex justify-evenly mt-8'>
                  <FaFacebookSquare size={30}/> 
                  <FaInstagramSquare size={30}/>
                  <FaTwitterSquare size={30}/>
                  <FaWhatsappSquare size={30}/> 
                </div>
            </div> 
        </div>
          
    </div>
  )
}

export default Navbar