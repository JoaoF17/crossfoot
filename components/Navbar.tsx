import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween padding-container relative z-30 py-0 bg-gray-50'>
      <Link href="/" className='flex overflow-auto'>
        <Image src="/logo.png" alt='logo' width="130" height="50"/>
        <Image src="/crop-footfit.png" alt='logo' className='hidden md:block' width="200" height="100"/>
      </Link>
      <Link href="/">
        
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link)=>(
          <li key={link.key} className="relative group h-full">
            <Link href={link.href} key={link.key} className='regular-20 text-black-50 flexCenter cursor-pointer pb-1.5 transiction-all hover:text-yellow-50 hover:font-bold '>
              {link.label}
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-50 group-hover:w-full transition-all"></div>
          </li>
        ))}
        
      </ul>
      {/* TODO: Mobile menu */}
      <div className='inline-block cursor-pointer lg:hidden'>
        <Image
          src="/menu.png"
          alt='menu'
          width={32}
          height={32}
          
        />  
        <ul>
          {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className='regular-20 text-yellow-50 flexCenter cursor-pointer pb-1.5 transiction-all hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>    

    </nav>
  )
}

export default Navbar