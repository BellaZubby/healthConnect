import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'


type Props = {
    children:ReactNode
}

const SubText = ({children}: Props) => {
  return (
    <motion.h3 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{
      duration:0.5,
      delay:0.1
    }}
    className='text-lg font-bold  text-primary-200'>{children}</motion.h3>
  )
}

export default SubText