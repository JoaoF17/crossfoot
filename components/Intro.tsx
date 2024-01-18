import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <section>
      <div className='mt-6 flex justify-center gap-4 items-center mx-auto w-[85%]'>

      <div className='relative h-[33vh] w-[33%]'>
        <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
        <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
          <h1 className='text-5xl mb-4'>Title 1</h1>
          <p className='text-2xl'>Text for image 1</p>
        </div>
      </div>

      <div className='relative h-[33vh] w-[33%]'>
        <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
        <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
          <h1 className='text-5xl mb-4'>Title 1</h1>
          <p>Text for image 1</p>
        </div>
      </div>

      <div className='relative h-[33vh] w-[33%]'>
        <Image src="/workout1.jpeg" alt='image 1' className='h-full w-full object-cover' width="100" height="100"/>
        <div className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 text-gray-50 flex flex-col justify-center items-start pl-8 font-bold'>
          <h1 className='text-5xl mb-4'>Title 1</h1>
          <p>Text for image 1</p>
        </div>
      </div>
        
        

      </div>
    </section>
  )
}

export default Intro