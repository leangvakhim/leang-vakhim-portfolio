import React, {useState} from 'react'
import { motion } from 'framer-motion';
import tis from '../../assets/photo/tis.png';
import aws_mlf from '../../assets/photo/aws-mlf.png';

const AboutBadge = () => {

    const badges = [tis, aws_mlf, tis, aws_mlf, tis, aws_mlf, tis, aws_mlf];
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className=' px-8 '>
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>Badges</h1>
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
                              className='cursor-pointer w-40 h-40 object-cover'
                              onClick={() => setSelectedImage(badge)}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            {selectedImage && (
              <div
                className="fixed inset-0 !bg-black !bg-opacity-50 flex items-center justify-center z-50 "
                onClick={() => setSelectedImage(null)}
              >
                <img src={selectedImage} alt="Enlarged Badge" className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg" />
              </div>
            )}
        </div>
    )
}

export default AboutBadge