import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ( {cars} ) => {
  return (
    <div className='w-full h-screen'>
      <div className='absolute top-[50%] left-[50%]'>
        <h1>+254-113-312-554</h1>
        <Link to="/">Home</Link>
        {cars && cars.map(car => (
          <div>
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact