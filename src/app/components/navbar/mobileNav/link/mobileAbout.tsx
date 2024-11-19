"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  closeMenu:any;
}

const MobileAboutLink = ({closeMenu}: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const title = "about us"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div >
        <Link onClick={closeMenu} className={`${isActive("/about_us") ? "text-primary-100 relative": "relative"} transition duration-300 hover:text-primary-100`}  href={"/about_us"}>{titleUpperCase}
        </Link>
    </div>
  )
}

export default MobileAboutLink