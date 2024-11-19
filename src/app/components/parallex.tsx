import React from 'react'
import Link from 'next/link'



const Parallex = () => {
  return (
    <div className='hidden md:block py-16'>

    <div className="bg-parallex w-5/6 mx-auto h-[400px] bg-cover bg-fixed bg-no-repeat bg-center rounded-lg">
    <div className='bg-black/70 w-full rounded-lg h-full inset-0 flex flex-col items-center justify-center gap-5'>
                <h4 className='text-secondary-300 text-xl font-semibold text-center text-white'>Healthcare Made Easy, With <span className='text-primary-50 text-4xl'>HEALTHCONNECT</span></h4>
              <Link href={'/contactus'} className='button border-2 border-primary-100 text-sm md:text-lg font-semibold text-white tracking-wider px-12 py-2'>
                <button>Get Started Today!</button>
              </Link>
              </div>
            
              </div>
    
    </div>
  )
}

export default Parallex