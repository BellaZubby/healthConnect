import { partnersData } from '@/hook/data'
import { motion } from 'framer-motion'
import React from 'react'
import PartnersDataProvider from './partnersDataProvider'
import HyperText from './hyperText'
import SubText from './subText'
import Button from './button'



const Partners = () => {
  return (
             <div className="relative grid md:grid-cols-2 gap-10 py-16 px-10">
    <div>
        <div className="flex flex-col items-center md:items-start justify-center">
          <SubText>Who We Work With</SubText>
          <HyperText>Our Partners</HyperText>
        </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-5 text-justify font-roboto tracking-wider text-lg"
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facere. Adipisicing elit. Suscipit, facere.
      </motion.p>
     <Button href={'/'} name='Meet Our Partners'/>
    </div>
    <div className="grid ssm:grid-cols-4 grid-cols-3 gap-6">
      {partnersData.map((skill, i) => (
        <PartnersDataProvider
          key={i}
          index={skill.index}
          src={skill.image}
        />
      ))}
    </div>
  
    </div>
   
  )
}

export default Partners


