import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import education from "../../assets/photo/education.png";
import experience from "../../assets/photo/experience.png";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ResumeInformation = () => {
    const educationRef = React.useRef(null);
    const educationInView = useInView(educationRef, { once: true });
    const educationControls = useAnimation();

    const experienceRef = React.useRef(null);
    const experienceInView = useInView(experienceRef, { once: true });
    const experienceControls = useAnimation();

    useEffect(() => {
      if (educationInView) {
        educationControls.start("visible");
      }
    }, [educationInView]);

    useEffect(() => {
      if (experienceInView) {
        experienceControls.start("visible");
      }
    }, [experienceInView]);

    return (
        <div className='px-8 py-4'>
            {/* Education */}
            <div className='flex '>
                <img src={education} alt="" className='p-3.5 border bg-[#1E1E1F] !border-[#383838] border-r-0 border-b-0 w-12 rounded-2xl object-contain'/>
                <div className='relative ml-3 flex justify-center items-center before:content-[""] before:absolute before:left-[-37px] before:top-full before:h-[40px] before:w-px before:bg-[#FFCD67]'>
                    <h2 className=' !text-2xl !text-[#F8F8F8] poppins-bold'>Education</h2>
                </div>
            </div>
            <div className="relative">
                <motion.ul ref={educationRef} className="px-4 py-8 !space-y-6" initial="hidden" animate={educationControls} variants={listVariants}>
                    <motion.li className="relative pl-6 mb-[-12px] mt-[-20px] before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 after:h-[calc(100%+20px)] after:w-px after:bg-[#FFCD67]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>University school of the arts</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2007 - 2008</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                    <motion.li className="relative pl-6 mb-[-12px] before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 after:h-[calc(100%+20px)] after:w-px after:bg-[#FFCD67]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>University school of the arts</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2007 - 2008</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                    <motion.li className="relative pl-6 before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>University school of the arts</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2007 - 2008</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                </motion.ul>
            </div>

            {/* Experiences */}
            <div className='flex '>
                <img src={experience} alt="" className='p-3.5 border bg-[#1E1E1F] !border-[#383838] border-r-0 border-b-0 w-12 rounded-2xl object-contain'/>
                <div className='relative ml-3 flex justify-center items-center before:content-[""] before:absolute before:left-[-37px] before:top-full before:h-[40px] before:w-px before:bg-[#FFCD67]'>
                    <h2 className=' !text-2xl !text-[#F8F8F8] poppins-bold'>Experiences</h2>
                </div>
            </div>
            <div className="relative">
                <motion.ul ref={experienceRef} className="px-4 py-8 !space-y-6" initial="hidden" animate={experienceControls} variants={listVariants}>
                    <motion.li className="relative pl-6 mb-[-12px] mt-[-20px] before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 after:h-[calc(100%+20px)] after:w-px after:bg-[#FFCD67]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>Creative Directory</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2015 - Present</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                    <motion.li className="relative pl-6 mb-[-12px] before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 after:h-[calc(100%+20px)] after:w-px after:bg-[#FFCD67]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>Art Director</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2013 - 2015</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                    <motion.li className="relative pl-6 before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)]" variants={itemVariants}>
                        <h4 className='poppins-semibold text-lg'>Art Director</h4>
                        <span className="poppins-light text-sm !text-[#CAAE58] ">2013 - 2015</span>
                        <p className="poppins-regular text-md text-[#D6D6D6]">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}

export default ResumeInformation