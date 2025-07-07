import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router';

const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];


const TeamSection = () => {
  return (
    <div className='bg-[#F2F4F8]'>
        <div className='section-container'>
            <HeadingSection heading="meet the experts" subheading="our teams" description=""/>

            {/* team members */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    teamMembers.map((mem, i) => (
                        <div key={i} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                            <img src={mem.image} alt={mem.name} className='w-full h-56 object-cover' />

                            {/* conten */}
                            <div className='p-5'>
                                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{mem.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{mem.role}</p>

                                {/* social icons */}
                                <div className='flex space-x-4 mb-5 items-center'>
                                    <Link to={mem.linkedIn}><FaLinkedinIn className='text-blue-600 hover:text-blue-800'/></Link>
                                    <Link to={mem.facebook}><FaFacebookF className='text-blue-600 hover:text-blue-800'/></Link>
                                    <Link to={mem.instagram}><FaInstagram className='text-pink-600 hover:text-blue-800'/></Link>
                                    <Link to={mem.twitter}><FaTwitter className='text-green-600 hover:text-blue-800'/></Link>
                                </div>

                                {/* button contact */}
                                <button className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Contact {mem.name.split(" ")[0]}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TeamSection