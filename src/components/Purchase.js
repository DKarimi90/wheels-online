import React from 'react'
import { Link } from 'react-router-dom'

const Purchase = () => {
  return (
    <div className='w-full h-screen'>
        <div className=' w-full max-w-[800px] mx-auto flex flex-col items-center text-center pt-32 h-[140vh]'>
        <form action="https://getform.io/f/921232b8-36c6-47eb-9946-5af2b6f3ae05" method="POST">
                <div>
                    <h1 className='uppercase py-6'>Thank you for your interest in our Product</h1>
                    <p className='font-semibold pb-6'>We will surely Get Back!</p>
                </div>
                <div className='flex flex-col'>
                    <label for="email">NAME:</label>
                    <input className='mb-10 mt-2 border px-2 py-1 text-center' type="text" id="fullName" name="fullName" placeholder="Full Names" required/>
                    <label for="email">EMAIL:</label>
                    <input className='mb-10 mt-2 border px-2 py-1 text-center' type="email" id="email" name="email" placeholder="Provide Email" required/>
                    <label for="enquiry">MORE DETAILS:</label>
                    <textarea className='mb-10 mt-2 border px-4' type="text" id="details" name="details" rows={7}></textarea>
                    <button className='button mt-6'>Submit</button>
                </div> 
            </form>
            <button className='button w-full mt-6'><Link to="/shop">Back</Link></button>
        </div>
    </div>

  )
}

export default Purchase