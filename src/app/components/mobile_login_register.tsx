import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'


const Mobile_Login_register = () => {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <>
         <button
       onClick={() => setIsToggled(!isToggled)}
       className='text-lg font-bold sm:text-xl ssm:px-10 bg-primary-100 ml-7 px-5 py-3 text-primary-50 cursor-pointer'
    >
        Login
    </button>
    <AnimatePresence>
    {
        isToggled && 
        <motion.div
        className='flex flex-col gap-10 bg-gray-50 ssm:w-[350px] w-[250px]
                px-3 py-10 rounded-md shadow-md ssm:ml-10 mx-auto mt-5'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
        >
            <Link href={'/login_healthcare_professional'} className='shadow-lg p-4 mx-5 bg-primary-50 text-[16px] font-semibold text-gray-600'>As Healthcare Professional</Link>
            <Link href={'/login_patient'} className='shadow-lg p-4 mx-5 bg-primary-50 text-[16px] font-semibold text-gray-600'>As Patient</Link>
            
        </motion.div>
    }
    </AnimatePresence>
  
    </>
   
  )
}

export default Mobile_Login_register