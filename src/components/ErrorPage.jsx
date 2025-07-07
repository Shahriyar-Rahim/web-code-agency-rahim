
import { Link } from "react-router"
import errorIcon from "../assets/rocket-icon.png"

const ErrorPage = ({message=" Page not found", code= 404}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-screen space-y-5'>
        <img src={errorIcon} alt="errorIcon"/>
        <h1 className="text-4xl font-bold text-gray-700">{message}</h1>
        <p className="text-[21272A] md:w-2/5 w-full mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati ratione quas suscipit possimus, praesentium soluta officia distinctio. Excepturi sunt vel quia qui vero cupiditate iste corporis id nihil maiores earum, harum eaque atque dicta enim. Cupiditate, impedit dolor ea omnis explicabo, accusantium dignissimos quibusdam perferendis alias optio cum! Sit?</p>

        <Link to="/" className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-700 transition"> Go to Home Page</Link>
    </div>
  )
}

export default ErrorPage