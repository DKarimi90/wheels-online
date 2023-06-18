import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Shop = ( {cars} ) => {

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center pt-32'>
            <h1 className='font-bold text-xl md:text-2xl lg:text-4xl text-[var(--default2)]'>CURRENTLY IN STOCK</h1>
      </div>
            <div className='flex justify-center md:justify-end pr-6 py-6 items-center'>
                <div className='text-center border border-[var(--primary2)] flex items-center rounded-xl overflow-hidden'>
                    <input type="search" placeholder="Search Car" className='pl-3 focus:outline-none'/>
                    <div className='p-2 px-5 bg-[var(--primary2)] hover:cursor-pointer  hover:bg-[#ffd166]'>
                        <BsSearch size={20}/>
                    </div>
                </div>
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