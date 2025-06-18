import React from 'react'
import { motion } from 'framer-motion'
import message from "../../assets/photo/paper-plane.png"

const ContactForm = () => {
    return (
        <div className='px-8 pb-16 md:pb-18 lg:pb-4 relative' >
            {/* title */}
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>Contact Form</h1>
            {/* form */}
            <form action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6'>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Full name"
                                    className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <input
                                    type="mail"
                                    name=""
                                    id=""
                                    placeholder="Email address"
                                    className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='grid grid-cols-1 mt-2 mb-4'>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <textarea name="" id="" placeholder='Your message' rows="5" className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"></textarea>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </form>
            {/* button */}
            <motion.div
              className="w-full flex justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className='cursor-pointer flex md:justify-end justify-center items-center px-6 py-4 border bg-[#212122] !border-[#383838] md:w-fit w-full h-full rounded-2xl !border-r-0 !border-b-0'>
                <div className='h-4 w-4 shrink-0'>
                  <img src={message} alt="" className='w-full' />
                </div>
                <div className='flex ml-3 flex-col gap-1.5'>
                  <h2 className='font-medium !text-[#FFD36A] poppins-regular'>Send Message</h2>
                </div>
              </div>
            </motion.div>
        </div>
    )
}

export default ContactForm