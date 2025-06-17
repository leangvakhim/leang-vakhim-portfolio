import React from 'react'
import { motion } from 'framer-motion';
import tis from '../../assets/photo/tis.png';

const AboutBadge = () => {

    const badges = [tis, tis, tis, tis, tis, tis, tis, tis, tis];

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
                            <img src={badge} alt={`Badge ${index + 1}`} className='w-40 h-auto'/>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default AboutBadge