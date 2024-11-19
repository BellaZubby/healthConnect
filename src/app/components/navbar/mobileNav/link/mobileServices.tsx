"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

type Props = {
    href: string;
    title: string; 
 }

 type closeMenuType = {
  closeMenu : any
}
  const services: Array<Props> = [
    {
        title: "Video Consultation",
        href: "/video_consultation"
    },
    {
        title: "Electronic Health Records (EHR)",
        href: "/electronic_health_records"
    },
    {
        title: "Instant Messaging and Chat",
        href: "/instant_messaging_and_chat"
    },
    {
        title: "Remote Monitoring",
        href: "/remote_monitoring"
    },
    {
        title: "Prescription Services",
        href: "/prescription_services"
    },
    {
        title: "Mental Health Support",
        href: "/mental_health_support"
    },
    {
        title: "AI and Data Analytics",
        href: "/ai_and_data_analytics"
    },
  ];
  

const MobileServicesLink = ({closeMenu}:closeMenuType) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const [isToggled, setIsToggled] = useState(false);
    const title = "services"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);

    const closeMobileMenu = () => {
      setIsToggled(false);
      closeMenu()
    }

  return (
    <div>

        <li
          className={`
             ${isActive("/video_consultation") ||
            isActive("/electronic_health_records") ||
            isActive("/instant_messaging_and_chat") ||
            isActive("/remote_monitoring") ||
            isActive("/prescription_services") ||
            isActive("/mental_health_support") ||
            isActive("/ai_and_data_analytics")
              ? "text-primary-150"
              : ""}
             flex items-center gap-2 transition duration-300 hover:text-primary-150 cursor-pointer
             ${isToggled ? "text-primary-150":""}
          `}
          onClick={()=>setIsToggled(!isToggled)}
        >
          {titleUpperCase}
          {isToggled ? (
          <FaChevronUp onClick={() => setIsToggled(false)}  className="w-4 h-4"/>
        ) : (
          <FaChevronDown onClick={() => setIsToggled(true)} className="w-4 h-4"/>
        )}
        </li>
       
         
         <div>
          <AnimatePresence>
            {
                isToggled &&
                <motion.div 
                className='flex flex-col justify-evenly bg-gray-50 sm:w-[350px] w-[250px]
                h-[400px] px-3 py-1 rounded-md shadow-md mt-2 border border-primary-100'
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.5}}>
                {
                    services.map((service, idx) => {
                        const titleText=service.title.charAt(0).toUpperCase() + service.title.slice(1);
                      return(
                        <Link 
                        onClick={closeMobileMenu}
                        className={`${isActive(service.href) ? "text-primary-100": ""} transition duration-300 hover:text-primary-100`} key={idx} href={service.href}>{titleText}</Link> 
                      ) 
    })
                }
               </motion.div>
            }
            </AnimatePresence>
         </div>
    </div>
  )
}

export default MobileServicesLink