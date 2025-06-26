import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import eye from "../../assets/photo/eye.png";
import { API_ENDPOINTS, axiosInstance } from '../APIConfig';

const PortfolioInformation = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [portfolios, setPortfolios] = useState([]);

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
        const fetchPortfolio = async () => {
            try{
                const response = await axiosInstance.get(API_ENDPOINTS.getPortfolio);
                const allData = response?.data.data || [];

                const newsArray = allData.filter(item => item.display === 1);
                if (newsArray && !Array.isArray(newsArray)) {
                    newsArray = [newsArray];
                } else if (!newsArray) {
                    newsArray = [];
                }

                const updatedNewsArray = await Promise.all(newsArray.map(async (item) => {
                    const image = await fetchImageById(item.p_img);
                    return {
                        ...item,
                        image: image
                    };
                }));

                setPortfolios(updatedNewsArray);
            }catch(error){
                console.error("Failed to fetch the information: ", error);
            }
        }

        fetchPortfolio();
    }, [])

    return (
        <div className='px-8 py-4'>
            {/* large screen */}
            <div className='hidden lg:block'>
                <div className='flex gap-6 items-start justify-start'>
                  {["All", ...new Set(portfolios.map((p) => p.p_category))].map((category) => (
                    <h1
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`cursor-pointer text-md poppins-regular ${
                        selectedCategory === category
                          ? '!text-[#FFDB70]'
                          : 'text-[#D6D6D6] hover:!text-[#FFDB70]'
                      }`}
                    >
                      {category}
                    </h1>
                  ))}
                </div>
            </div>
            {/* small screen */}
            <div className="lg:hidden flex flex-col gap-2">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='flex px-4 border border-[#363636] w-full items-start py-2 rounded-xl justify-between cursor-pointer'
                >
                    <h1 className='!text-[#D6D6D6] cursor-pointer'>{selectedCategory}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down text-[#D6D6D6] transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                </button>
                {isDropdownOpen && (
                  <div className='flex flex-col gap-1 items-start justify-start border border-[#363636] w-full py-2 px-2 rounded-xl'>
                      {["All", ...new Set(portfolios.map((p) => p.p_category))].map((category) => (
                          <h1
                              key={category}
                              onClick={() => {
                                  setSelectedCategory(category);
                                  setIsDropdownOpen(false);
                              }}
                              className={`cursor-pointer text-md poppins-regular w-full pl-2 pr-4 rounded-lg py-2 ${
                                  selectedCategory === category ? '!text-[#FFDB70] bg-[#383839]' : '!text-[#D6D6D6] hover:bg-[#383839]'
                              }`}
                          >
                              {category}
                          </h1>
                      ))}
                  </div>
                )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 py-12 w-full'>
                {portfolios
                  .filter((portfolio) => selectedCategory === 'All' || portfolio.p_category === selectedCategory)
                  .map((portfolio) => (
                    <motion.div
                        key={portfolio.p_id}
                        className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onClick={() => {
                            setModalData(portfolio);
                            setIsModalOpen(true);
                        }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={portfolio.image.image_url}
                                className='lg:h-44 md:h-60 h-auto lg:w-70 w-full   rounded-2xl object-fill transform transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
                            <div className="invisible group-hover:visible absolute inset-0 flex items-center justify-center z-20">
                                <div className="bg-[#1E1E1F] p-3.5 rounded-2xl">
                                    <img src={eye} alt="" className="w-6" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col px-2'>
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1] line-clamp-1'>{portfolio.p_title}</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>{portfolio.p_category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {isModalOpen && modalData && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-6 md:px-0">
                <div className="bg-[#1E1E1F] p-6 rounded-xl max-w-md md:max-w-lg lg:max-w-2xl w-full relative text-white max-h-[90vh] overflow-y-auto">
                  <button
                    className="absolute top-3 right-3 text-white text-xl cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x hover:text-yellow-400"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                  </button>
                  <h1 className="text-xl poppins-semibold mb-2">{modalData.p_title}</h1>
                  <img
                    src={modalData.image.image_url}
                    alt={modalData.p_title}
                    className="w-full rounded-lg mb-4 "
                  />
                  {/* <p className="text-sm poppins-regular text-gray-400 mb-4">{modalData.p_category}</p> */}
                  <div
                    className="text-sm text-gray-300 poppins-light"
                    dangerouslySetInnerHTML={{ __html: modalData.p_detail }}
                  />
                </div>
              </div>
            )}
        </div>
    )
}

export default PortfolioInformation