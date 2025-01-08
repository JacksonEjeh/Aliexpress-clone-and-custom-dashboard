import React, { useContext } from 'react'
import { GoHeart } from "react-icons/go";
import { SlUserFollowing } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { SlCreditCard } from "react-icons/sl";
import { AliExpressContext } from '../context/appContext';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const {handleLogOut} = useContext(AliExpressContext)
  return (
    <div className='pt-[73px] bg-gray-100 pb-10'>
        <div className='w-[84%] mx-auto'>
            <div className='text-xs p-5 flex items-center gap-1'>
                <Link to={"/ecommerce-home"} className='text-gray-400'>Home &gt;</Link>
                <p className='font-bold'>Account</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-[25%] py-4 bg-white relative'>
                    <div className='px-5 pb-2 text-lg bg-white'>
                        <h1 className='font-bold'>Account</h1>
                    </div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Overview</div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Password</div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Orders</div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Payment</div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Refund and return</div>
                    <div className='px-5 hover:bg-gray-100 py-2 cursor-pointer'>Feedback</div>
                    <div>
                        <button onClick={handleLogOut} className='bg-red-600 w-full absolute bottom-0 right-0 left-0 py-2 text-white font-bold'>logout</button>
                    </div>
                </div>
                <div className='w-[75%]'>
                    <div className='p-5 bg-white mb-5'>
                        <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center gap-4'>
                                <div className='size-16 rounded-full border bg-green-800'>
                                    <img className='size-full rounded-full' src="https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg" alt="" />
                                </div>
                                <h1 className='text-2xl font-bold'>Lizzy Jackson</h1>
                            </div>
                            <button className='px-4 py-1 border rounded-full text-sm'>Edit Profile</button>
                        </div>
                        <div className='w-[90%] mx-auto flex items-center justify-between'>
                            <div>
                                <GoHeart className='text-3xl mx-auto mb-1' />
                                <p className='text-'>Wish List</p>
                            </div>
                            <div>
                                <SlUserFollowing className='text-3xl mx-auto mb-1' />
                                <p className='text-'>Following</p>
                            </div>
                            <div>
                                <BsClockHistory className='text-3xl mx-auto mb-1' />
                                <p className='text-'>Viewed</p>
                            </div>
                            <div>
                                <MdOutlineDiscount className='text-3xl mx-auto mb-1' />
                                <p className='text-'>Coupons</p>
                            </div>
                            <div>
                                <SlCreditCard className='text-3xl mx-auto mb-1' />
                                <p className='text-'>Shopping credit</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 bg-white mb-5'>
                        <div className='text-lg font-bold mb-3 border-b pb-2'>User Details</div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <h1 className='font-bold mb-3'>First Name:</h1>
                                <h1 className='font-bold mb-3'>Last Name:</h1>
                                <h1 className='font-bold mb-3'>Email:</h1>
                                <h1 className='font-bold mb-3'>Phone:</h1>
                            </div>
                            <div>
                                <p className='mb-3'>Lizzy</p>
                                <p className='mb-3'>Jackson</p>
                                <p className='mb-3'>gabby@gmail.com</p>
                                <p className='mb-3'>07017532571</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 bg-white'>
                        <div className='mb-5 pb-2 border-b'>
                            <h1 className='text-lg font-bold'>More to love</h1>
                        </div>
                        <div className='grid grid-cols-5 gap-5'>
                            <div>
                                <div className='h-[160px] rounded-t-lg bg-gray-500'>
                                    <img className='size-full rounded-t-lg' src="https://ae-pic-a1.aliexpress-media.com/kf/S229d7ec5a8564fffa466be61a4866c9cx/Heavyweight-pure-cotton-high-end-Polo-shirt-men-s-spring-and-autumn-new-long-sleeved-T.jpg_350x350xz.jpg_.webp" alt="" />
                                </div>
                                <p className='text-sm'>Men's Fashion 2024 High Quality</p>
                                <p className='font-bold text-lg'>NGN23,506.77</p>
                                <p className='text-[11px] text-gray-400'>53 sold</p>
                            </div>
                            <div>
                                <div className='h-[160px] rounded-t-lg bg-gray-500'>
                                    <img className='size-full rounded-t-lg' src="https://ae-pic-a1.aliexpress-media.com/kf/S28acc07bd50d4ef4a1d2c7ab64d6d0a7f/Men-s-casual-shoes-Vulcanized-Work-loafers-Mesh-Lightweight-Man-sports-shoes-Canvas-Shoes-for-Men.jpg_350x350xz.jpg_.webp" alt="" />
                                </div>
                                <p className='text-sm'>Men's Fashion 2024 High Quality</p>
                                <p className='font-bold text-lg'>NGN23,506.77</p>
                                <p className='text-[11px] text-gray-400'>53 sold</p>
                            </div>
                            <div>
                                <div className='h-[160px] rounded-t-lg bg-gray-500'>
                                    <img className='size-full rounded-t-lg' src="https://ae-pic-a1.aliexpress-media.com/kf/Sff7ee29ab0fa451aaf63d1b1db73e428b/Wholesale-Used-Original-PS3-PS4-for-So-ny-playstation-Slim-3-4-1-TB-video-game.jpg_350x350xz.jpg_.webp" alt="" />
                                </div>
                                <p className='text-sm'>Men's Fashion 2024 High Quality</p>
                                <p className='font-bold text-lg'>NGN23,506.77</p>
                                <p className='text-[11px] text-gray-400'>53 sold</p>
                            </div>
                            <div>
                                <div className='h-[160px] rounded-t-lg bg-gray-500'>
                                    <img className='size-full rounded-t-lg' src="https://ae-pic-a1.aliexpress-media.com/kf/Sbd619c60c11145388e5eb5cbffc082e24/Men-s-New-Polo-Shirt-Seamless-Premium-Luxury-Cool-Fabric-Business-Casual-Golf-Slim-Fit-Blouse.jpg_350x350xz.jpg_.webp" alt="" />
                                </div>
                                <p className='text-sm'>Men's Fashion 2024 High Quality</p>
                                <p className='font-bold text-lg'>NGN23,506.77</p>
                                <p className='text-[11px] text-gray-400'>53 sold</p>
                            </div>
                            <div>
                                <div className='h-[160px] rounded-t-lg bg-gray-500'>
                                    <img className='size-full rounded-t-lg' src="https://ae-pic-a1.aliexpress-media.com/kf/S276dec31ae884ab0b3f590d37430dacfL/2024-Autumn-Winter-New-Fashion-Knitted-Cardigan-Coat-Men-s-Matching-Color-Casual-Loose-Sweater-Warm.jpg_350x350xz.jpg_.webp" alt="" />
                                </div>
                                <p className='text-sm'>Men's Fashion 2024 High Quality</p>
                                <p className='font-bold text-lg'>NGN23,506.77</p>
                                <p className='text-[11px] text-gray-400'>53 sold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
