import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
const [cars, setCars] = useState([])

useEffect(() => {
    fetch('http://localhost:3005/cars')
    .then(res => {
        if(res.ok){
            return res.json()
        }
        else {
            throw Error("Resource not found")
        }
    })
    .then(data => {
        console.log(data)
        setCars(data)
    })
    
}, [])
  return (
    <div className='w-full h-full'>
      <div className='flex justify-center'>
        <h1 className='pt-32 font-bold'>CURRENTLY IN STOCK</h1>
      </div>
        <div className='pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 px-3'>
            {cars && cars.map((car, index) => (
                <div key={index} className="rounded-xl overflow-hidden relative bg-gray-300">
                    <Link to={`cars/${car.id}`}>
                        <img src={car.image_url[0]} alt="name" className=''/>
                        <p className='absolute bottom-1 left-2 text-[var(--default)] font-bold top-2'>{car.name}</p>
                    </Link>
                    <div className='flex justify-evenly'>
                        <p className='bg-gray-200 p-2 m-2 rounded'>{car.model}</p>
                        <p className='bg-gray-200 p-2 m-2 rounded'>{car.year}</p>
                        <p className='bg-gray-200 p-2 m-2 rounded'>{car.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shop; 