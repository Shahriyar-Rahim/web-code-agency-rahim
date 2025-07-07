import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext'
import Swal from 'sweetalert2'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [error, setError] = useState("");

        
    const { loginEmail, googleLogin, facebookLogin, githubLogin, } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await loginEmail(data.email, data.password);
            console.log("Log in successful");
            Swal.fire({
                title: "Login Successful",
                icon: "success",
                draggable: true,
            });
            setError("")
            navigate("/")
        } catch (error) {
            console.error("Failed to login", error.message)
            setError("Failed to login, Please provide correct email and password")
        }
    }

    // google login
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate("/");
        } catch (error) {
            console.error("Failed to login with google", error.message)
        }
    }

    // facebook login
    const handlefbLogin = async () => {
        try {
            await facebookLogin();
            navigate("/");
        } catch (error) {
            console.error("Failed to login with facebook", error.message)
        }
    }

    // github login 
    const handleGitLogin = async () => {
        try {
            await githubLogin();
            navigate("/");
        } catch (error) {
            console.error("Failed to login with github", error.message)
        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-5'>
            <div className='bg-white p-8 rounded-lg shadow-md max-w-md w-full space-y-6'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Login</h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700 '>Email: </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address"
                                }
                            })}
                            placeholder='Enter your email' className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <p className=' text-sm italic text-red-500 mt-2'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700 '>Password: </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                            })}

                            type="password" placeholder='Enter your email' className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {/* errors will return when field validation fails  */}
                        {errors.password && <p className=' text-sm italic text-red-500 mt-2'>{errors.password.message}</p>}
                    </div>

                    {
                        error && <p className=' text-sm italic text-red-500'>{error}</p>
                    }


                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800'>Log In</button>
                </form>

                {/* social login */}

                <div className=' text-center space-y-4'>
                    <p className='text-gray-600'>or Log In with</p>

                    <div className='flex flex-col sm:flex-row w-full justify-center gap-4 '>
                        <button 
                        onClick={handleGoogleLogin}
                        className=' flex w-full items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded-lg hover:bg-red-800 '>
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button
                        onClick={handlefbLogin}
                        className='flex w-full items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded-lg hover:bg-blue-800 '>
                            <FaFacebook />
                            <span>Facebook</span>
                        </button>
                        <button
                        onClick={handleGitLogin}
                        className=' flex w-full items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 '>
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                    </div>


                </div>

                <p className=' text-sm text-center text-gray-600'>Don't have an account? please <Link className=' text-blue-600 hover:underline font-semibold' to="/register">Register</Link>, or go <Link to="/" className=' text-red-500  hover:underline font-semibold'>Home</Link></p>
            </div>
        </div>
    )
}

export default Login