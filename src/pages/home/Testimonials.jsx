import React from 'react'
import HeadingSection from '../../components/HeadingSection'

const Testimonials = () => {
    return (
        <div className='bg-[#F2F4F8]'>
            <div className='section-container'>
                <HeadingSection
                    heading="What Our Clients says"
                    subheading="testimonials"
                    description=""
                />

                {/* testimonial carousel */}
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        J
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        S
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Smith Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, MaoCorp</p>
                                </div>
                            </div>

                            {/* <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" /> */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        J
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        S
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Smith Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, MaoCorp</p>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        J
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        S
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Smith Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, MaoCorp</p>
                                </div>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        J
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                                <div>

                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>

                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam suscipit eligendi maxime ad similique, voluptates accusantium non, quae nihil facere laboriosam laborum incidunt? Ipsam, et! Ullam possimus eos obcaecati qui.</p>

                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold '>
                                        S
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Smith Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, MaoCorp</p>
                                </div>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials