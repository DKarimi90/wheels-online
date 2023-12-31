import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsCarFrontFill} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineContacts, AiOutlineTeam} from 'react-icons/ai'
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
    <div className={`w-full h-28 fixed z-10 ${scroll? "bg-gray-900 text-[var(--default)]": ''}`}>
        <div className='w-full h-full max-w-[1200px] mx-auto px-4 flex justify-between items-center'>
            <div>
                <h1 className={`${logo? 'hidden': 'block'} text-2xl font-bold border-b-[2px] hover:text-[var(--default2)] hover:border-[var(--default2)] border-black`}><Link to="/" onClick={() => window.scrollTo(0, 0)}>WheelsOnline</Link></h1>
            </div>
            <div className='hidden md:flex items-center mr-80'>
                <NavLink to="/" className="links" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                <NavLink to="team" className="links" onClick={() => window.scrollTo(0, 0)}>Team</NavLink> 
                <NavLink to="help" className="links" onClick={() => window.scrollTo(0, 0)}>Help</NavLink> 
                <div className='ml-10'>
                    <BsCarFrontFill size={20} />
                </div>
            </div>
            
            {/* mobile menu */}
            <div onClick={handleNav} className='block md:hidden z-10 hover:cursor-pointer text-[var(--default)]'>
                {nav? <AiOutlineClose /> : <AiOutlineMenu className={`text-black ${scroll? "text-white": ''}`}/>}
            </div>
            <div className={`w-full h-screen bg-black absolute md:hidden top-0 left-0 flex flex-col px-4 py-10 ${nav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}>
                <h1 className='text-2xl font-bold border-b-[2px] text-[var(--primary)] hover:text-[var(--default)]'><Link to="/" onClick={handleNav}>WheelsOnline</Link></h1>
                    <NavLink to="/" onClick={handleNav} className="mob-links spread-nav">Home<AiOutlineHome className='rel-icons'/></NavLink>
                    <NavLink to="team" onClick={handleNav} className="mob-links spread-nav">Team<AiOutlineTeam className='rel-icons'/></NavLink> 
                    <NavLink to="help" onClick={handleNav} className="mob-links spread-nav">Help<AiOutlineContacts className='rel-icons'/></NavLink> 
                <div className='flex justify-evenly mt-8 '>
                    <div>
                        <Link to="https://coolors.co/palettes/trending" target="_blank" onClick={handleNav}><FaFacebookSquare size={40} className="text-blue-900 icons"/></Link>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-500 to-purple-500 inline-block  rounded">
                        <Link><FaInstagramSquare size={40} className="text-white icons" /></Link>
                    </div>
                    <div>
                        <Link><FaTwitterSquare size={40} className="text-blue-500 icons"/></Link>
                    </div>
                    <div>
                        <Link><FaWhatsappSquare size={40} className="text-green-700 icons"/></Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center mt-9'>
                   <button className='button my-5'> <Link to="/shop" onClick={handleNav}>Get Started</Link></button>
                   <button className='button my-5'> <Link to="/oops" onClick={handleNav}>Discover</Link></button>
                </div>
            </div> 
        </div>
          
    </div>
  )
}

export default Navbar