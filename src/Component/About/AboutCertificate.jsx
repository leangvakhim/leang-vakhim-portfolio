import React, {useState} from 'react'
import { motion } from 'framer-motion';
import tic_certificate from '../../assets/photo/tic-certificate.png';

const AboutCertificate = () => {

    const badges = [
        tic_certificate,
        tic_certificate,
        tic_certificate,
        tic_certificate,
        tic_certificate,
        tic_certificate,
        tic_certificate,
        tic_certificate
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className=' px-8 '>
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>Certificates</h1>
            {/* badges scrollable */}
            <div className="overflow-x-hidden py-12">
                <motion.div
                    className="flex space-x-12 min-w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    {[...badges, ...badges].map((badge, index) => (
                        <div key={index} className="inline-block">
                            <img
                                src={badge}
                                alt={`Badge ${index + 1}`}
                                className='cursor-pointer w-full h-40 object-cover'
                                onClick={() => setSelectedImage(badge)}
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
                    <img src={selectedImage} alt="Enlarged Badge" className="h-60 md:h-80 lg:h-full max-w-3xl max-h-[80vh] rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    )
}

export default AboutCertificate