import React from 'react'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const ResumeSkill = () => {
    return (
        <div className='px-8' >
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>My Skills</h1>
            {/* card */}
            <div className='mt-4 mb-8 py-2 px-4 relative flex flex-col p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0' >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                    <motion.div
                      className='flex ml-2 mt-2.5 flex-col gap-2 pb-2 w-full'
                      variants={itemVariants}
                    >
                        <h2 className=' !text-[#F7F7F7] poppins-semibold'>Web Design <span className='ml-1/2 poppins-light text-[14px] text-[#D6D6D6]'>80%</span></h2>
                        <div className="relative w-full h-2 rounded-3xl overflow-hidden px-4">
                            <hr className="absolute top-0 left-0 w-[80%] border-3 border-[#FFBE5E] rounded-3xl z-10" />
                            <hr className="w-full border-3 border-[#383838] rounded-3xl " />
                        </div>
                    </motion.div>
                    <motion.div
                      className='flex ml-2 mt-2.5 flex-col gap-2 pb-2 w-full'
                      variants={itemVariants}
                    >
                        <h2 className=' !text-[#F7F7F7] poppins-semibold'>Graphic Design <span className='ml-1/2 poppins-light text-[14px] text-[#D6D6D6]'>70%</span></h2>
                        <div className="relative w-full h-2 rounded-3xl overflow-hidden px-4">
                            <hr className="absolute top-0 left-0 w-[70%] border-3 border-[#FFBE5E] rounded-3xl z-10" />
                            <hr className="w-full border-3 border-[#383838] rounded-3xl" />
                        </div>
                    </motion.div>
                    <motion.div
                      className='flex ml-2 mt-2.5 flex-col gap-2 pb-2 w-full'
                      variants={itemVariants}
                    >
                        <h2 className=' !text-[#F7F7F7] poppins-semibold'>Branding <span className='ml-1/2 poppins-light text-[14px] text-[#D6D6D6]'>90%</span></h2>
                        <div className="relative w-full h-2 rounded-3xl overflow-hidden px-4">
                            <hr className="absolute top-0 left-0 w-[90%] border-3 border-[#FFBE5E] rounded-3xl z-10" />
                            <hr className="w-full border-3 border-[#383838] rounded-3xl" />
                        </div>
                    </motion.div>
                    <motion.div
                      className='flex ml-2 mt-2.5 flex-col gap-2 pb-2 w-full'
                      variants={itemVariants}
                    >
                        <h2 className=' !text-[#F7F7F7] poppins-semibold'>WordPress <span className='ml-1/2 poppins-light text-[14px] text-[#D6D6D6]'>50%</span></h2>
                        <div className="relative w-full h-2 rounded-3xl overflow-hidden px-4">
                            <hr className="absolute top-0 left-0 w-[50%] border-3 border-[#FFBE5E] rounded-3xl z-10" />
                            <hr className="w-full border-3 border-[#383838] rounded-3xl" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default ResumeSkill