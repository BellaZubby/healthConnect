"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'



const HomeLink = () => {
  const pathname = usePathname();
  const isActive = (path:string) => path === pathname;
    const [hover, setIsHover] = useState(false)
    const title = "home"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div
    onMouseEnter={() =>setIsHover(true)}
    onMouseLeave={() =>setIsHover(!hover)}
    >
        <Link 
         className={`${isActive("/") ? "text-primary-100 relative": "relative"} transition duration-300 hover:text-primary-100`} href={"/"}>
            {titleUpperCase}
            <span className={`${isActive("/") ? "inline-block w-10 h-[1.5px] bg-primary-100 absolute bottom-0 left-1/2 -translate-x-1/2":"hidden"}`}/>
        </Link>
        </div>
  )
}

export default HomeLink