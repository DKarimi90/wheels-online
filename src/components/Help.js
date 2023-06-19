import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full pt-44'>
            <Link to="/contact">Contact</Link>
            <h1>FAQs</h1>
        </div>
    </div>
  )
}

export default Help