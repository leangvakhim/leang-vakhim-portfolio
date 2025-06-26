import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const AboutCertificate = () => {
    const [certificates, setCertificates] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

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
        const fetchCertificate = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getAchievement);
                const allData = response?.data.data || [];

                const newsArray = allData.filter(item => item.a_type === 2 && item.display === 1);
                if (newsArray && !Array.isArray(newsArray)) {
                    newsArray = [newsArray];
                } else if (!newsArray) {
                    newsArray = [];
                }

                const updatedNewsArray = await Promise.all(newsArray.map(async (item) => {
                    const image = await fetchImageById(item.a_img);
                    return {
                        ...item,
                        image: image
                    };
                }));

                setCertificates(updatedNewsArray);
            }catch(error){
                console.error("Failed to fetch the information: ", error);
            }
        }

        fetchCertificate();
    }, [])

    return (
        <div className=' px-8 pb-12'>
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>Certificates</h1>
            {/* badges scrollable */}
            <div className="overflow-x-hidden py-6">
                <motion.div
                    className="flex space-x-12 min-w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    {[...certificates, ...certificates].map((certificate, index) => (
                        <div key={index} className="inline-block">
                            <img
                                src={certificate.image.image_url}
                                alt={`Badge ${index + 1}`}
                                className='cursor-pointer w-60 h-40 object-fill'
                                onClick={() => setSelectedImage(certificate.image.image_url)}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            {selectedImage && (
                <div
                    className=" fixed inset-0 !bg-black !bg-opacity-50 flex items-center justify-center z-50 "
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Enlarged Badge" className="h-60 md:h-80 lg:h-full max-w-5xl max-h-[70vh] rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    )
}

export default AboutCertificate