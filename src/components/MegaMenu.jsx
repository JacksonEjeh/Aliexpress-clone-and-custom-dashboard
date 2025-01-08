import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiWatchLight } from "react-icons/pi";
import { SlHome } from "react-icons/sl";
import hair from '../images/hair.png'
import men from '../images/men.png'
import electronic from '../images/elec.png'
import home from '../images/home.png'
import homeApp from '../images/homeApp.png'
import motor from '../images/motocycle.png'
import bag from '../images/bag.png'
import shoe from '../images/shoe.png'
import special from '../images/special.png'
import women from '../images/women.png'
import { useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
    //logic
    const [isFirstModalVisible, setIsFirstModalVisible] = useState(false)
    const [isSecondModalVisible, setIsSecondModalVisible] = useState(false)
  return (
    <div className='pt-[73px]'>
        <div className='bg-black text-white flex gap-3 px-[190px] py-3'>
            <div className='relative' onMouseEnter={()=>{setIsFirstModalVisible(true)}} onMouseLeave={()=>{setIsFirstModalVisible(false)}}>
                <div className='flex items-center bg-white/30 px-6 py-[6px] rounded-full gap-11'>
                    <div className='flex items-center gap-2 text-[17px]'>
                        <HiOutlineMenu />
                        <p>All Categories</p>
                    </div>
                    <MdOutlineKeyboardArrowDown className='text-xl' />
                </div>
                {isFirstModalVisible && <div className=' shadow-xl bg-gray-100 rounded-2xl absolute top-0 left-0 right-0 text-black'>
                    <div className='flex items-center px-6 py-[8px] gap-11'>
                        <div className='flex items-center gap-2 text-[17px] text-black'>
                            <HiOutlineMenu />
                            <p className='font-semibold'>All&nbsp;Categories</p>
                        </div>
                        <MdOutlineKeyboardArrowDown className='text-xl text-black' />
                    </div>
                    <div  onMouseEnter={()=>{setIsSecondModalVisible(true)}} onMouseLeave={()=>{setIsSecondModalVisible(false)}} className=''>
                        <div className=''>
                            <div onMouseEnter={()=>{setIsSecondModalVisible(true)}} onMouseLeave={()=>{setIsSecondModalVisible(false)}}>
                                <div className="flex items-center gap-2 hover:bg-white hover:font-bold px-6 py-[7px] text-black cursor-pointer">
                                    <PiWatchLight className='text-[20px]' />
                                    <p>Accessories</p>
                                </div>
                                {isSecondModalVisible && 
                                    <div className="bg-white absolute shadow-md w-[50rem] left-[240px] top-[20px] rounded-3xl p-5 z-20">
                                        <div className="grid grid-cols-4 gap-5">
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Glasses</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Prescription Glasses</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Eyeglass Lenses</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Reading Glasses</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Blue Light Blocking Gla...</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Kid's Frames</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500"><Link to={'/shopPage'}>All Products</Link></p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Scarves & Gloves</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Skill Scarves</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Knitted Gloves</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Silk Scarves & Ribbons</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Solid Color Wool Scarves</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Cashmere Wool Scarves</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Plaid Scarves</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Hats</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Top Hats</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Fun Hats</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">One piece Hats</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Sun Hats</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Kid's Sun Hats</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Baseball Caps</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Belts</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Waist Chain</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Men's Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Fashion Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Belts ACCESSORIES</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Outdoor Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Women's Belts</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Belts</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Waist Chain</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Men's Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Fashion Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Belts ACCESSORIES</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Outdoor Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Women's Belts</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Belts</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Waist Chain</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Men's Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Fashion Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Belts ACCESSORIES</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Outdoor Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Women's Belts</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='font-bold text-[16px] mb-1'>Belts</h1>
                                                <div className='text-gray-600'>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Waist Chain</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Men's Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Fashion Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Belts ACCESSORIES</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Outdoor Belts</p>
                                                    <p className="mb-1 cursor-pointer hover:text-orange-500">Women's Belts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <SlHome className='text-[16px]' />
                            <p>Home & Garden</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={hair} alt="" />
                            <p>Hair&nbsp;Extension&nbsp;&&nbsp;Wigs</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={men} alt="" />
                            <p>Men's&nbsp;Clothing</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={electronic} alt="" />
                            <p>Consumer&nbsp;Electronics</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={home} alt="" />
                            <p>Home&nbsp;Improvement & Lighting</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={homeApp} alt="" />
                            <p>Home&nbsp;Appliances</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={motor} alt="" />
                            <p>Automotive&nbsp;Motorcycle</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={bag} alt="" />
                            <p>Luggages&nbsp;Bags</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={shoe} alt="" />
                            <p>Shoes</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={special} alt="" />
                            <p>Special&nbsp;Occasion Costume</p>
                        </div>
                        <div className='flex items-center px-6 py-[7px] gap-2 text-black cursor-pointer hover:bg-white hover:font-bold'>
                            <img className='w-[19px]' src={women} alt="" />
                            <p>Women&nbsp;Clothing</p>
                        </div>
                    </div>
                </div>}
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-6 py-[6px] rounded-full'>
                <p className='text-red-600 font-bold'>Bundle deals</p>
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-6 py-[6px] rounded-full'>
                <p>Home improvement</p>
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-6 py-[6px] rounded-full'>
                <p>Weekly deals</p>
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-6 py-[6px] rounded-full'>
                <p>Top Brands</p>
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-6 py-[6px] rounded-full'>
                <p>Bestsellers</p>
            </div>
            <div className='flex cursor-pointer items-center hover:bg-white/30 px-5 py-1 rounded-full'>
                <p className='flex items-center'>more <MdOutlineKeyboardArrowDown className='text-lg' /></p>
            </div>
        </div>
    </div>
  )
}

export default MegaMenu
