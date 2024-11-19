import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const Login_register = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
         <div
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
         className='button text-primary-100 font-bold border border-primary-100 py-3 relative cursor-pointer flex items-center justify-center gap-1 w-[150px]'
    >
        Login
        {isHovered ? (
          <FaChevronUp className="w-4 h-4 mt-1"/>
        ) : (
          <FaChevronDown className="w-4 h-4 mt-1"/>
        )}
        <AnimatePresence>
    {
        isHovered && 
        <motion.div
        className="absolute z-[999] top-10 left-[-100%] flex flex-col gap-10 bg-gray-50
        py-5 shadow-md mt-5 w-[300px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
        >
            <Link href={'/login_healthcare_professional'} className='shadow-lg px-4 py-2 mx-5 bg-primary-50 text-lg font-bold text-gray-600 transition duration-300 hover:text-primary-100'>As Healthcare Professional</Link>
            <Link href={'/login_patient'} className='shadow-lg px-4 py-2 mx-5 bg-primary-50 text-lg font-bold text-gray-600 transition duration-300 hover:text-primary-100'>As Patient</Link>
            
        </motion.div>
    }
    </AnimatePresence>
  
    </div>
   
  )
}

export default Login_register