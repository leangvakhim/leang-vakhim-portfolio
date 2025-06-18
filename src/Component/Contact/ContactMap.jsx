import React from 'react'
import { motion } from 'framer-motion';

const ContactMap = () => {
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d464.4256113067386!2d104.92856067947044!3d11.545293909147391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2skh!4v1750238759616!5m2!1sen!2skh`;

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