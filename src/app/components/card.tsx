import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode
    title: string;
    description: string;
    className: string;
}

const Card = ({children, title, description, className}: Props) => {
  return (
    < div className='border border-primary-100 shadow-lg flex flex-col items-center gap-3 justify-center md:px-6 md:py-7 ssm:px-6 ssm:py-20 px-6 py-7 bg-white rounded-md'>
        <span className={className}>{children}</span>
        <h3 className='text-primary-100 text-lg font-bold'>{title}</h3>
        <p className='text-sm text-gray-600 text-center'>{description}</p>
    </div>
  )
}

export default Card