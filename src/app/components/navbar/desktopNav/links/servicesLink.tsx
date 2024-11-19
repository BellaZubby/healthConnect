"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {
  href: string;
  title: string;
};

type Page = {
  
};
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

const ServicesLink = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [isToggled, setIsToggled] = useState(false);
  const title = "services";
  const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div
      onMouseEnter={() => setIsToggled(true)}
      onMouseLeave={() => setIsToggled(!isToggled)}
    >
        <Link
          className={`
            ${isActive("/video_consultation") ||
            isActive("/electronic_health_records") ||
            isActive("/instant_messaging_and_chat") ||
            isActive("/remote_monitoring") ||
            isActive("/prescription_services") ||
            isActive("/mental_health_support") ||
            isActive("/ai_and_data_analytics")
              ? "text-primary-100 relative"
              : "relative"}
             flex items-center gap-1 transition duration-300 hover:text-primary-150
             ${isToggled ? "text-primary-100":""}
          `}
          href={""}
        >
          {titleUpperCase}
          {isToggled ? (
          <FaChevronUp className="w-4 h-4 mt-1"/>
        ) : (
          <FaChevronDown className="w-4 h-4 mt-1"/>
        )}
         <span className={` 
          ${isActive("/video_consultation") ||
            isActive("/electronic_health_records") ||
            isActive("/instant_messaging_and_chat") ||
            isActive("/remote_monitoring") ||
            isActive("/prescription_services") ||
            isActive("/mental_health_support") ||
            isActive("/ai_and_data_analytics")
            ? "inline-block w-10 h-[1.5px] bg-primary-100 absolute bottom-0 left-1/2 -translate-x-1/2":"hidden"}`}/>
        </Link>
       

      <div>
        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="absolute z-[999] flex flex-col gap-10 bg-gray-50 w-[300px]
                px-3 py-10 shadow-md mt-7 border border-primary-100 rounded-md "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute left-0 right-0 -top-9 h-10 bg-transparent z-[999]" />
              {services.map((service, idx) => {
                const titleText =
                  service.title.charAt(0).toUpperCase() +
                  service.title.slice(1);
                return (
                  <Link
                    className={`
                      ${isActive(service.href)
                        ? "text-primary-100 text-sm"
                        : "text-sm"}
                        transition duration-500 hover:text-primary-100
                    `}
                    key={idx}
                    href={service.href}
                  >
                    {titleText}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesLink;
