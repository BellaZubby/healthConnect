"use client";
import useMediaQuery from "@/hook/useMediaQuery";
import React, {useEffect, useState } from "react";
import DesktopNav from "./desktopNav/desktopNav";
import MobileNav from "./mobileNav/mobileNav";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import { FaBars} from "react-icons/fa";
import Image from "next/image";
import logo from '@/app/assets/healthConnectImage.jpeg'
import { FaXmark } from "react-icons/fa6";
import Mobile_Login_register from "../mobile_login_register";




const Navbar = () => {
  
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true);

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const closeMobileMenu = () => {
      setIsMenuToggled(false);
  }
  
  useEffect(
    () => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
        }
        if (window.scrollY >= 10) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []
  );

  return (
    <div className="w-full">
      {aboveMediumScreen ? (
        <DesktopNav isTopOfPage={isTopOfPage}/>
       
      
      ) : (
         
            <div className={`ssm:px-7 px-4 w-full fixed top-0 z-50 items-center justify-between py-4 flex md:hidden ${isTopOfPage ? "":"bg-primary-50/50 shadow-md py-12"}`}>
            <Link href={"/"} className='flex items-center gap-1'>
              <Image src={logo} alt="logo" className="ssm:w-32 ssm:h-32 w-24 h-24 object-cover" priority/>
              <div className='flex flex-col items-center text-primary-100 font-semibold ssm:text-lg text-[16px]'>
                    <span>HealthConnect</span>
                    <span>Telemedicine</span>
                </div>
            </Link>
            
          
                <FaBars className='text-primary-100 w-7 h-7 ssm:w-12 ssm:h-12 ssm:mr-5' onClick={() => setIsMenuToggled(true)}/>
            
            </div>

        

      )
    }
      <AnimatePresence>
      {
       !aboveMediumScreen && isMenuToggled && (
            <div className='fixed left-0 bottom-0 z-[999] h-full w-full flex items-start bg-black/40'>
              <motion.div 
              variants={{
                open: {
                  x:"0%",
                  transition:{
                    duration:0.5,
                    when:"beforeChildren",
                  },
                },
                closed: {
                  x:"-100%",
                  transition: {
                    when: "afterChildren",
                    duration:0.4
                  }
                }
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className='w-[300px] ssm:w-[430px] sm:w-[500px] h-screen bg-[#F3F4F6] drop-shadow-xl'>
              <div className='shadow-lg flex items-center justify-between px-5 py-5'>
              <Link href={"/"} className=''>
              <Image src={logo} alt="logo" className="ssm:w-32 ssm:h-32 w-24 h-24 object-cover"/>
              </Link>
              <span className='border rounded-full p-[8px] border-gray-400'>
                <FaXmark className='text-primary-100 w-9 h-9' onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              </span>
              
              </div>

             <motion.div 
              variants={{
                open: {
                  y:"0%",
                  opacity: 1,
                  transition: {
                    duration:0.1,
                  }
                },

                closed: {
                  y: "25%",
                  opacity: 0,
                }
              }}
            >
              <MobileNav
            closeMenu={closeMobileMenu}
         />
          <hr className="bg-gray-600 my-5 mx-5"/>
            <Mobile_Login_register/>
            
             </motion.div>
             

              </motion.div>
            </div> 
        )
      }
     </AnimatePresence> 
     <div className="scroll-watcher"/>  
    </div>
  );
};

export default Navbar;
