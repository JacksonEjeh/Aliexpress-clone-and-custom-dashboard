import React, { useContext } from 'react'
import Accordion from '../components/Accord'
import { TiArrowUnsorted } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { AliExpressContext } from '../context/appContext';
import PopularProducts from '../components/PopularProducts';
import { Link } from 'react-router-dom';
import outOfStock from '../images/out-of-stock.png'
import { LuPlus } from "react-icons/lu";


const ShopPage = () => {
    const { allProducts} = useContext(AliExpressContext)

    if(allProducts.length === 0){
        return(
            <div className={allProducts.length === 0 ? 'h-[90vh] flex items-center justify-center': 'hidden'}>
                <div className='h-full  flex items-center justify-center flex-col rounded-lg'>
                    <h1 className='text-3xl font-bold'>No product found</h1>
                    <div className='flex items-center gap-2 mt-5'>
                        <p className='text-custom-color text-center font-bold text-xl'>Click</p>
                        <Link to={"/newProduct"} className='cursor-pointer  hover:border group border border-custom-text hover:border-black text-black size-10 flex items-center justify-center gap-1 transition-all duration-500 rounded-full hover:w-[75px]'><LuPlus /> <span className='hidden group-hover:block'>Add</span></Link>
                        <p className='text-custom-color text-center font-bold text-xl'>to add product on the store</p>

                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className='pt-[73px]'>
        <div className="flex gap-5">
            <div className=' w-1/5'>
                <div className='sticky top-[89px] py-3 pl-12 pr-5'>
                    <Accordion />
                </div>
            </div>
            <div className='w-[80%] py-6 pr-12'>
                <div className='flex gap-10 justify-end mb-3'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[13px]'>Sort by:</p>
                        <div className='flex items-center'>
                            <span className='bg-gray-100 px-5 py-2 font-bold text-red-500 text-sm rounded-l-3xl border cursor-pointer'>Best Match</span>
                            <span className='px-5 py-2 border-t border-b font-bold text-gray-500 cursor-pointer text-sm'>Orders</span>
                            <span className='px-5 py-2 rounded-r-3xl border font-bold flex text-gray-500 items-center text-sm gap-1 cursor-pointer'>Price<TiArrowUnsorted /></span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p  className='text-[13px]'>View:</p>
                        <div className='flex items-center'>
                            <span className='bg-gray-100 px-5 py-2 font-bold flex items-center gap-1 text-sm text-red-500 rounded-l-3xl border cursor-pointer'><GrAppsRounded />Gallery</span>
                            <span className='px-4 py-2 rounded-r-3xl border font-bold text-gray-500 flex items-center gap-1 text-sm cursor-pointer'><AiOutlineMenu />List</span>
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-5 gap-4 mb-16'>
                    {/* card for shop page */}
                    {
                        allProducts?.map(product =>{
                            return(
                                <div className='group relative' key={product.id}>
                                    <div className='cursor-pointer relative group-hover:z-20'>
                                        <Link to={`/details/${product.id}`}>
                                        <div className='h-[220px] relative'>
                                            <img className='w-full h-full rounded-3xl' src={product.images[0]} alt="" />
                                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                                <BsCartPlus className='text-[25px] font-bold'/>
                                            </button>
                                        </div>
                                        <div className='overflow-hidden'>
                                            <p>{product.title}</p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex'>
                                                    <BiSolidStar className='text-[16px] text-black'/>
                                                    <BiSolidStar className='text-[16px] text-black'/>
                                                    <BiSolidStar className='text-[16px] text-black'/>
                                                    <BiSolidStar className='text-[16px] text-black'/>
                                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                                </div>
                                                <p className='text-[13px]'>800+ sold</p>
                                                <div className='text-yellow-700 bg-gray-100 text-[11px] px-1 border font-bold'>Top Selling</div>
                                            </div>
                                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>{product.price}</span><span className='text-xs'>.06</span></h1>
                                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                                            <p>Free shipping</p>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={allProducts.length === 0 ? 'hidden':'flex items-center gap-2 justify-center mb-16'}>
                    <div className='flex gap-2 items-center'>
                        <button className='border text-gray-700 rounded p-2 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>Prev</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>1</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>2</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>3</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>4</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>5</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>...</button>
                        <button className='border text-gray-700 rounded py-2 px-4 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>60</button>
                        <button className='border text-gray-700 rounded p-2 focus:bg-black focus:text-white hover:bg-gray-200 transition-all duration-300 font-bold'>Next</button>
                    </div>
                </div>
                <PopularProducts />
            </div>
        </div>
        <div className='bg-gray-100 h-7'></div>
    </div>
  )
}

export default ShopPage
