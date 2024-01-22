import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <section className='mb-4'>
      <div className='mt-6 flex flex-col sm:flex-row justify-center gap-4 items-center mx-auto w-[85%] pb-4'>
        <div className='relative w-full sm:w-[33%] h-[33vh]'>
          <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
          <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
            <h1 className='text-5xl mb-4'>Title 1</h1>
            <p className='text-2xl'>Text for image 1</p>
          </div>
        </div>

        <div className='relative w-full sm:w-[33%] h-[33vh]'>
          <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
          <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
            <h1 className='text-5xl mb-4'>Title 1</h1>
            <p>Text for image 1</p>
          </div>
        </div>

        <div className='relative w-full sm:w-[33%] h-[33vh]'>
          <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
          <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
            <h1 className='text-5xl mb-4'>Title 1</h1>
            <p>Text for image 1</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-[85%] min-h-[50vh] justify-center mx-auto items-center">
        <div className="flex flex-col justify-center items-center w-full mb-2 sm:w-1/2 sm:items-start sm:mr-10 p-8 bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">BE THE BEST<br></br> VERSION OF YOURSELF!</h1>
          <p className="text-xl text-gray-600 mb-6">Prioritize your health, move, socialize and grow.</p>
          <button className="bg-yellow-50 text-white py-2 px-4 rounded">Discover Our Membership Plans</button>
        </div>
        <div className="w-full sm:w-1/2">
          <img src="/workout1.jpeg" alt="Fitness" className="w-full h-auto sm:h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Intro