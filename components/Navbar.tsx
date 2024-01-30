"use client"

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flexBetween padding-container relative z-30 py-0 bg-gray-50'>
      <Link href="/" className='flex overflow-auto'>
        <Image src="/logo.png" alt='logo' width="130" height="50"/>
        <Image src="/crossfut.png" alt='logo' className='hidden md:block' width="230" height="100"/>
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
      {/* Mobile Menu Toggle */}
      <div className='inline-block cursor-pointer lg:hidden' onClick={toggleMobileMenu}>
        <Image src="/menu.png" alt='menu' width={32} height={32} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className='absolute top-full left-0 right-0 bg-gray-50 flex flex-col items-center lg:hidden'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='w-full'>
              <Link href={link.href} className='regular-20 text-yellow-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold block w-full text-center'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>   
      )}
    </nav>
  )
}

export default Navbar