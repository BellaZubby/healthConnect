import Image from 'next/image'
import image1 from '@/app/assets/corporate.jpg'
import image2 from '@/app/assets/volunteer.jpg'
import image3 from '@/app/assets/ruralCommunity.jpg'
import image4 from '@/app/assets/medicalTeam.jpg'
import image5 from '@/app/assets/partners.jpg'
import image6 from '@/app/assets/patients.jpg'
import { motion } from 'framer-motion'
import HyperText from './hyperText'
import SubText from './subText'


const MobileBenefactors= () => {
  return (
    <div className='py-20 bg-gradient-primary-100 font-roboto md:hidden bg-gray-100'>
        <div className="flex flex-col items-center justify-center">
          <SubText>Who We Serve</SubText>
          <HyperText>Our Benefactors</HyperText>
        </div>
       <div className='mt-20 grid grid-cols-1 ssm:grid-cols-2 gap-7 px-3'>
       <motion.div 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.5}}
       className='relative'>
                <Image src={image6} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
              initial={{rotateY:0}}
              whileInView={{rotateY:360}}
              transition={{duration:1, delay:0.2}}
              viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Patients</motion.h6>
              <motion.p
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               viewport={{once:true}}
               transition={{duration:0.5, delay:1}}
                className='text-[16px] ssm:text-lg mb-5 tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
            {/* second */}
            <motion.div 
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image3} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}} 
              className='text-xl xs:text-2xl mb-5 font-bold'>Underserved Communities</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                 className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
            {/* third */}
            <motion.div 
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image4} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Healthcare Professional</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                 className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
            {/* fourth */}
            <motion.div 
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image5} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Partners</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
             {/* fifth */}
             <motion.div 
            //  className='mt-16 relative'
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image1} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Corporate Organizations</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
             {/* sixth */}
             <motion.div 
            //  className='mt-16 relative'
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image2} alt='residential' className='mx-auto h-60 object-cover'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Volunteer/Religious Organizations</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
          </div>
             
         </div>
            </motion.div>
       </div>
      
    </div>
  )
}

export default MobileBenefactors