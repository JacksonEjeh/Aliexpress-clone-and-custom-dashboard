import React, { useContext, useState } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import outOfStock from '../images/out-of-stock.png'
import { LuPlus } from "react-icons/lu";


const Products = () => {
    const {closeSidebar, getProductData} = useContext(AliDashboardContext)

    const [listView, setListView] = useState(false)
    //list view
    const viewListProduct = ()=>{
        setListView(true)
    }
    //grid view
    const viewGridProduct = ()=>{
        setListView(false)
    }
    if (getProductData.length === 0) {
        return (
            <div className={closeSidebar ? 'w-[83%]' : 'w-[95%]'}>
                <div className={getProductData.length === 0 ? 'h-screen p-5 pt-[95px] bg-custom-color':'hidden'}>
                    <div className='bg-primary h-full  flex items-center justify-center flex-col rounded-lg'>
                        <p className='text-custom-color text-center mb-5 font-extrabold text-3xl'>No product yet</p>
                        <img className='h-[200px]' src={outOfStock} alt="" />
                        <div className='flex items-center gap-2 mt-5'>
                            <p className='text-custom-color text-center font-bold text-xl'>Click</p>
                            <Link to={"/newProduct"} className='cursor-pointer  hover:border group border border-custom-text hover:border-white text-white size-10 flex items-center justify-center gap-1 transition-all duration-500 rounded-full hover:w-[75px]'><LuPlus /> <span className='hidden group-hover:block'>Add</span></Link>
                            <p className='text-custom-color text-center font-bold text-xl'>to add a product</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0' : 'z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className={getProductData.length < 3 ? 'p-5 h-screen':"p-5"}>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <p className='font-semibold text-lg'>Products</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Dashboard</p>
                    <p><HiMiniChevronDoubleRight className='pt-1 text-lg' /></p>
                    <p className='text-custom-text text-sm'>Products</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[75%]'>
                    <div className='flex items-center justify-between mb-5'>
                        <div>
                            <p className='text-sm'>Showing all <span className='font-bold'>{getProductData.length}</span> items results</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button onClick={viewGridProduct} className={listView ? 'bg-primary text-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-custom-text p-2 rounded':'bg-blue-500 text-lg p-2 rounded'}><IoGridOutline /></button>
                            <button onClick={viewListProduct} className={listView ? 'bg-blue-500 text-lg p-2 rounded':'bg-primary text-lg hover:bg-blue-500 hover:text-white transition-colors duration-500 text-custom-text p-2 rounded'}><IoList /></button>
                        </div>
                    </div>
                    <div className={listView ? 'hidden':'grid grid-cols-4 gap-5'}>
                        {
                            getProductData?.map((pro)=>{
                                return(
                                    <div key={pro.id} className='bg-primary p-3 rounded-lg'>
                                        <div className='mb-5'>
                                            <div className='h-[220px] mb-2 relative'>
                                                <img className='w-full h-full ' src={pro.image} alt="" />
                                                <button className='bg-white border border-black hover:border-white transition-colors duration-500 text-black size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                                    <BsCartPlus className='text-[25px] font-bold'/>
                                                </button>
                                            </div>
                                            <div className='overflow-hidden'>
                                                <p className='text-custom-text text-sm mb-1'>{pro.title}</p>
                                                <div className='flex items-center gap-1'>
                                                    <div className='flex'>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStarHalf className='text-[13px] text-yellow-600'/>
                                                    </div>
                                                    <p className='text-[11px] text-custom-text'>{pro.total_sold}+sold</p>
                                                    <div className='text-yellow-700 bg-gray-100 text-[10px] px-1 border font-bold'>Top Selling</div>
                                                </div>
                                                <h1 className='font-bold text-custom-text'><span className='text-xs'>NGN</span><span className='text-2xl'>{pro.price}</span><span className='text-xs'>.06</span></h1>
                                                <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                                                <p className='text-xs'>Free shipping</p>
                                            </div>
                                        </div>
                                        <div className='items-center'>
                                            <Link to={`/Detail/${pro.id}`}><button className='border w-full border-custom-text hover:border-white hover:bg-white/5 text-white text-sm font-bold px-8 transition-colors duration-500 py-[10px] rounded-full'>See preview</button></Link>      
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={listView ? 'block':'hidden'}>
                        {
                            getProductData?.map((pro)=>{
                                return(
                                    <div key={pro.id} className='bg-primary p-5 rounded-lg flex justify-between mb-5'>
                                        <div className='flex gap-5'>
                                            <div className='size-[120px] mb-2 relative'>
                                                <img className='w-full h-full ' src={pro.image} alt="" />
                                                <button className='bg-white border border-black hover:border-white transition-colors duration-500 text-black size-[40px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                                    <BsCartPlus className='text-[25px] font-bold'/>
                                                </button>
                                            </div>
                                            <div className='overflow-hidden'>
                                                <p className='text-custom-text text-sm mb-1'>{pro.title}</p>
                                                <div className='flex items-center gap-1'>
                                                    <div className='flex'>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStar className='text-[13px] text-yellow-600'/>
                                                        <BiSolidStarHalf className='text-[13px] text-yellow-600'/>
                                                    </div>
                                                    <p className='text-[11px] text-custom-text'>{pro.total_sold}+sold</p>
                                                    <div className='text-yellow-700 bg-gray-100 text-[10px] px-1 border font-bold'>Top Selling</div>
                                                </div>
                                                <h1 className='font-bold text-custom-text'><span className='text-xs'>NGN</span><span className='text-2xl'>{pro.price}</span><span className='text-xs'>.06</span></h1>
                                                <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                                                <p className='text-xs'>Free shipping</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex justify-end mb-10'>
                                                <button className='text-xl hover:text-red-500 focus:text-red-500 text-custom-text'><FiHeart /></button>
                                            </div>
                                            <div className='items-center shadow-sm justify-between flex gap-3'>
                                            <Link to={`/Detail/${pro.id}`}><button className='border border-custom-text hover:border-white hover:bg-white/5 text-custom-text text-sm font-bold px-5 transition-colors duration-500 py-[10px] rounded-full'>See preview</button></Link>
                                            
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-[25%] bg-primary rounded-lg'></div>
            </div>
        </div>
    </div>
  )
}

export default Products
