import React from "react";
import SubText from "../subText";
import HyperText from "../hyperText";
import NewService from "../newService";



const ServicesSection = () => {
  return (
    <div className="bg-primary-200/30 overflow-hidden">
      <div className="ripple-background relative md:top-[500px] ssm:top-[850px] top-[1000px]">
        <div className="circle xxlarge shade1"/>
        <div className="circle xlarge shade2"/>
        <div className="circle large shade3"/>
        <div className="circle medium shade4"/>
        <div className="circle small shade5"/>
      </div>

      <div className="w-full h-full py-16 relative z-40">
        <div className="flex flex-col items-center justify-center">
          <SubText>What We Offer</SubText>
          <HyperText>Our Services</HyperText>
        </div>

        <NewService />
      </div>
    </div>
  );
};

export default ServicesSection;
