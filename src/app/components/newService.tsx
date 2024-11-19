import React from 'react'
import Card from './card'
import image from '@/app/assets/hcImage.png'
import { motion } from 'framer-motion';
import { FaBrain, FaFileMedical, FaLaptopMedical, FaRobot, FaVideo } from 'react-icons/fa';
import { FaHouseMedical, FaPrescriptionBottleMedical } from 'react-icons/fa6';




const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
  
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

const NewService = () => {
  return (
    <motion.div 
        initial="hidden"
        animate="hidden"
        whileInView='visible'
        viewport={{once:true}}
        transition={{ staggerChildren: 0.5 }}
    className='flex flex-col items-center gap-10 mt-20'>
       <div className='grid md:grid-cols-3 grid-cols-1 justify-center gap-5 items-center md:mx-40 mx-10 ssm:mx-20'>
        <motion.div variants={defaultAnimation}>
        <Card title={'Video Consultation'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-blue-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaVideo className='w-8 h-8'/></Card>
        </motion.div>
       <motion.div variants={defaultAnimation}>
       <Card title={'Electronic Health Records'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-green-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaFileMedical className='w-8 h-8'/></Card>
        </motion.div> 
       <motion.div variants={defaultAnimation}>
       <Card title={'Instant Messaging and Chat'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-red-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaLaptopMedical className='w-8 h-8'/></Card>
        </motion.div> 
       </div>
       <div className='md:max-w-[295px] md:mx-auto mx-10 ssm:mx-20'>
            <motion.div variants={defaultAnimation}>
                <Card title={'Remote Monitoring'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-cyan-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaHouseMedical className='w-8 h-8'/></Card>
            </motion.div>
        </div> 

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-40 ssm:mx-20 mx-10'>
            <motion.div variants={defaultAnimation}>
            <Card title={'Prescription Services'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-purple-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaPrescriptionBottleMedical className='w-8 h-8'/></Card>
            </motion.div>
            <motion.div variants={defaultAnimation}>
            <Card title={'Mental Health Support'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-yellow-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaBrain className='w-8 h-8'/></Card>
            </motion.div>
            <motion.div variants={defaultAnimation}>
            <Card  title={'Ai and Data Analytics'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum velit quos fugit ipsum necessitatibus.'} className={'bg-orange-500/80 rounded-full w-16 h-16 flex items-center justify-center'}><FaRobot className='w-8 h-8'/></Card>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default NewService