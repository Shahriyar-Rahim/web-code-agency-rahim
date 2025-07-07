import { FaArrowRight, FaRegCirclePlay } from "react-icons/fa6";
import bannerImg from "../../assets/banner.png"
import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

const HeroSection = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    // for get started button
    const { user } = useAuth();
    return (
        <div className='bg-[#F2F4F8]'>
            <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
                {/* Left Side */}
                <div className='lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-4'>Creative Web Design For Businesses</h1>
                    <p className='text-lg text-gray-600 mb-6'>Unlock your design skills to create beautiful websites and apps with a poweful and easy-to-use tool.</p>
                    <div className="flex flex-col md:flex-row lg:justify-start justify-center gap-4">
                        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition ">
                                        <span><Link to="/login">Get Started</Link></span> <FaArrowRight />
                                    </button> */}
                        {
                            user ? (
                                <>
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition focus:ring-2 focus:ring-red-400">
                                        <span><Link to="/services">Explore</Link></span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition focus:ring-2 focus:ring-red-400" >
                                        <span><Link to="/login">Get Started</Link></span> <FaArrowRight />
                                    </button>
                                </>
                            )
                        }

                        <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition ">Contact Us</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
                    <div className="relative group">
                        <img src={bannerImg} alt="bannerimage" className="rounded-lg" /></div>
                    <button
                        onClick={openModal}
                        className="absolute inset-0 flex items-center justify-center rounded-lg lg:ml-30 group-hover:opacity-75 transition z-0">
                        <FaRegCirclePlay className="text-white text-5xl hover:text-blue-600" />
                    </button>
                </div>

                {/* Modal */}

                {
                    showModal && <div className="fixed inset-0 flex items-center justify-center bg-black opacity-70 z-50">
                        <div className="bg-gray-400 mt-30 p-5 rounded-lg shadow-lg relative max-w-xl w-full ">
                            <button className="cursor-pointer absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full" onClick={closeModal}>&times;</button>
                            <iframe
                                className="w-full aspect-video"
                                width="560" height="315" src="https://www.youtube.com/embed/sgEVF9yv6JE?si=jyd884gaDF-ZhKD6&amp;start=300" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeroSection