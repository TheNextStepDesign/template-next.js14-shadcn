"use client"
import { useState } from "react";
import Logo from "./Logo"
import { NavItems, NavItemsMob } from "./NavItems"
import HambergerIcon from './icons/hamberger.svg';
import closeIcon from './icons/close.svg';
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="relative z-20" >
      <div className=' flex justify-between items-center bg-neutral-900 border border-neutral-800 text-white w-full px-5 py-2.5 md:px-10 md:py-7 '>
          <Logo/>
          <NavItems/>
          <div className="block md:hidden " onClick={()=>{setToggle(!toggle)}} >
            {
              toggle?<Image src={closeIcon} alt="close Icon" />:<Image src={HambergerIcon} alt="hamberger Icon" />
            }
          </div>
      </div>

        {toggle && <div className="fixed top-14 right-0 md:hidden h-[80vh] max-w-[450px] ml-auto bg-neutral-900  text-white " >
          <NavItemsMob/>
        </div>}
    </div>
  )
}

export default Navbar