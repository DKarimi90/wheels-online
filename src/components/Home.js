import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='w-full h-full'><img src='./images/bg.jpg' alt='car' className='w-full h-full object-cover'/></div>
          <div className='absolute left-[50%] top-[30%] translate-x-[-50%] text-center'>
            <h2 className='font-bold text-3xl md:text-6xl text-[#ffffff]'>Flash Sale</h2>
          <div className='flex justify-center items-center text-[#ffffff] py-6'>
            <h2 className='border-b w-[30px] md:w-[60px]'></h2>
            <h3 className='pl-6 text-xl md:text-2xl lg:text-3xl'>BY OVER</h3>
          </div>
          <div className='text-[#ffffff]'>
            <p className='text-xl md:text-2xl lg:3xl'>Proudly Serving for 20 Years with Precision and Excellence</p>
          </div>
            <button className='button mt-8 '><Link>Discover</Link></button>
          </div>
        <div className='h-4'>
      </div>
    </div>
  )
}

export default Home

