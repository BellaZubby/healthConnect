import Image from 'next/image'
import React from 'react'
import image from '@/app/assets/parallex.jpg'
import Link from 'next/link'


const MobileParallex = () => {
  return (
    <div className='py-16 sm:pt-10 sm:pb-32 sm:px-10 relative w-full md:hidden'>
    <div className='w-full md:w-[95%] md:mx-auto relative overflow-x-hidden'>
    <Image src={image} alt='factImage' className='h-80 object-cover'/>
    <div className='bg-black/65 absolute inset-0 flex flex-col items-center justify-center gap-5'>
      <h4 className='text-secondary-300 text-lg font-semibold text-center text-white'>Healthcare Made Easy, With <span className='text-primary-50 text-2xl'>HEALTHCONNECT</span></h4>
    <Link href={'/contactus'} className='button border-2 border-primary-100 text-[16px] md:text-lg font-semibold text-white tracking-wider px-7 py-2'>
      <button>Get Started Today!</button>
    </Link>
    </div>
    </div>
    
  </div>
  )
}

export default MobileParallex