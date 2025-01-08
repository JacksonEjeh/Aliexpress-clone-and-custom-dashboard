import React, { useContext } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import OrderStatistics from '../dashboardComponents/Chart';
import { BiLike } from "react-icons/bi";
import { LuTruck } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { LuWallet2 } from "react-icons/lu";
import DashboardCard from '../dashboardComponents/DashboardCard';
import DashboardTable from '../dashboardComponents/Orders';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    const {closeSidebar, updatedInfo} = useContext(AliDashboardContext)
  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white' : 'w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className='p-5'>
            <div className='flex items-center justify-between mb-5'>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Ecommerce</p>
                    <p><HiMiniChevronDoubleRight className='pt-1 text-lg' /></p>
                    <p className='text-custom-text text-sm'>Dashboard</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Dashboard</p>
                </div>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='w-[30%]'>
                    <OrderStatistics />
                    <DashboardCard />
                </div>
                <div className='w-[70%]'>
                    <div className='flex bg-primary rounded-lg p-5 mb-5'>
                        <div className='w-[20%]'>
                            <img className='h-[150px]' src="https://themesdesign.in/tailwick/html-rtl/assets/images/dashboard.png" alt="" />
                        </div>
                        <div className='text-right w-[80%] flex justify-end'>
                            <div className='w-[65%]'>
                                <h1 className='text-lg font-semibold mb-3'>🎉 Welcome {updatedInfo.first_name} {updatedInfo.last_name}</h1>
                                <p className='text-sm text-custom-text font-semibold mb-5'>An ecommerce dashboard has just that purpose. It provides your ecommerce team with a clear overview of key financial and website KPIs at any time</p>
                                <Link to={"/newProduct"}><button className='text-sm font-bold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md'>Add a product</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='bg-primary rounded-lg p-5 flex-col flex justify-center items-center'>
                            <div className='size-14 mb-3 rounded-full text-red-600 flex items-center justify-center text-2xl bg-red-500/20'>
                                <BiLike />
                            </div>
                            <p className='text-xl font-bold mb-2'>3,510</p>
                            <p className='text-custom-text text-sm'>Total Likes</p>
                        </div>
                        <div className='bg-primary rounded-lg p-5 flex-col flex justify-center items-center'>
                            <div className='size-14 mb-3 rounded-full text-green-600 flex items-center justify-center text-2xl bg-green-500/20'>
                                <LuTruck />
                            </div>
                            <p className='text-xl font-bold mb-2'>15,150</p>
                            <p className='text-custom-text text-sm'>Delivered</p>
                        </div>
                        <div className='bg-primary rounded-lg p-5 flex-col flex justify-center items-center'>
                            <div className='size-14 mb-3 rounded-full text-purple-600 flex items-center justify-center text-2xl bg-purple-500/20'>
                                <BsBoxSeam />
                            </div>
                            <p className='text-xl font-bold mb-2'>17,461</p>
                            <p className='text-custom-text text-sm'>Total Orders</p>
                        </div>
                        <div className='bg-primary rounded-lg p-5 flex-col flex justify-center items-center'>
                            <div className='size-14 mb-3 rounded-full text-blue-600 flex items-center justify-center text-2xl bg-blue-500/20'>
                                <LuWallet2 />
                            </div>
                            <p className='text-xl font-bold mb-2'>$243.18k</p>
                            <p className='text-custom-text text-sm'>Total Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <DashboardTable />
            </div>
        </div>
    </div>
  )
}

export default LandingPage
