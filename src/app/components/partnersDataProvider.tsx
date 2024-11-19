import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

type Props = {
  index: number;
  src: StaticImageData;
};

const PartnersDataProvider = ({ index, src}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center"
    >
      <Image src={src} alt="skill image" className="w-24 h-24 object-contain"/>
    </motion.div>
  );
};

export default PartnersDataProvider;