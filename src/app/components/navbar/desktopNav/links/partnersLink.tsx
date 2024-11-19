"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'


const PartnersLink = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const [hover, setIsHover] = useState(false)
    const title = "partners"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div  
    onMouseEnter={() =>setIsHover(true)}
    onMouseLeave={() =>setIsHover(!hover)}>
        <Link className={`${isActive("/partners") ? "text-primary-100 relative": "relative"} transition duration-300 hover:text-primary-100`} href={"/partners"}>{titleUpperCase}
        <span className={`${isActive("/partners") ? "inline-block w-10 h-[1.5px] bg-primary-100 absolute bottom-0 left-1/2 -translate-x-1/2":"hidden"}`}/>
        </Link>
    </div>
  )
}

export default PartnersLink