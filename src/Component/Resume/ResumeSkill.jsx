import React, {useState, useEffect} from 'react'
import { motion, useInView } from 'framer-motion'
import { axiosInstance, API_ENDPOINTS } from '../APIConfig';

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
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      const fetchSkills = async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.getSkill);
        const allData = response?.data.data;

        const skillsData = allData.filter(item => item.display === 1);

        setSkills(skillsData);
      }

      fetchSkills();
    }, [])

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
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.sk_id}
                      className='flex ml-2 mt-2.5 flex-col gap-2 pb-2 w-full'
                      variants="visible"
                    >
                        <h2 className=' !text-[#F7F7F7] poppins-semibold !text-[12px] sm:!text-[16px]'>{skill.sk_title}<span className='ml-1/2 poppins-light text-[14px] text-[#D6D6D6] ml-2'>{skill.sk_per}%</span></h2>
                        <div className="relative w-full h-2 rounded-3xl overflow-hidden px-4">
                            <hr style={{ width: `${skill.sk_per}%` }} className="absolute top-0 left-0 border-3 border-[#FFBE5E] rounded-3xl z-10" />
                            <hr className="w-full border-3 border-[#383838] rounded-3xl " />
                        </div>
                    </motion.div>
                  ))}
                </motion.div>
            </div>
        </div>
    )
}

export default ResumeSkill