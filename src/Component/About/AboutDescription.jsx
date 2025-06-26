import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const AboutDescription = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const fetchAbout = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getText);
                const allData = response.data.data;

                const filteredAbout = allData.filter(item => item.t_type === 4 && item.display === 1);
                setAbouts(filteredAbout);
            }catch(error){
                console.error("Failed to fetch role : ", error);
            }
        }

        fetchAbout();
    }, []);

    return (
        <motion.div
            className='px-8 mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {abouts.map((about) => (
                <div
                    className='poppins-regular text-justify'
                    dangerouslySetInnerHTML={{ __html: about.t_detail }}
                />
            ))}
        </motion.div>
    )
}

export default AboutDescription