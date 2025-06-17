import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuSmallScreen = () => {
    const location = useLocation();
    return (
        <div className='fixed bottom-0 left-0 right-0 z-50 visible lg:invisible !bg-[#232325] border-[#383838] border-t rounded-t-2xl flex md:gap-10 gap-6 py-6 w-full items-center justify-center'>
            <Link to="/about" className={`${location.pathname === "/about" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-[11px] md:text-lg poppins-regular`}>About</Link>
            <Link to="/resume" className={`${location.pathname === "/resume" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-[11px] md:text-lg poppins-regular`}>Resume</Link>
            <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-[11px] md:text-lg poppins-regular`}>Portfolio</Link>
            <Link to="/blog" className={`${location.pathname === "/blog" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-[11px] md:text-lg poppins-regular`}>Blog</Link>
            <Link to="/contact" className={`${location.pathname === "/contact" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-[11px] md:text-lg poppins-regular`}>Contact</Link>
        </div>
    )
}

export default MenuSmallScreen