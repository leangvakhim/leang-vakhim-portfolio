import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import web_designer from '../../assets/photo/web-design.png';
import web_development from '../../assets/photo/web-development.png';
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const AboutCard = () => {
    const [cards, setCards] = useState([]);

    const fetchImageById = async (id) => {
        try {
            const response = await axiosInstance.get(`${API_ENDPOINTS.getImages}/${id}`);
            return response.data.data;
        } catch (error) {
            console.error(`Failed to fetch image for id ${id}`, error);
            return null;
        }
    };

    useEffect(() => {
        const fetchInformation = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getInformation);
                const allData = response?.data.data || [];

                const newsArray = allData.filter(item => item.i_type === 2 && item.display === 1);
                if (newsArray && !Array.isArray(newsArray)) {
                    newsArray = [newsArray];
                } else if (!newsArray) {
                    newsArray = [];
                }

                const updatedNewsArray = await Promise.all(newsArray.map(async (item) => {
                    const image = await fetchImageById(item.i_img);
                    return {
                        ...item,
                        image: image
                    };
                }));

                setCards(updatedNewsArray);
            }catch(error){
                console.error("Failed to fetch the information: ", error);
            }
        }

        fetchInformation();
    }, [])

    return (
        <div className='px-8'>
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>What I can do?</h1>
            {/* card */}
            <div className='grid lg:grid-cols-2 grid-cols-1 py-6 gap-8'>
                {cards.map((card) => (
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className='relative flex flex-col sm:flex-row p-2 border bg-[#232325] !border-[#383838] rounded-2xl object-contain !border-r-0 border-b-0'
                        >
                            <div className='p-1.5 sm:p-3 w-20 h-20 mx-auto sm:mx-0'>
                                <img src={card.image.image_url} alt=""  className=' object-contain '/>
                            </div>
                            <div className='flex ml-2 mt-2.5 flex-col gap-2 text-center sm:text-left pb-2'>
                                <h2 className=' !text-[#F7F7F7] poppins-semibold'>{card.i_title}</h2>
                                <p className=' text-[#D6D6D6] poppins-light '>{card.i_detail}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutCard