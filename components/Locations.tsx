import Image from 'next/image'
import React from 'react'

const Locations = () => {
  return (
    <section className='border-2 mt-4' id='locations'>
      <div className="p-8 md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">Come Have Fun With Us</h1>
        <p className="mb-4">
          Brand new pitches with state-of-the-art fitness equipment, all conveniently located near you.
        </p>
        <div className='flex flex-row gap-10'>
          <div className="rounded-xl bg-yellow-50 text-white flex flex-col justify-center items-center p-8 md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Kicck Arena</h2>
            <button className="bg-white text-yellow-50 font-semibold py-2 px-4 rounded">
              View Location
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Image src="/kicck-arena.jpeg" alt='kicck arena' className='rounded-xl' width="330" height="150"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations