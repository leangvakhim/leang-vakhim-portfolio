import React from 'react'
import { motion } from 'framer-motion';
import blog1 from "../../assets/photo/blog-1.jpg";
import blog2 from "../../assets/photo/blog-2.jpg";

const BlogInformation = () => {
    return (
        <div className='px-8 py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog1}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog2}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog1}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog2}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog1}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='w-full overflow-hidden rounded-2xl relative'>
                        <img
                            src={blog2}
                            className='w-full h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                        />

                    </div>
                    <div className='flex flex-col px-6 py-8'>
                        <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>Design • Feb 23, 2022</h1>
                        <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>Design Conferences In 2022</h1>
                        <p className='poppins-light text-md !text-[#F1F1F1]'>
                            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default BlogInformation