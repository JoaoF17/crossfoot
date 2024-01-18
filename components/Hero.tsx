import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative h-[70vh] overflow-hidden w-full flex flex-col'>
      
      <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
        <source src='/hero-vid.mp4' type="video/mp4"/>
      </video>

      <div className='absolute top-0 left-0 w-full h-full flex bg-white bg-opacity-20 flex-col justify-center items-start pl-20'>
        <h1 className='text-gray-50 text-5xl font-bold mb-8'>Unleash Your Game</h1>
        <p className='text-gray-50 text-3xl mb-8'>Elevate every move, conquer the field.</p>
        <Button
          type='button'
          title='Get in Touch!'
          variant='btn_yellow'
          href='https://wa.me/message/VX34NMUBK6NMD1'
        />
      </div>
      
    </section>
  )
}

export default Hero