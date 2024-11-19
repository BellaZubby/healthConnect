import { slideInFromLeft, slideInFromRight, fadeIn } from '@/hook/motion'
import { motion } from 'framer-motion'
import React from 'react'
import HyperText from './hyperText'
import SubText from './subText'
import Image from 'next/image'
import image from '@/app/assets/femaleDoctor.jpg'
import BenefitsData from './benefitsComponent'


const Benefits = () => {
  return (
    <div className='w-full overflow-hidden relative'>
    <div className='grid md:grid-cols-2 items-center md:mt-40 md:py-20 md:w-5/6 mx-auto md:gap-20 mt-20'>
   
    <motion.div 
     variants={slideInFromLeft(0.2)}
     initial='hidden'
     whileInView='visible'
     viewport={{once:true}}
    className='flex flex-col items-center justify-center md:items-start md:justify-start mx-4'>
        <SubText>Why Choose Us</SubText>
        <HyperText>Your Benefits</HyperText>
        <p className='max-w-xl tracking-wide mt-5 leading-relaxed text-center md:text-left ssm:text-lg'>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Quasi, provident! Numquam aut 
            id a cum facere! Ducimus distinctio corporis iure</p>

            <div className='mt-7 md:mt-0'>
               <BenefitsData/> 
            </div>

    </motion.div>
    <motion.div 
    variants={slideInFromRight(0.2)}
    initial='hidden'
    whileInView='visible'
    viewport={{once:true}}
    className='relative'>
     <Image src={image} alt="about-image" className='md:w-[550px] md:h-[600px] w-[600px] h-[500px] object-cover rounded-xl hidden md:block'/>
    </motion.div>
        
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className='relative z-[100px] py-10 mx-4 mt-7'>
     <Image src={image} alt="about-image" className='w-[600px] h-[500px] mx-auto object-cover rounded-xl block md:hidden'/>
    </motion.div>
    
</div>
<div className='stripe-new w-72 h-72 rounded-full absolute bottom-[-50px] right-[-90px] hidden md:block'/>
</div>
  )
}

export default Benefits