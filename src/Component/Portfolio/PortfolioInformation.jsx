import React, { useState } from 'react'
import { motion } from 'framer-motion';
import web_design from "../../assets/photo/web-designs.png";
import application from "../../assets/photo/mobile-application.jpg";
import web_development from "../../assets/photo/web-development-application.png";
import eye from "../../assets/photo/eye.png";

const PortfolioInformation = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const categories = ['All', 'Web design', 'Application', 'Web development'];

    return (
        <div className='px-8 py-4'>
            {/* large screen */}
            <div className='hidden lg:block'>
                <div className='flex gap-6 items-start justify-start'>
                  {categories.map((category) => (
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
                      {categories.map((category) => (
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
                {(selectedCategory === 'All' || selectedCategory === 'Web design') && (
                  <>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_design}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web design</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_design}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web design</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_design}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web design</p>
                        </div>
                    </motion.div>
                  </>
                )}
                {(selectedCategory === 'All' || selectedCategory === 'Application') && (
                  <>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={application}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Application</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={application}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Application</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={application}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Application</p>
                        </div>
                    </motion.div>
                  </>
                )}
                {(selectedCategory === 'All' || selectedCategory === 'Web development') && (
                  <>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_development}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web development</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_development}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web development</p>
                        </div>
                    </motion.div>
                    <motion.div
                      className='col-span-1 cursor-pointer group relative overflow-hidden rounded-2xl'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                        <div className='lg:h-44 md:h-60 h-auto lg:w-70 w-full overflow-hidden rounded-2xl relative'>
                            <img
                                src={web_development}
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
                            <h1 className='mt-2 poppins-regular text-md !text-[#F1F1F1]'>Finance</h1>
                            <p className='poppins-regular text-md !text-[#929292]'>Web development</p>
                        </div>
                    </motion.div>
                  </>
                )}
            </div>
        </div>
    )
}

export default PortfolioInformation