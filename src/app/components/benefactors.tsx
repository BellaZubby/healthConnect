import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/corporate.jpg'
import image2 from '@/app/assets/volunteer.jpg'
import image3 from '@/app/assets/ruralCommunity.jpg'
import image4 from '@/app/assets/medicalTeam.jpg'
import image5 from '@/app/assets/partners.jpg'
import image6 from '@/app/assets/patients.jpg'
import HyperText from './hyperText'
import SubText from './subText'


const Benefactors = () => {
  return (
    <div className='py-20 bg-gray-100'>
         <div className="flex flex-col items-center justify-center">
          <SubText>Who We Serve</SubText>
          <HyperText>Our Benefactors</HyperText>
        </div>
          <div className='w-[85%] mx-auto hidden md:block mt-20'>
         <motion.div 
         className='relative'
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
         >
            <Image src={image6} alt='residential' className='w-[420px] h-[300px] object-cover ml-[9rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[9rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white'>Patients</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute left-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
            </div>
            </div>
           
         </motion.div>
         {/* second service */}
         <motion.div 
         className='mt-16 relative'
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
            transition={{duration:0.5}}
         >
            <Image src={image3} alt='renovation' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white'>Underserved Communities</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
            </div>
            </div>
        </motion.div>
        {/* third service */}
        <motion.div 
        className='mt-16 relative'
        initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
        >
            <Image src={image4} alt='designing' className='w-[420px] h-[300px] object-cover ml-[9rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[9rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white'>Healthcare Professionals</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute left-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
            </div>
            </div>
            </motion.div>
           {/* fourth service */}
           <motion.div 
           className='mt-16 relative'
           initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
           >
            <Image src={image5} alt='Consultancy' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white'>Partners</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-3 items-center justify-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               
            </div>
            </div>
        </motion.div>
         {/* fifth service */}
         <motion.div 
           className='mt-16 relative'
           initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
           >
            <Image src={image1} alt='Consultancy' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white'>Corporate Organizations</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-3 items-center justify-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               
            </div>
            </div>
        </motion.div>
         {/* sixth service */}
         <motion.div 
           className='mt-16 relative'
           initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
           >
            <Image src={image2} alt='Consultancy' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-2xl font-bold text-white flex flex-col items-center justify-center'>
                <span>Volunteer/</span>
                <span>Religious Organizations</span>
            </h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-3 items-center justify-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               
            </div>
            </div>
        </motion.div>
         </div>
      </div>
  )
}

export default Benefactors