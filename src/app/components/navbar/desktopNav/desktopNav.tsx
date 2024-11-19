import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/healthConnectImage.jpeg'
import Link from 'next/link'
import HomeLink from './links/homeLink'
import AboutLink from './links/aboutLink'
import ServicesLink from './links/servicesLink'
import PartnersLink from './links/partnersLink'
import BlogLink from './links/blogLink'
import ContactLink from './links/contactLink'
import Login_register from '../../login_register'

type Props = {
    isTopOfPage: boolean;
}



const DesktopNav = ({isTopOfPage}: Props) => {
  return (
       <div className={`px-10 w-full fixed top-0 z-50 ${isTopOfPage ? 'bg-transparent py-10':'bg-primary-50/50 py-5 shadow-md'}`}>
            <div className='flex items-center justify-evenly'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image src={logo} alt='HC-logo' className='w-20 h-20 object-cover' priority/>
                <div className='flex flex-col items-center text-primary-100 font-semibold text-lg'>
                    <span>HealthConnect</span>
                    <span>Telemedicine</span>
                </div>
            </Link>
            <div className='flex items-center gap-6 text-[16px] font-semibold'>
               <HomeLink/>
               <AboutLink/>
               <ServicesLink/>
               <PartnersLink/>
               <BlogLink/>
               <ContactLink/>
            </div>
            <div>
                <Login_register/>
            </div>
        </div>
       </div>
        
  )
}

export default DesktopNav