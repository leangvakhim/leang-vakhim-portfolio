import React from 'react'
import { motion } from 'framer-motion';

const AboutDescription = () => {
    return (
        <motion.div
            className='px-8 mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <p className='poppins-regular text-justify'>
                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                <br/>
                <br/>
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>
        </motion.div>
    )
}

export default AboutDescription