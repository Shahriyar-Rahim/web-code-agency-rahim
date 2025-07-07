import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaMicrosoft } from 'react-icons/fa'

const Companylogo = () => {
    const logos = [
        {
            icon: FaApple,
            name: 'Apple',
        },
        {
            icon: FaMicrosoft,
            name: 'Microsoft',
        },
        {
            icon: FaGoogle,
            name: 'Google',
        },
        {
            icon: FaFacebook,
            name: 'Facebook',
        },
        {
            icon: FaAmazon,
            name: 'Amazon',
        },
    ]
  return (
    <div className='bg-[#F2F4F8]'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <HeadingSection heading="Companies We'hve Worked With" subheading="our trusted partners" description="We'hve partnered with some of the world's leading companies to deliver innovative solutions."/>


            {/* logo container section */}
            <div className='relative overflow-hidden border-y-[1px] border-blue-300 p-8'>
                <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
                    {
                        logos.map((logo, index) => (
                            <div key={index} className='flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform'>
                                <logo.icon className=' text-blue-600 text-4xl' title={logo.name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Companylogo