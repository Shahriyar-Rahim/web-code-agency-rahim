import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaArrowRight } from 'react-icons/fa'

const NewsLetter = () => {
    return (
        <div className='section-container text-center'>
            <HeadingSection heading="stay updated with our newsletter" description=" Get the latest news and updates from us whenever we post something new and offer the best prices. Get the latest news and updates from us whenever we post something new and offer the best prices" />

            <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition cursor-pointer">
                    <span>Subscribe Now</span> <FaArrowRight />
                </button>

                <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition  cursor-pointer ">Learn More</button>
            </div>
        </div>
    )
}

export default NewsLetter