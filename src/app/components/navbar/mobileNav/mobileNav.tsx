import React from 'react'
import MobileAboutLink from './link/mobileAbout';
import MobileContactLink from './link/mobileContact';
import MobileHomeLink from './link/mobileHome';
import MobileServicesLink from './link/mobileServices';
import MobilePartnersLink from './link/mobilePartners';
import MobileBlogsLink from './link/mobileBlogs';

type Props = {
    closeMenu: any;
}

const MobileNav = ({closeMenu}: Props) => {
  return (
    <div className={`flex flex-col gap-10 text-lg sm:text-xl ssm:px-10 px-7 ssm:py-20 py-12`}>
    <MobileHomeLink closeMenu={closeMenu}/>
     <MobileAboutLink closeMenu={closeMenu}/>
     <MobileServicesLink closeMenu={closeMenu}/>
     <MobilePartnersLink closeMenu={closeMenu}/>
     <MobileBlogsLink closeMenu={closeMenu}/>
     <MobileContactLink closeMenu={closeMenu}/>
  </div>
  )
}

export default MobileNav