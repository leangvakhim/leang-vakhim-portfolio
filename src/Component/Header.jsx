import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";
import Profile from "../assets/photo/profile.jpeg";
import mail from "../assets/photo/mail.png";
import location from "../assets/photo/location.png";
import smartphone from "../assets/photo/smartphone.png";
import calendar from "../assets/photo/calendar.png";
import facebook from "../assets/photo/facebook.png";
import telegram from "../assets/photo/telegram.png";
import linkedin from "../assets/photo/linkedin.png";

const Header = () => {
    const [showContacts, setShowContacts] = useState(false);

    const words = ["Frontend Developer", "Backend Developer"];
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting && charIndex <= currentWord.length) {
        setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex));
          setCharIndex((prev) => prev + 1);
        }, 100);
      }

      if (isDeleting && charIndex >= 0) {
        setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex));
          setCharIndex((prev) => prev - 1);
        }, 50);
      }

      if (!isDeleting && charIndex === currentWord.length + 1) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }

      if (isDeleting && charIndex === 0) {
        setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 300);
      }
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <header className='relative flex flex-col border rounded-2xl mx-4 lg:mx-auto mt-16 mb-2 bg-[#1E1E1F] !border-[#383838] max-w-5xl'>
            <div className='w-full h-auto p-8'>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <img src={Profile} alt="" className='w-28 h-28 rounded-2xl border !border-[#383838] object-fill'/>
                        <div className='flex flex-col gap-3 py-2 justify-center'>
                            <h1 className='font-medium text-2xl font-mono !text-[#F8F8F8] poppins-medium'>Leang Vakhim</h1>
                            <span className='text-[12px] poppins-light px-3 py-1.5 bg-[#2B2B2C] w-fit rounded-lg !text-[#F8F8F8] flex'>
                              <span>{displayText}<span className="animate-pulse ml-1">|</span></span>
                            </span>
                        </div>
                    </div>

                    <div className=' absolute top-0 right-0 cursor-pointer flex flex-col items-end' onClick={() => setShowContacts(!showContacts)}>
                        <p className='!bg-[#232325] !border-r-0 !border-b-0 invisible md:visible poppins-light w-fit border-l hover:border-t hover:border-b-0 border-[#383838] !text-[#FFDB70] rounded-tr-xl rounded-bl-xl py-1.5 px-3 text-[12px] hover:border-l hover:border-[#FFDB70]'>
                            {showContacts ? 'Hide Contacts' : 'Show Contacts'}
                        </p>
                        <p className='!bg-[#232325] !border-r-0 !border-b-0 top-0 right-0 absolute visible md:invisible w-fit border-l hover:border-t hover:border-b-0 border-[#383838] !text-[#FFDB70] rounded-tr-xl rounded-bl-xl py-1.5 px-3 text-[12px] font-light hover:border-l hover:border-[#FFDB70]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                        </p>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showContacts ? "auto" : 0, opacity: showContacts ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: 'hidden' }}
            >
                {/* horizontal line */}
                <div className='flex !items-center '>
                    <hr className="w-full mx-4 border-t-1 border-[#383838] " />
                </div>
                {/* icon */}
                <div className='grid lg:grid-cols-2 grid-cols-1 px-4 py-6 gap-8'>
                    <div className='col-span-1'>
                        <div className='flex '>
                            <div className='h-12 w-12 shrink-0'>
                                <img src={mail} alt="" className='p-3 border bg-[#202022] !border-[#383838] w-full h-full rounded-2xl object-contain border-r-0 border-b-0'/>
                            </div>
                            <div className='flex ml-3 flex-col gap-1.5'>
                                <h2 className='uppercase font-medium !text-[12px] !text-[#9E9E9E] poppins-medium'>Email</h2>
                                <a href='mailto:vakhiml60@gmail.com' className='text-[14px] font-medium text-[#F8F8F8] poppins-semibold'>vakhiml60@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <div className='flex '>
                            <div className='h-12 w-12 shrink-0'>
                                <img src={smartphone} alt="" className='p-3 border bg-[#202022] !border-[#383838] w-full h-full rounded-2xl object-contain border-r-0 border-b-0'/>
                            </div>
                            <div className='flex ml-3 flex-col gap-1.5'>
                                <h2 className='uppercase font-medium !text-[12px] !text-[#9E9E9E] poppins-medium'>phone</h2>
                                <a href='tel:+85510202974' className='text-[14px] font-medium text-[#F8F8F8] poppins-semibold'>+855(10) 202 974</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <div className='flex '>
                            <div className='h-12 w-12 shrink-0'>
                                <img src={calendar} alt="" className='p-3 border bg-[#202022] !border-[#383838] w-full h-full rounded-2xl object-contain border-r-0 border-b-0'/>
                            </div>
                            <div className='flex ml-3 flex-col gap-1.5'>
                                <h2 className='uppercase font-medium !text-[12px] !text-[#9E9E9E] poppins-medium'>birthday</h2>
                                <p className='text-[14px] font-medium text-[#F8F8F8] poppins-semibold'>June 17, 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <div className='flex'>
                            <div className='h-12 w-12 shrink-0'>
                                <img src={location} alt="" className='p-3 border bg-[#202022] !border-[#383838] w-full h-full rounded-2xl object-contain border-r-0 border-b-0'/>
                            </div>
                            <div className='flex ml-3 flex-col gap-1.5'>
                                <h2 className='uppercase font-medium !text-[12px] !text-[#9E9E9E] poppins-medium'>location</h2>
                                <p className='text-[14px] font-medium text-[#F8F8F8] poppins-semibold'>Tonle Basac, Chamka Morn, Phnom Penh, Cambodia</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* horizontal line */}
                <div className='flex !items-center '>
                    <hr className="w-full mx-4 border-t-1 border-[#383838] " />
                </div>
                {/* social icons */}
                <div className='px-4 lg:py-6 py-4 gap-6'>
                    <div className='flex px-2 lg:gap-5 gap-3'>
                        <motion.img src={facebook} alt="" className='w-4 cursor-pointer' whileHover={{ scale: 1.4 }} />
                        <motion.img src={telegram} alt="" className='w-4 cursor-pointer' whileHover={{ scale: 1.4 }} />
                        <motion.img src={linkedin} alt="" className='w-4 cursor-pointer' whileHover={{ scale: 1.4 }} />
                    </div>
                </div>
            </motion.div>
        </header>
    )
}

export default Header