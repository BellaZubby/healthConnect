"use client";
import React from "react";
import heroImage from "@/app/assets/female_doctor.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/hook/motion";
import Button from "./button";
import useMediaQuery from "@/hook/useMediaQuery";


const HeroSection = () => {
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <div className="">
      {aboveMediumScreen ? (
        <>
        <div className="w-full bg-gradient-to-b from-white to-primary-200/20 pb-14 pt-52 pl-14 grid grid-cols-2 items-center">
          <div className="">
            <motion.p 
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            animate='show'
            className="text-lg font-bold text-primary-200">
              Distance, never a barrier to quality healthcare!
            </motion.p>
            <motion.h1 
             variants={fadeIn("down", 0.4)}
             initial='hidden'
             animate='show'
            className="text-5xl font-bold text-primary-100">
              Remote Access to Quality Healthcare Services
            </motion.h1>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{
                delay:0.6,
                duration:0.2
              }}
            >
            <Button name=" Book an Appointment" href="/contact" />
            </motion.div>
            
          </div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
          >
            <Image
              src={heroImage}
              alt="hero-image"
              className="h-96 w-96 object-cover"
            />
          </motion.div>
        </div>
        </>
      ) : (
        <div className="w-full bg-gradient-to-b from-white to-primary-200/20 pb-14 pt-44">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
          >
            <Image
              src={heroImage}
              alt="hero-image"
              className="h-96 w-96 object-cover mx-auto"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center mt-7">
          <motion.h1 
             variants={fadeIn("up", 0.5)}
             initial='hidden'
             animate='show'
            className="text-3xl font-bold text-primary-100 text-center">
              Remote Access to Quality Healthcare Services
            </motion.h1>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{
                delay:0.7,
                duration:0.2
              }}
            >
            <Button name=" Book an Appointment" href="/contact" />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
