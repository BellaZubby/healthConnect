import React from 'react'
import { benefits } from '@/hook/data'


const BenefitsData = () => {
  return (
    <div className='flex flex-col gap-7'>
        {
            benefits.map((data, idx) => (
                <div key={idx} className='flex items-center gap-10'>
                <div className='rounded-lg shadow-lg p-3'>
                    <data.icon className='text-primary-100 w-10 h-10'/>
                </div>
                <div>
                    <h3 className='text-primary-100 font-bold text-lg'>{data.title}</h3>
                    <p className='mt-1'>{data.details}</p>
                </div>
                </div>
            ))
        }
       
    </div>
  )
}

export default BenefitsData