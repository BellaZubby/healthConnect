"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  closeMenu:() => void;
}

const MobileContactLink = ({closeMenu}: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const title = "contact_us"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div >
        <Link onClick={closeMenu} className={`${isActive("/contact_us") ? "text-primary-100 relative": "relative"} transition duration-300 hover:text-primary-100`}  href={"/contact_us"}>{titleUpperCase}
        </Link>
    </div>
  )
}

export default MobileContactLink