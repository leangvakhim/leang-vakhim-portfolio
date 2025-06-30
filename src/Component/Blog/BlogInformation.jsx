import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import blog1 from "../../assets/photo/blog-1.jpg";
import blog2 from "../../assets/photo/blog-2.jpg";
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const BlogInformation = () => {
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);

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
        const fetchBlog = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getBlog);
                const allData = response?.data.data || [];

                const newsArray = allData.filter(item => item.display === 1);
                if (newsArray && !Array.isArray(newsArray)) {
                    newsArray = [newsArray];
                } else if (!newsArray) {
                    newsArray = [];
                }

                const updatedNewsArray = await Promise.all(newsArray.map(async (item) => {
                    const image = await fetchImageById(item.b_img);
                    return {
                        ...item,
                        image: image
                    };
                }));

                setBlogs(updatedNewsArray);
            }catch(error){
                console.error("Failed to fetch the information: ", error);
            }
        }

        fetchBlog();
    }, [])

    return (
        <div className='px-8 py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.b_id}
                        className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl !bg-[#202022]'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        onClick={() => {
                            setModalData(blog);
                            setIsModalOpen(true);
                        }}
                    >
                        <div className='w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={blog?.image.image_url}
                                className='w-full md:h-80 h-full rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                            />
                        </div>
                        <div className='flex flex-col px-6 py-8'>
                            <h1 className='poppins-regular text-[12px] my-2 !text-[#929292]'>
                              {new Date(blog.b_date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </h1>
                            <h1 className='poppins-semibold text-2xl !text-[#F1F1F1] group-hover:!text-[#FFDB70]'>{blog.b_title}</h1>
                            <p className='poppins-light text-md !text-[#F1F1F1]'>
                                {blog.b_subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {isModalOpen && modalData && (
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-6 md:px-0">
                        <div className="bg-[#1E1E1F] p-6 rounded-xl max-w-md md:max-w-lg lg:max-w-2xl w-full relative text-white max-h-[90vh] overflow-y-auto">
                        <button
                            className="absolute top-3 right-3 text-white text-xl cursor-pointer"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x hover:text-yellow-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        </button>
                        <h1 className="text-xl poppins-semibold mb-2">{modalData.b_title}</h1>
                        <img
                            src={modalData.image.image_url}
                            alt={modalData.b_title}
                            className="w-full rounded-lg mb-4 "
                        />
                        <p className="text-sm poppins-regular text-gray-400 mb-4">
                        Post on: {new Date(modalData.b_date).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                        <div
                            className="text-sm text-gray-300 poppins-light"
                            dangerouslySetInnerHTML={{ __html: modalData.b_detail }}
                        />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogInformation