import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const services = [
    {
        icon: FiCalendar,
        title: "Customizable Settings",
        description: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
        icon: FiCompass,
        title: "Developer-Friendly",
        description: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
    },
    {
        icon: FiActivity,
        title: "Responsive Design",
        description: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
    },
    {
        icon: FiTruck,
        title: "Cloud Integration",
        description: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
    },
]

const Services = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <HeadingSection heading="Explore our range of professional services tailored to meet your business needs" subheading="services" description="A dummy is a type of doll that looks like a person. Entertainers called ventriloquists can make dummies appear to talk. The automobile industry uses dummies in cars to study how safe cars are during a crash. A dummy can also be anything that looks real but doesn’t work: a fake. Actors in a play might use certain props that are dummies, such as a dummy laptop. Dummy is also an insult used to mean “an ignorant person.”" />

        {/* Services container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16'>
            {
                services.map((service, index) => (
                    <div key={index} className="flex flex-col text-center p-6 items-center hover:shadow-xl hover:rounded-md transition cursor-pointer">
                        <service.icon className='text-blue-600 text-4xl mb-4 ' />
                        <p className='text-gray-600 mt-2 md:px-10'>{service.description}</p>

                    </div>
                ))
            }
        </div>

        {/* Button */}
        <div className="text-center">
            <button className="bg-blue-600 text-white px-12 py-3 rounded-md hover:bg-blue-700 transition ">
                Explore More
            </button>
        </div>
    </div>
  )
}

export default Services