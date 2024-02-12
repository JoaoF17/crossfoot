import Image from 'next/image'
import React from 'react'

const Locations = () => {
  return (
    <section className='mt-4' id='locations'>
      <div className="text-center p-8 md: mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Come Have Fun With Us</h1>
        <p className="mb-4 text-center">
          Brand new pitches with state-of-the-art fitness equipment, all conveniently located near you.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-5'>
          <div className="rounded-xl bg-yellow-50 text-black flex flex-col justify-center items-center p-8 w-full md:w-1/3" style={{ maxWidth: '100%', height: '30vw' }}>
            <h2 className="text-3xl font-bold mb-4">Kicck Arena</h2>
            <button className="bg-white text-yellow-50 font-semibold py-2 px-4 rounded">
              View Location
            </button>
          </div>
          <div className="relative w-full md:w-1/3" style={{ maxWidth: '100%', height: '30vw', minHeight: '250px' }}>
            <Image src="/kicck-arena.jpeg" alt='kicck arena' className='rounded-xl' layout='fill' objectFit='cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations