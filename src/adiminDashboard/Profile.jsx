import React, { useContext } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { BsThreeDots } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

const Profile = () => {
    const {closeSidebar, formData, focused, editProfile, toggleEditProfile, updatedInfo, handleUpdateChange, handleUpdateFormSubmit, updateFormErrors} = useContext(AliDashboardContext)

  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0' : 'z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className='p-10'>
            <div className='w-[60%] mx-auto h-full'>
                <div className='bg-green-300 border h-[300px] relative'>
                    <img className='h-full w-full' src={updatedInfo.banner} alt="" />
                    <div className='absolute bottom-[-190px] left-14 flex gap-5 flex-col items-center justify-center'>
                        <div className='size-[230px] rounded-full border-2 border-white'>
                            <img className='h-full w-full rounded-full' src={updatedInfo.icon} alt="" />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-custom-text font-bold text-3xl'>{updatedInfo.store_name}</h1>
                            <p className='text-sm'>C.E.O: {updatedInfo.first_name} {updatedInfo.last_name}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-5 py-3 pb-[170px] border border-secondary mb-5'>
                    <div className='flex items-center gap-2'>
                        <button className='size-10 flex cursor-pointer hover:border-white transition-colors duration-500 items-center justify-center text-lg border-2 border-secondary rounded-full'><BsThreeDots /></button>
                        <button className='size-10 flex items-center cursor-pointer hover:border-white transition-colors duration-500 justify-center text-lg border-2 border-secondary rounded-full relative'>
                            <TbMessage2 />
                            <p className='size-5 rounded-full bg-red-500 text-xs font-bold flex items-center justify-center absolute top-[-7px] right-[-3px]'>2</p>    
                        </button>
                        <button className='px-4 py-2 text-sm cursor-pointer hover:border-white transition-colors duration-500 border-2 border-secondary rounded-full' onClick={toggleEditProfile}>Edit Profile</button>
                    </div>
                </div>
                <div className={editProfile ? 'hidden':'mb-10'}>
                    <div className='bg-primary mb-5  px-5 py-1'>
                        <h1 className='text-custom-text font-bold text-xl'>Top Selling Products</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='bg-primary p-5'>
                            <div className='mb-5'>
                                <div className='h-[220px] mb-2 relative'>
                                    <img className='w-full h-full ' src="https://ae-pic-a1.aliexpress-media.com/kf/S0398a480df804944b6092336fa33727eq/Men-s-Fashion-Shoes-for-Men-New-Skateboard-Shoes-Platform-Casual-Sneakers-Trend-Design-Patchwork-Mesh.jpg_.webp" alt="" />
                                    <button className='bg-white border border-black hover:border-white transition-colors duration-500 text-black size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                        <BsCartPlus className='text-[25px] font-bold'/>
                                    </button>
                                </div>
                                <div className='overflow-hidden'>
                                    <p className='text-custom-text text-sm mb-1'>Men's Fashion Shoes for Men New Skateboard</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex'>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStarHalf className='text-[13px] text-yellow-600'/>
                                        </div>
                                        <p className='text-[13px] text-custom-text'>800+ sold</p>
                                        <div className='text-yellow-700 bg-gray-100 text-[11px] px-1 border font-bold'>Top Selling</div>
                                    </div>
                                    <h1 className='font-bold text-custom-text'><span className='text-xs'>NGN</span><span className='text-2xl'>7,128.60</span><span className='text-xs'>.06</span></h1>
                                    <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                                    <p className='text-xs'>Free shipping</p>
                                </div>
                            </div>
                            <div className='items-center shadow-sm justify-between flex'>
                                <button className='border border-custom-text hover:border-white hover:bg-white/5 text-white text-sm font-bold px-10 transition-colors duration-500 py-[10px] rounded-full'>See preview</button>
                                <div className='cursor-pointer transition-colors duration-500 hover:border-2 group border border-custom-text hover:border-white text-white size-10 flex items-center justify-center rounded-full relative'><BsThreeDots />               
                                    <div className='hidden group-hover:block bg-primary py-2 w-[150px] rounded-lg absolute right-[-140px] bottom-[-50px]'>
                                        <div className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                            <RiEditLine />
                                            <p className='text-white text-sm'>Edit</p>
                                        </div>
                                        <div className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                            <RiDeleteBin5Line />
                                            <p className='text-white text-sm'>Delete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-primary p-5'>
                            <div className='mb-5'>
                                <div className='h-[220px] mb-2 relative'>
                                    <img className='w-full h-full ' src="https://ae-pic-a1.aliexpress-media.com/kf/S0398a480df804944b6092336fa33727eq/Men-s-Fashion-Shoes-for-Men-New-Skateboard-Shoes-Platform-Casual-Sneakers-Trend-Design-Patchwork-Mesh.jpg_.webp" alt="" />
                                    <button className='bg-white border border-black hover:border-white transition-colors duration-500 text-black size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                        <BsCartPlus className='text-[25px] font-bold'/>
                                    </button>
                                </div>
                                <div className='overflow-hidden'>
                                    <p className='text-custom-text text-sm mb-1'>Men's Fashion Shoes for Men New Skateboard</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex'>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStar className='text-[13px] text-yellow-600'/>
                                            <BiSolidStarHalf className='text-[13px] text-yellow-600'/>
                                        </div>
                                        <p className='text-[13px] text-custom-text'>800+ sold</p>
                                        <div className='text-yellow-700 bg-gray-100 text-[11px] px-1 border font-bold'>Top Selling</div>
                                    </div>
                                    <h1 className='font-bold text-custom-text'><span className='text-xs'>NGN</span><span className='text-2xl'>7,128.60</span><span className='text-xs'>.06</span></h1>
                                    <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                                    <p className='text-xs'>Free shipping</p>
                                </div>
                            </div>
                            <div className='items-center shadow-sm justify-between flex'>
                                <button className='border border-custom-text hover:border-white hover:bg-white/5 text-white text-sm font-bold px-10 transition-colors duration-500 py-[10px] rounded-full'>See preview</button>
                                <div className='cursor-pointer transition-colors duration-500 hover:border-2 group border border-custom-text hover:border-white text-white size-10 flex items-center justify-center rounded-full relative'><BsThreeDots />               
                                    <div className='hidden group-hover:block bg-primary py-2 w-[150px] rounded-lg absolute right-[-140px] bottom-[-50px]'>
                                        <div className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                            <RiEditLine />
                                            <p className='text-white text-sm'>Edit</p>
                                        </div>
                                        <div className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                            <RiDeleteBin5Line />
                                            <p className='text-white text-sm'>Delete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={editProfile ? 'p-5 border border-secondary': 'hidden'}>
                    <div className='text-right mb-5'>
                        <button className='border px-4 py-1 rounded-full hover:bg-white/10' onClick={toggleEditProfile}>close</button>
                    </div>
                    <form onSubmit={handleUpdateFormSubmit}>
                        <div className="grid grid-cols-2 gap-5 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='first_name'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.first_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        First Name
                                    </label>
                                    {updateFormErrors.first_name && <p className='text-red-500 text-xs absolute'>{updateFormErrors.first_name}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='last_name'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.last_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Last Name
                                    </label>
                                    {updateFormErrors.last_name && <p className='text-red-500 text-xs absolute'>{updateFormErrors.last_name}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='email'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.email}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Email
                                    </label>
                                    {updateFormErrors.email && <p className='text-red-500 text-xs absolute'>{updateFormErrors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='phone'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.phones}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Phone
                                    </label>
                                    {updateFormErrors.phones && <p className='text-red-500 text-xs absolute'>{updateFormErrors.phones}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='store_name'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.store_name}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Store Name
                                    </label>
                                    {updateFormErrors.store_name && <p className='text-red-500 text-xs absolute'>{updateFormErrors.store_name}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='descp'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.descp}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Description
                                    </label>
                                    {updateFormErrors.descp && <p className='text-red-500 text-xs absolute'>{updateFormErrors.descp}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='icon'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.icon}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Icon
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Image URL</p>
                                    {updateFormErrors.icon && <p className='text-red-500 text-xs absolute'>{updateFormErrors.icon}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='banner'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.banner}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Banner
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Image URL</p>
                                    {updateFormErrors.banner && <p className='text-red-500 text-xs absolute'>{updateFormErrors.banner}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='state'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.state}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        State
                                    </label>
                                    {updateFormErrors.state && <p className='text-red-500 text-xs absolute'>{updateFormErrors.state}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='district'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.district}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        District
                                    </label>
                                    {updateFormErrors.district && <p className='text-red-500 text-xs absolute'>{updateFormErrors.district}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 mb-5">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='x'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.social_media.x}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Twitter
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Profile URL</p>
                                    {/* {errors.icon && <p className='text-red-500 text-xs absolute'>{errors.icon}</p>} */}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='instagram'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.social_media.instagram}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Instagram
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Profile URL</p>
                                    {/* {errors.icon && <p className='text-red-500 text-xs absolute'>{errors.icon}</p>} */}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='facebook'
                                        onChange={handleUpdateChange}
                                        value={updatedInfo.social_media.facebook}
                                    />
                                    <label
                                        className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Facebook
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Profile URL</p>
                                    {/* {errors.banner && <p className='text-red-500 text-xs absolute'>{errors.banner}</p>} */}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-red-600/20 transition-colors duration-500 hover:bg-red-700 text-red-600 hover:text-white cursor-pointer shadow-xl py-2 px-16 rounded flex items-center justify-center">
                                <p className="font-semibold">Update</p>
                            </button>
                        </div>
                        {/* {errors.emailExist && <p className='text-red-500 text-lg absolute'>{errors.emailExist}</p>} */}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
