import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import education from "../../assets/photo/education.png";
import experience from "../../assets/photo/experience.png";
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

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
    const educationRef = useRef(null);
    const educationInView = useInView(educationRef, { once: true });
    const educationControls = useAnimation();
    const [educations, setEducations] = useState([]);

    const experienceRef = useRef(null);
    const experienceInView = useInView(experienceRef, { once: true });
    const experienceControls = useAnimation();
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
      const fetchEducations = async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.getResume);
        const allData = response?.data.data;

        const educationData = allData.filter(item => item.display === 1 && item.r_type === 1);

        setEducations(educationData);
      }

      fetchEducations();
    }, [])

    useEffect(() => {
        const fetchExperiences = async () => {
          const response = await axiosInstance.get(API_ENDPOINTS.getResume);
          const allData = response?.data.data;

          const experiencesData = allData.filter(item => item.display === 1 && item.r_type === 2);

          setExperiences(experiencesData);
        }

        fetchExperiences();
    }, [])

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

    // console.log("experiences is: ", experiences);

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
                <motion.ul ref={educationRef} className="px-4 py-8 !space-y-6" initial="hidden" animate="visible" variants={listVariants}>
                    {educations.map((education) => (
                        <motion.li key={education.r_id} className="relative pl-6  before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 after:h-[calc(100%+20px)] after:w-px after:bg-[#FFCD67]" variants={itemVariants}>
                            <h4 className='poppins-semibold text-lg'>{education.r_title}</h4>
                            <span className="poppins-light text-sm !text-[#CAAE58] ">{education.r_duration}</span>
                            <div
                              className="poppins-regular text-md text-[#D6D6D6]"
                              dangerouslySetInnerHTML={{ __html: education.r_detail }}
                            />
                        </motion.li>
                    ))}
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
                <motion.ul ref={experienceRef} className="px-4 py-2 !space-y-6" initial="hidden" animate="visible" variants={listVariants}>
                    {experiences.map((experience, index) => (
                        <motion.li
                          key={experience.r_id}
                          className={`relative pl-6 before:content-[''] before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-[#FFCD67] before:rounded-full before:shadow-[0_0_6px_2px_rgba(255,205,103,0.8)] after:content-[''] after:absolute after:left-[7px] after:top-3 ${
                            index === experiences.length - 1 ? 'after:h-[calc(100%-10px)]' : 'after:h-[calc(100%+20px)]'
                          } after:w-px after:bg-[#FFCD67]`}
                          variants={itemVariants}
                        >
                            <h4 className='poppins-semibold text-lg'>{experience.r_title}</h4>
                            <span className="poppins-light text-sm !text-[#CAAE58] ">{experience.r_duration}</span>
                            <div
                              className="poppins-regular text-md text-[#D6D6D6]"
                              dangerouslySetInnerHTML={{ __html: experience.r_detail }}
                            />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default ResumeInformation