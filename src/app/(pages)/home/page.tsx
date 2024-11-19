"use client"
import AboutSection from '@/app/components/aboutSection'
import Benefactors from '@/app/components/benefactors'
import Benefits from '@/app/components/benefits'
import HeroSection from '@/app/components/heroSection'
import MobileBenefactors from '@/app/components/mobileBenefactors'
import MobileParallex from '@/app/components/mobileParallex'
import Parallex from '@/app/components/parallex'
import Partners from '@/app/components/partners'
import ServicesSection from '@/app/components/servicesSection/servicesSection'
import useMediaQuery from '@/hook/useMediaQuery'
import React from 'react'


const HomePage = () => {
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <div className='w-full'>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <Benefits/>
      {
        aboveMediumScreen ? (<Benefactors/>) : (<MobileBenefactors/>)
      }
      <Partners/>
      {
        aboveMediumScreen ? (<Parallex/>) : (<MobileParallex/>)
      }
    </div>
  )
}

export default HomePage