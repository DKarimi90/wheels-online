import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[var(--default)]">
    <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
      <div className="w-full text-7xl font-bold">
        <h1 className="w-full md:w-2/3 text-[var(--default2)]">How can we help you. get
          in touch</h1>
      </div>
      <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="w-full md:w-2/3 text-gray-400">To ensure quality services, please feel free to contact us through by visiting our contact page</p>
        <div className="">
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="button ">Contact US</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-24 mb-12 flex-row justify-between">
          <div className>
            <div>
                <Link onClick={() =>window.scrollTo(0, 0)} className="text-gray-600 hover:text-black">Back to Top</Link>
            </div>    
          </div>
          <Link className="hidden md:block  text-gray-600 hover:text-black ">ABOUT</Link>
          <Link  className="hidden md:block  text-gray-600 hover:text-black ">SERVICES</Link >
          <Link  className="hidden md:block  text-gray-600 hover:text-black ">WHY US</Link >
          <Link  className="hidden md:block  text-gray-600 hover:text-black ">CONTACT</Link >
          <div className="flex flex-row space-x-8 items-center justify-between">
          <div>
                    <Link to="https://coolors.co/palettes/trending" target="_blank"><FaFacebookSquare size={40} className="text-blue-900 icons"/></Link>
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
        </div>
        <hr className="border-gray-600" />
        <p className="w-full text-center my-12 text-gray-600">Copyright &copy; 2023 David</p>
      </div>
    </div>
  </div>
  )
}

export default Footer