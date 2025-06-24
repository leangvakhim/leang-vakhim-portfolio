import React from 'react'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2';
import message from "../../assets/photo/paper-plane.png"
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const ContactForm = () => {
    const sendToTelegram = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const name = document.querySelector("input[placeholder='Full name']").value;
    const email = document.querySelector("input[placeholder='Email address']").value;
    const messageText = document.querySelector("textarea[placeholder='Your message']").value;

    const telegramUrl = 'https://leang-vakhim-portfolio.vercel.app/api/sendTelegram';

    try {
        const response = await fetch(telegramUrl, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                messageText
            })
        });

        if (response.ok) {

            const payload = {
                e_name: name,
                e_email: email,
                e_detail: messageText,
            };

            await axiosInstance.post(API_ENDPOINTS.createEmail, payload);
            Swal.close();
            Swal.fire({
            icon: 'success',
            title: 'Message sent!',
            text: 'Your message has been delivered successfully.',
            confirmButtonColor: '#FFD36A'
            });
        } else {
            throw new Error('Telegram API error');
        }
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: 'Failed to send',
                text: 'There was a problem sending your message. Please try again.',
                confirmButtonColor: '#FFD36A'
            });
        }
    };

    return (
        <div className='px-8 pb-16 md:pb-18 lg:pb-4 relative' >
            {/* title */}
            <h1 className='text-3xl poppins-semibold !text-[#F8F8F8]'>Contact Form</h1>
            {/* form */}
            <form onSubmit={sendToTelegram}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6'>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Full name"
                                    className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email address"
                                    className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='grid grid-cols-1 mt-2 mb-4'>
                    <div className='col-span-1'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className=' relative border-1 bg-[#232325] !border-[#383838] rounded-2xl' >
                                <textarea name="" id="" placeholder='Your message' rows="5" className="!text-[#F8F8F8] px-5 py-3.5 w-full rounded-2xl poppins-regular text-md ring-1 ring-transparent focus:ring-2 focus:ring-[#383838] focus:outline-none"></textarea>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* button */}
                <motion.div
                  className="w-full flex justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                    <button type="submit" className='cursor-pointer flex md:justify-end justify-center items-center px-6 py-4 border bg-[#212122] !border-[#383838] md:w-fit w-full h-full rounded-2xl !border-r-0 !border-b-0'>
                        <img src={message} alt="" className='h-4 w-4 shrink-0' />
                        <div className='flex ml-3 flex-col gap-1.5'>
                        <h2 className='font-medium !text-[#FFD36A] poppins-regular'>Send Message</h2>
                        </div>
                    </button>
                </motion.div>
            </form>
        </div>
    )
}

export default ContactForm