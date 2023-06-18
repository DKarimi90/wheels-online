
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsChevronCompactRight, BsChevronCompactLeft, BsClock } from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
import {GiOpenPalm, GiGearStickPattern, GiClockwork} from 'react-icons/gi'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare} from 'react-icons/fa'


const Details = () => {
  const { id } = useParams();
  const [car, setCar] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3005/cars/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCar(data);
      });
  }, [id]);


  const prevCar = () => {
    const newIndex = (currentIndex + car.image_url.length - 1) % car.image_url.length;
    setCurrentIndex(newIndex);
  };

  const nextCar = () => {
    const newIndex = (currentIndex + 1) % car.image_url.length;
    setCurrentIndex(newIndex);
  };

  const goToNextCar = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='w-full h-full grid lg:grid-cols-5 bg-gray-100'>
    <div className='col-span-1'>
  
    </div>

    <div key={car.id} className="w-full max-w-[1000px] mx-auto mt-44 flex flex-col items-center px-2 lg:col-span-3 bg-white pt-4">
      <div className='flex justify-between w-full'>
         <p className='text-2xl'>{car.name}</p>
         <Link className='bg-gray-200 px-5 py-1 rounded mb-4 hover:bg-gray-100' to="/shop">All Cars</Link>
      </div>
      <div className="relative group">
        <img src={car && car.image_url[currentIndex]} alt="name"/>
        <div onClick={nextCar} className="absolute right-5 top-1/2 bg-gray-200 p-2 rounded-full hidden group-hover:block">
          <BsChevronCompactRight size={30} />
        </div>
        <div onClick={prevCar} className="absolute left-5 top-1/2 bg-gray-200 p-2 rounded-full hidden group-hover:block">
          <BsChevronCompactLeft size={30} />
        </div>
            <div className="flex justify-center mt-4">
                {car.image_url &&
                    car.image_url.map((imageUrl, index) => (
                    <div key={index} className="mr-2 cursor-pointer">
                        <img
                        src={imageUrl}
                        alt={`thumbnail-${index}`}
                        onClick={() => goToNextCar(index)}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                        />
                </div>
                ))}
            </div>
              <Link to="/shop" className='button w-full mt-4 flex justify-center'><button >Back</button></Link>
              <div className='border-b'>
                  <p className='extra mt-4 font-bold text-2xl'>{car.name}</p>
                  <div className='flex justify-between mt-6'>
                    <div className='flex'>
                      <p className='extra'>{car.status}</p>
                      <div>
                        <p className='extra flex items-center'><BsClock size={18} className="mr-2"/>{car.time}</p>
                      </div>
                      <div>
                        <p className='extra flex items-center'><CiLocationOn size={25} className="mr-2"/>{car.location}</p>
                      </div>
                    </div>
                    <div lassName='extra flex items-center'>
                      <p><GrView />{car.views}</p>
                    </div>
                  </div>
              </div>
              <div className='flex border-b '>
                <div className='my-6 px-4'>
                  <div><GiOpenPalm size={40}/></div>
                    <p className='mt-5 text-xs md-sm lg:md'>{car.used}</p>
                </div>
                <div className='my-6 px-4'>
                  <div><GiGearStickPattern size={40}/></div>
                    <p className='mt-5 text-xs md-sm lg:md'>{car.transmission}</p>
                </div>
                <div className='my-6 px-4'>
                  <div><GiClockwork size={40}/></div>
                    <p className='mt-5 text-xs md-sm lg:md'>{car.mileage}</p>
                </div>
              </div>
              <div className='grid grid-cols-2 border-b mb-2 text-xs md:text-sm lg:text-md'>
                <div className='flex flex-col'>
                  <div className='my-3'>
                      <h3 className='font-semibold'>{car.model}</h3>
                      <p className='text-gray-400'>MODEL</p>
                  </div>
                  <div className='my-3'>
                      <h3 className='font-semibold'>{car.color}</h3>
                      <p className='text-gray-400'>COLOR</p>
                  </div>
                  <div className='my-3'>
                      <h3 className='font-semibold'>{car.year}</h3>
                      <p className='text-gray-400'>YEAR</p>
                  </div>
                </div>
                <div>
                  <div>
                  <div className='my-3'>
                      <h3 className='font-semibold'>{car.seats}</h3>
                      <p className='text-gray-400'>SEATS</p>
                  </div>
                  <div className='my-3'>
                      <h3 className='font-semibold'>{car.interior}</h3>
                      <p className='text-gray-400'>INTERIOR</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className='border-b flex mb-4 pb-3'>
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
                  <Link to="https://web.whatsapp.com/" target="_blank"><FaWhatsappSquare size={40} className="text-green-700 icons"/></Link>
                </div>
              </div>
              <div className='mb-4 border-b pb-4'>
                <Link to="purchase"><button className='button' onClick={() => window.scrollTo(0, 0)}>Make an Offer</button></Link>
              </div>
            </div>
          </div>
          <div className='col-span-1 lg:mt-56 px-3 flex flex-col text-center md:text-left  m-2 rounded'>
              <h1 className='text-xl lg:text-3xl font-semibold px-4'>Additional Details:</h1>
            <div className=''>
            <p className='car-details text-sm md:text-xl lg:text-sm xl:text-2xl group-details'>Price: {car.price}</p>
              <div className='px-6 py-2 group-details'>
                <h2 className='font-bold '>Safety Tips:</h2>
                <ul className='list-disc text-justify text-sm md:text-xl '>
                  <li>Remember, don't send any pre-payments</li>
                  <li>Meet the seller at a safe public place</li>
                  <li>Inspect the goods to make sure they meet your needs</li>
                  <li>Check all documentation and only pay if you're satisfied </li>
                </ul>
              </div>
              <div className='group-details'>
                <Link to="https://web.whatsapp.com/" target="_blank"><p className='car-details text-sm md:text-xl lg:text-sm xl:text-2xl bg-green-500 text-[var(--default)] hover:bg-green-400'>Whatsapp</p></Link>
                  <div className='flex justify-center '>OR</div>
                <p className='px-2 my-3 text-center text-sm md:text-xl lg:text-sm xl:text-2xl'>Call: +254-113-312-554</p>
              </div>
              <div className='px-2 py-2 bg-white hover:bg-gray-100'>
                <div className=" border border-[var(--primary2)] px-22 py-2"><h1 className='px-3 w-full flex justify-between font-bold text-[var(--primary2)]'>Feedback<Link to="/oops" className='font-medium'>View All</Link></h1></div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Details;
