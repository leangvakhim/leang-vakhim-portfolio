import React from 'react'
import { motion } from 'framer-motion';
import web_designer from '../../assets/photo/web-design.png';
import web_development from '../../assets/photo/web-development.png';

const AboutCard = () => {
    return (
        <div className='px-8'>
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>What I'm doing</h1>
            {/* card */}
            <div className='grid lg:grid-cols-2 grid-cols-1 py-6 gap-8'>
                <div className='col-span-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='relative flex flex-col sm:flex-row p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0'
                    >
                        <div className='p-1.5 sm:p-3 w-20 h-20 mx-auto sm:mx-0'>
                            <img src={web_designer} alt=""  className=' object-contain '/>
                        </div>
                        <div className='flex ml-2 mt-2.5 flex-col gap-2 text-center sm:text-left pb-2'>
                            <h2 className=' !text-[#F7F7F7] poppins-semibold'>Web design</h2>
                            <p className=' text-[#D6D6D6] poppins-light'>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </motion.div>
                </div>

                <div className='col-span-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='relative flex flex-col sm:flex-row p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0'
                    >
                        <div className='p-1.5 sm:p-3 w-20 h-20 mx-auto sm:mx-0'>
                            <img src={web_development} alt=""  className=' object-contain '/>
                        </div>
                        <div className='flex ml-2 mt-2.5 flex-col gap-2 text-center sm:text-left pb-2'>
                            <h2 className=' !text-[#F7F7F7] poppins-semibold'>Web development</h2>
                            <p className=' text-[#D6D6D6] poppins-light'>High-quality development of sites at the professional level.</p>
                        </div>
                    </motion.div>
                </div>

                <div className='col-span-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='relative flex flex-col sm:flex-row p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0'
                    >
                        <div className='p-1.5 sm:p-3 w-20 h-20 mx-auto sm:mx-0'>
                            <img src={web_designer} alt=""  className=' object-contain '/>
                        </div>
                        <div className='flex ml-2 mt-2.5 flex-col gap-2 text-center sm:text-left pb-2'>
                            <h2 className=' !text-[#F7F7F7] poppins-semibold'>Web design</h2>
                            <p className=' text-[#D6D6D6] poppins-light'>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </motion.div>
                </div>

                <div className='col-span-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='relative flex flex-col sm:flex-row p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0'
                    >
                        <div className='p-1.5 sm:p-3 w-20 h-20 mx-auto sm:mx-0'>
                            <img src={web_development} alt=""  className=' object-contain '/>
                        </div>
                        <div className='flex ml-2 mt-2.5 flex-col gap-2 text-center sm:text-left pb-2'>
                            <h2 className=' !text-[#F7F7F7] poppins-semibold'>Web development</h2>
                            <p className=' text-[#D6D6D6] poppins-light'>High-quality development of sites at the professional level.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard