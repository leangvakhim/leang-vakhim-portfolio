import React from 'react'
import MenuSmallScreen from '../MenuSmallScreen'
import MenuLargeScreen from '../MenuLargeScreen'
import ShortHorizontalLine from '../ShortHorizontalLine'
import BlogInformation from './BlogInformation'

const BlogBody = () => {
    return (
        <section className='relative flex flex-col border rounded-2xl mx-4 lg:mx-auto my-4 bg-[#1C1C1D] !border-[#383838] max-w-5xl overflow-x-hidden'>
            {/* menu for small screen*/}
            <MenuSmallScreen/>
            {/* title */}
            <div className='flex justify-between relative py-2 '>
                <h1 className='px-8 mt-6 text-3xl poppins-semibold !text-[#F8F8F8]'>Blog</h1>
                {/* menu for large screen*/}
                <MenuLargeScreen/>
            </div>
            {/* short horizontal line */}
            <ShortHorizontalLine/>
            <BlogInformation/>
        </section>
    )
}

export default BlogBody