import { IconType } from "react-icons";
import {FaEnvelope, FaFacebook, FaHandHoldingHeart, FaInstagram, FaMapPin, FaPhone, FaPiggyBank, FaTwitter} from "react-icons/fa";
import { FaBookMedical, FaMaskFace, FaShieldHalved } from "react-icons/fa6";
import img1 from '@/app/assets/partner1.jpg'
import img2 from '@/app/assets/partner2.jpg'
import img3 from '@/app/assets/partner3.jpg'
import img4 from '@/app/assets/partner4.jpg'
import img5 from '@/app/assets/partner5.avif'
import { StaticImageData } from "next/image";

export interface Dropdown {
    name: string;
    href: string;
}

export interface Menu {
    link: string;
    href: string;
    dropdown?: Dropdown[]
}

export const menu:Menu[] = [
    {
        link: "Home",
        href: "/home"
    },
    {
        link: "About us",
        href: "/about_us"
    },
    {
        link: "Services",
        href: "/services",
        dropdown: [
            {
                name: "Video Consultation",
                href: "/video_consultation"
            },
            {
                name: "Electronic Health Records (EHR)",
                href: "/electronic_health_records"
            },
            {
                name: "Instant Messaging and Chat",
                href: "/instant_messaging_and_chat"
            },
            {
                name: "Remote Monitoring",
                href: "/remote_monitoring"
            },
            {
                name: "Prescription Services",
                href: "/prescription_services"
            },
            {
                name: "Mental Health Support",
                href: "/mental_health_support"
            },
            {
                name: "AI and Data Analytics",
                href: "/ai_and_data_analytics"
            },
        ]
    },
    {
        link: "Partners",
        href: "/partners"
    },
    {
        link: "Blogs",
        href: "/blogs"
    },
    {
        link: "Contact",
        href: "/contact"
    },
]

export interface Benefits {
    title: string;
    icon: IconType;
    details: string;
    id: number;
  }
  
  export const benefits: Benefits[] = [
    {
      title: "Intensive Care 24/7 with Convenience",
      icon: FaHandHoldingHeart,
      details: "Lorem adipisicing elit. Nemo harum tenetur perferendis quia minima ullam maiores.",
      id: 1
    },
    {
      title: "Quick Access to Medical Care",
      icon: FaBookMedical,
      details: "HealthConnect Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      id: 2
    },
    {
      title: "Lower Cost",
      icon: FaPiggyBank,
      details: "Reduced out-of-pocket expenses, ipsum dolor sit amet consectetur adipisicing elit.",
      id: 3
    },
    {
      title: "Confidentality",
      icon: FaShieldHalved,
      details: "Privacy, ipsum dolor sit amet consectetur adipisicing elit. Nemo harum tenetur.",
      id: 4
    },
    {
      title: "Reduced Spread and Exposure to Infection",
      icon: FaMaskFace,
      details: "Reduced Spread and Exposure to Infection, ipsum dolor sit amet.",
      id: 5
    },
  ];

  export interface Partners {
    image: StaticImageData;
    index: number;
  }
  
  export const partnersData: Partners[] = [
    {
      image: img1,
      index: 1,
    },
    {
      image: img2,
      index: 2,
    },
    {
      image: img3,
      index: 3,
    },
    {
      image: img4,
      index: 4,
    },
    {
      image: img5,
      index: 5,
    },
  ];

  export interface Socials {
    icon: any,
    href: string
}

export const socialIcon:Socials[] = [
    {
        icon: FaFacebook,
        href: "#"
    },
    {
        icon: FaInstagram,
        href: "#"
    },
    {
        icon: FaTwitter,
        href: "#"
    },
]

export interface FooterDetailType  {
    icon:any;
    title:string;
  }
  
  
  export const contactData:FooterDetailType[] = [
    {
      icon: FaMapPin,
      title: "Abakaliki, Ebonyi State"
    },
    {
        icon: FaPhone,
        title:"+2347045789212"
    },
   
    {
        icon: FaEnvelope,
        title: "info@healthconnect.com"
    }
  ]
  
  export interface FooterServiceType {
      name:string;
  }
   export const footerService:FooterServiceType[] = [
    {
        name: "Video Consultation",
    },
    {
        name: "Electronic Health Records (EHR)",
    },
    {
        name: "Instant Messaging and Chat",
    },
    {
        name: "Remote Monitoring",
    },
    {
        name: "Prescription Services",
    },
    {
        name: "Mental Health Support",
    },
    {
        name: "AI and Data Analytics",
    },
   ]
  
  
  
  
  
  
  
  
  

 
  