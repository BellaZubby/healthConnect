import Link from 'next/link';
import React from 'react'

type Props = {
    href: string;
    name: string;
}

const Button = ({href, name}: Props) => {
  return (
    <Link href={href}>
        <button className='bg-white mt-10 px-5 py-3 text-lg font-semibold Btn text-primary-200'>
            {name}
        </button>
    </Link>
  
  )
}

export default Button