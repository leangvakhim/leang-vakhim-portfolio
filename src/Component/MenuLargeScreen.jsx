import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuLargeScreen = () => {
    const location = useLocation();
    return (
        <div className='invisible lg:visible !bg-[#232325] !border-r-0 border-b border-l border-[#383838] rounded-tr-xl rounded-bl-xl flex absolute top-0 right-0 gap-10 py-4 w-1/2 items-center justify-center'>
            <Link to="/about" className={`${location.pathname === "/about" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-md poppins-regular`}>About</Link>
            <Link to="/resume" className={`${location.pathname === "/resume" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-md poppins-regular`}>Resume</Link>
            <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-md poppins-regular`}>Portfolio</Link>
            <Link to="/blog" className={`${location.pathname === "/blog" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-md poppins-regular`}>Blog</Link>
            <Link to="/contact" className={`${location.pathname === "/contact" ? "!text-[#FFDB70]" : "hover:!text-[#FFDB70] text-[#D6D6D6]"} cursor-pointer text-md poppins-regular`}>Contact</Link>
        </div>
    )
}

export default MenuLargeScreen