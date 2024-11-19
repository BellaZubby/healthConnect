import React from 'react'
import about from '@/app/assets/abtPhoto.jpg'
import Image from 'next/image'
import Button from './button'
import SubText from './subText'
import HyperText from './hyperText'
import { motion } from 'framer-motion'
import { fadeIn, slideInFromLeft, slideInFromRight } from '@/hook/motion'


const AboutSection = () => {
  return (
    <div className='w-full overflow-hidden relative bg-gradient-primary-100'>
        <div className='grid md:grid-cols-2 items-center md:mt-40 md:py-20 md:w-5/6 mx-auto md:gap-20 mt-20'>
        <motion.div 
        variants={slideInFromLeft(0.2)}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
        className='relative'>
         <Image src={about} alt="about-image" className='md:w-[550px] md:h-[600px] w-[600px] h-[500px] object-cover rounded-xl hidden md:block'/>
        </motion.div>
            
        <motion.div 
         variants={slideInFromRight(0.2)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true}}
        className='flex flex-col items-center justify-center md:items-start md:justify-start mx-4'>
            <SubText>Who We Are</SubText>
            <HyperText>About HealthConnect Telemedicine</HyperText>
            <p className='max-w-xl tracking-wide mt-5 leading-relaxed text-center md:text-left text-lg'>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Quasi, provident! Numquam aut 
                id a cum facere! Ducimus distinctio corporis iure 
                sit. Molestiae odit quod soluta 
                voluptates dolore tempora atque assumenda!</p>

                <Button name='Learn More' href='/about_us'/>
        </motion.div>
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:true}}
        className='relative z-[100px] py-10 mx-4'>
         <Image src={about} alt="about-image" className='w-[600px] h-[500px] mx-auto object-cover rounded-xl block md:hidden'/>
        </motion.div>
        
    </div>
    <div className='stripe w-72 h-72 rounded-full absolute bottom-[-50px] right-[-90px] hidden md:block'/>
    </div>
    
  )
}

export default AboutSection