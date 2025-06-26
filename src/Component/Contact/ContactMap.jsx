import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const ContactMap = () => {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        const fetchMap = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getText);
                const allData = response.data.data;

                const filteredMap = allData.filter(item => item.t_type === 5 && item.display === 1);
                setMaps(filteredMap);
            }catch(error){
                console.error("Failed to fetch role : ", error);
            }
        }

        fetchMap();
    }, []);

    const mapSrc = maps[0]?.t_detail || "";

    return (
        <motion.div
            className='px-8 pb-4'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='mt-4 mb-8 md:h-96 h-64 relative flex flex-col object-contain overflow-hidden border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                <iframe
                    title="Google Map"
                    src={mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    className=" border-none w-full h-full "
                />
            </div>
        </motion.div>
    )
}

export default ContactMap