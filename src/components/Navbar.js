import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineShop, AiOutlineContacts} from 'react-icons/ai'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
const [nav, setNav] = useState(false) 
const [logo, setLogo] = useState(false)
const [scroll, setScroll] = useState(false)

const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
}
useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 0) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll)
}, [])


  return (
    <div className={`w-full h-28 fixed z-10 ${scroll? "bg-black text-[var(--default)]": ''}`}>
        <div className='w-full h-full max-w-[1200px] mx-auto px-4 flex justify-between items-center'>
            <div>
                <h1 className={`${logo? 'hidden': 'block'} text-2xl font-bold border-b-[2px]`}><Link to="/" onClick={() => window.scrollTo(0, 0)}>WheelsOnline</Link></h1>
            </div>
            <div className='hidden md:flex items-center'>
                <NavLink to="/" className="links">Home</NavLink>
                {/* <NavLink to="shop" className="links">Shop</NavLink> */}
                <NavLink to="contact" className="links">Contact</NavLink> 
                <div className='ml-10'>
                    <BsSearch />
                </div>
            </div>
            
            {/* mobile menu */}
            <div onClick={handleNav} className='block md:hidden z-10 hover:cursor-pointer text-[var(--default)]'>
                {nav? <AiOutlineClose /> : <AiOutlineMenu className={`text-black ${scroll? "text-white": ''}`}/>}
            </div>
            <div className={`w-full h-screen bg-black absolute md:hidden top-0 left-0 flex flex-col px-4 py-10 ${nav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}>
                <h1 className='text-2xl font-bold border-b-[2px] text-[var(--primary)]'>WheelsOnline</h1>
                    <NavLink to="/" onClick={handleNav} className="mob-links spread-nav">Home<AiOutlineHome className='rel-icons'/></NavLink>
                    <NavLink to="shop" onClick={handleNav} className="mob-links spread-nav">Shop<AiOutlineShop className='rel-icons'/></NavLink>
                    <NavLink to="contact" onClick={handleNav} className="mob-links spread-nav">Contact<AiOutlineContacts className='rel-icons'/></NavLink> 
                <div className='flex justify-evenly mt-8 '>
                    <div>
                        <Link to="https://coolors.co/palettes/trending" target="_blank" onClick={handleNav}><FaFacebookSquare size={40} className="text-blue-900 icons"/></Link>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 inline-block  rounded">
                        <Link><FaInstagramSquare size={40} className="text-white icons" /></Link>
                    </div>
                    <div>
                        <Link><FaTwitterSquare size={40} className="text-blue-600 icons"/></Link>
                    </div>
                    <div>
                        <Link><FaWhatsappSquare size={40} className="text-green-700 icons"/></Link>
                    </div>
                </div>
                <div className='flex justify-center mt-9'>
                   <button className='button'> <Link to="/shop" onClick={handleNav}>Discover</Link></button>
                </div>
            </div> 
        </div>
          
    </div>
  )
}

export default Navbar