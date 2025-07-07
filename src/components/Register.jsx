import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext'
import Swal from 'sweetalert2'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { signUpEmail, googleLogin, facebookLogin, githubLogin } = useAuth()

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await signUpEmail(data.email, data.password);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Register me!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Registration Successful!",
                        text: "Provide your email and password to login.",
                        icon: "success"
                    });
                }
            });

            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error.message)
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
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>

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
                                required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" }
                            })}

                            type="password" placeholder='Enter your email' className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {/* errors will return when field validation fails  */}
                        {errors.password && <p className=' text-sm italic text-red-500 mt-2'>{errors.password.message}</p>}
                    </div>


                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800'>Sign Up</button>
                </form>

                {/* social login */}

                <div className=' text-center space-y-4'>
                    <p className='text-gray-600'>or Sign Up with</p>

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

                <p className=' text-sm text-center text-gray-600'>Have an account? please <Link className=' text-blue-600 hover:underline font-semibold' to="/login">Login</Link>, or go <Link to="/" className=' text-red-500  hover:underline font-semibold'>Home</Link></p>
            </div>
        </div>
    )
}

export default Register