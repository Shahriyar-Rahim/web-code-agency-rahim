import { FiCloud, FiCode, FiSettings, FiSmartphone } from "react-icons/fi"
import HeadingSection from "../../components/HeadingSection"

const tools = [
    {
        icon: FiSettings,
        title: "Customizable Settings",
        description: "Customize your experience with our settings panel combined beautifully.",

    },
    {
        icon: FiCode,
        title: "Industry Leading Code Editor",
        description: "Write code with our industry leading code editor that supports syntax highlighting, auto-completion."

    },
    {
        icon: FiSmartphone,
        title: "Developer Friendly",
        description: "Our code is clean, readable and well-documented for easy integration.",

    },
    {
        icon: FiCloud,
        title: "Responsive Design",
        description: "Our design is fully responsive and works perfectly on all devices.",

    },
]

const ToolsSec = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        {/* Heading */}
        {/* <div className='text-center mb-10'>
            <p className='uppercase text-blue-600 font-semibold '>The tools you need</p>
            <h2 className='text-3xl lg:text-4xl font-bold to-gray-800 mt-6'>All-in-One Solution for Your Projects</h2>
        </div> */}
        <HeadingSection heading={"All-in-One Solution for Your Projects"} subheading={"The tools you need"} />
        
        {/* render tools here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
            {
                tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 lg:hover:-translate-y-3 cursor-pointer">
                        <tool.icon className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
                        <p className="text-gray-600 mt-2">{tool.description}</p>
                    </div>
                    
                ))
            }
        </div>
        {/* Button */}
        <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition ">
                Explore More
            </button>
        </div>
    </div>
  )
}

export default ToolsSec