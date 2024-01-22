import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Trainings = () => {
  return (
    <section className='border-2 border-red-500 flex-col felxCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-18'>
      <div className='flex mx-auto w-[85%] relative justify-end'>
        <div className='flex flex-1 mb-[-10px] lg:min-h-[400px]'>
          <Image 
            src='/player.png'
            alt='player'
            width={500}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image 
              src='/football.png'
              alt='techniche'
              width={50}
              height={50}
              className='absolute right-1 top-1 lg:right-[230px] lg:top-[10px] w-10 lg:w-[55px]'
            />
            <h2 className='bold-40 lg:bold-64'>What We Train</h2>
          </div>
          <ul className='mt-10 grid gap-10 pb-2 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string
}

const FeatureItem = ({title, icon, description}: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-yellow-50'>
        <Image 
          src={icon}
          alt='map'
          width={15}
          height={15}
        />
      </div>
      <h2 className='bold-20 lg:bold-30 mt-4 capitalize'>
        {title}
      </h2>
      <p className='regular-14 mt-5 bg-white/80 text-gray-30 lg:mt-[15px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Trainings