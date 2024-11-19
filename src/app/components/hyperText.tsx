import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const HyperText = ({children}: Props) => {
  return (
    <motion.h1
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{
      duration:0.5,
      delay:0.2
    }} 
    className='ssm:text-4xl text-3xl text-center md:text-left font-semibold text-primary-100 tracking-wide mt-2'>{children}</motion.h1>
  )
}

export default HyperText