import React, { useContext } from 'react'
import graphic from '../images/graphic5.svg'
import { AliDashboardContext } from '../context/dashboardContext'
import { IoCloseSharp } from "react-icons/io5";

const Registration = () => {
        const {formData, directUserToEcommerce, directUserToDashboard, directUser, closeWelcomeAlert, isWelcomeAlert, focused, handleChange, errors, handleSubmit, regLogin, toggleRegLogin, loginFormData, handleLoginChange, loginErrors, handleLoginSubmit} = useContext(AliDashboardContext)

  return (
    <div className='bg-custom-color h-screen py-10'>
        {/* welcome alert */}
        <div className={isWelcomeAlert ? 'h-screen fixed top-0 left-0 right-0 bottom-0 bg-custom-color/90 flex items-center justify-center z-30': 'hidden'}>
            <div className="indicator w-[40%]">
                <div className="indicator-item indicator-bottom">
                    <button onClick={closeWelcomeAlert} className="btn bg-red-300 hover:text-white text-red-600 text-lg hover:bg-red-700 transition-colors duration-500"><span className='text-sm flex items-baseline'>Close <IoCloseSharp/></span></button>
                </div>
                <div className="card border bg-primary text-custom-text">
                    <div className="card-body">
                        <h2 className="card-title">Welcome User,</h2>
                        <p>To Jackson's AliExpress-inspired platform!</p>
                        <p className='font-bold text-custom-text'>You must Sign up as a merchant or Login to explore the eCommerce marketplace as a buyer or manage your Dashboard as a seller.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={directUser ? 'h-screen fixed top-0 left-0 right-0 bottom-0 bg-custom-color/90 flex items-center justify-center z-30' : 'hidden'}>
            <div className="bg-primary border text-center border-custom-text text-xl w-[40%] p-10 rounded-lg text-custom-text">
                <h1 className='font-bold'>{regLogin ? 'Congratulation you have login successfully' : 'Congratulation, your account has been created successfully'}</h1>
                <p className='text-lg mt-3'>Continue as a <span onClick={directUserToEcommerce} className='text-blue-500 hover:text-blue-600 cursor-pointer'>buyer</span>  or <span onClick={directUserToDashboard} className='cursor-pointer text-blue-500 hover:text-blue-600'>seller</span></p>
            </div>
        </div>
        <div className='bg-primary w-[90%] h-full mx-auto p-5 flex'>
            <div className='w-[35%] flex items-center justify-center'>
                <div className='px-14'>
                    <div className='mb-10'>
                        <h1 className='text-2xl text-custom-text font-bold mb-3'>Get more things done with your own dashboard.</h1>
                        <p className='text-custom-text font-light text-sm'>Your dashboard here gives you full control over managing categories and products—create, edit, and organize with ease. Track user interactions with your products, including likes, ratings, and reviews, and choose to interact directly with buyers. You can also monitor orders made by buyers to keep your operations running smoothly. Let’s start building your online store!</p>
                    </div>
                    <div>
                        <img src={graphic} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[65%] bg-secondary rounded-3xl p-10'>
                <div className={regLogin ? 'hidden':'mb-10'}>
                    <h1 className='text-2xl text-center font-bold text-white'>Sign up as Merchant</h1>
                    <p className='text-center text-white'>Get your account set-up now</p>
                </div>
                {/* Registration form */}
                <div className={regLogin ? 'hidden':'w-[90%] mx-auto'}>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-2 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='first_name'
                                        onChange={handleChange}
                                        value={formData.first_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        First Name
                                    </label>
                                    {errors.first_name && <p className='text-red-500 text-xs absolute'>{errors.first_name}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name="last_name"
                                        onChange={handleChange}
                                        value={formData.last_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Last Name
                                    </label>
                                    {errors.last_name && <p className='text-red-500 text-xs absolute'>{errors.last_name}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='email'
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Email
                                    </label>
                                    {errors.email && <p className='text-red-500 text-xs absolute'>{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='phones'
                                        onChange={handleChange}
                                        value={formData.phones}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Phone
                                    </label>
                                    {errors.phones && <p className='text-red-500 text-xs absolute'>{errors.phones}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='store_name'
                                        onChange={handleChange}
                                        value={formData.store_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Store Name
                                    </label>
                                    {errors.store_name && <p className='text-red-500 text-xs absolute'>{errors.store_name}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='descp'
                                        onChange={handleChange}
                                        value={formData.descp}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Description
                                    </label>
                                    {errors.descp && <p className='text-red-500 text-xs absolute'>{errors.descp}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-5">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='icon'
                                        onChange={handleChange}
                                        value={formData.icon}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Icon
                                    </label>
                                    <p className='text-xs text-custom-text'>Image URL</p>
                                    {errors.icon && <p className='text-red-500 text-xs absolute'>{errors.icon}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='banner'
                                        onChange={handleChange}
                                        value={formData.banner}
                                    />
                                    <label
                                        className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Banner
                                    </label>
                                    <p className='text-xs text-custom-text'>Image URL</p>
                                    {errors.banner && <p className='text-red-500 text-xs absolute'>{errors.banner}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='mb-7'>
                            <div className="relative">
                                <input
                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    name='password'
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                                <label
                                    className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Password
                                </label>
                                {errors.password && <p className='text-red-500 text-xs absolute'>{errors.password}</p>}
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className="relative">
                                <input
                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    name='retype_password'
                                    onChange={handleChange}
                                    value={formData.retype_password}
                                />
                                <label
                                    className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Re-type password
                                </label>
                                {errors.retype_password && <p className='text-red-500 text-xs absolute'>{errors.retype_password}</p>}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-red-600/20 transition-colors duration-500 hover:bg-red-700 text-red-600 hover:text-white cursor-pointer shadow-xl py-2 px-16 rounded flex items-center justify-center">
                                <p className="font-semibold text-lg ">Register</p>
                            </button>
                            <div>
                                <p className='text-custom-text'>Already have an account? <span className='text-blue-700 underline font-semibold cursor-pointer' onClick={toggleRegLogin}>Login</span></p>
                            </div>
                        </div>
                        {errors.emailExist && <p className='text-red-500 text-lg absolute'>{errors.emailExist}</p>}
                    </form>
                </div>
                {/* login form */}
                <div className={regLogin ? 'w-[90%] h-full mx-auto flex flex-col justify-center items-center' : 'hidden'}>
                    <div className='mb-10'>
                        <h1 className='text-2xl text-center font-bold text-white'>Welcome Back !</h1>
                        <p className='text-center text-white'>Sign in to continue</p>
                    </div>
                    <form onSubmit={handleLoginSubmit}>
                        <div className='mb-5'>
                            <div className="relative">
                                <input
                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    name='email'
                                    onChange={handleLoginChange}
                                    value={loginFormData.email}
                                />
                                <label
                                    className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Email
                                </label>
                                {loginErrors.email && <p className='text-red-500 text-xs absolute'>{loginErrors.email}</p>}
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className="relative">
                                <input
                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border border-custom-text appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    type='password'
                                    name='password'
                                    onChange={handleLoginChange}
                                    value={loginFormData.password}
                                />
                                <label
                                    className={`absolute text-md bg-secondary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    password
                                </label>
                                {loginErrors.password && <p className='text-red-500 text-xs absolute'>{loginErrors.password}</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-16">
                            <button className="bg-red-600/20 transition-colors duration-500 hover:bg-red-700 text-red-600 hover:text-white cursor-pointer shadow-xl py-2 px-16 rounded flex items-center justify-center">
                                <p className="font-semibold text-lg ">Login</p>
                            </button>
                            <div>
                                <p className='text-custom-text'>Don't have an account? <span className='text-blue-700 underline font-semibold cursor-pointer' onClick={toggleRegLogin}>SignUp</span></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration
