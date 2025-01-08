import React, { useContext } from 'react'
import logo from '../images/aliLogo.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineArrowLeft } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { PiDotFill } from "react-icons/pi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsBoxSeam } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { LuHelpCircle } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuBellRing } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";
import aliPng from '../images/logo.jpg.png'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AliDashboardContext } from '../context/dashboardContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {toggleSidebar, closeSidebar, updatedInfo} = useContext(AliDashboardContext)
  
  return (
    <div >
      <div className='flex'>
          <div className={closeSidebar ? 'bg-primary w-[83%] py-4 px-4 fixed top-0 z-30' : 'bg-primary w-[95%] py-4 px-4 fixed top-0 z-30'}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Link to={"/profile"}><div className='size-9 border rounded-full bg-green-900'>
                  <img className='h-full w-full rounded-full' src={updatedInfo.icon} alt="" />  
                </div></Link>
                <button className='text-custom-text text-xl p-[10px] hover:bg-secondary rounded-lg'><LuSettings /></button>
                <button className='text-custom-text text-xl p-[10px] hover:bg-secondary rounded-lg'><LuBellRing /></button>
                <div className='relative'>
                  <button className='text-custom-text text-xl p-[10px] hover:bg-secondary rounded-lg'><LuShoppingCart /></button>
                  <div className='text-custom-text bg-red-500 rounded-full absolute size-[15px] text-xs flex items-center justify-center font-semibold top-0 right-0'>0</div>
                </div>
                <button className='text-custom-text text-xl p-[10px] hover:bg-secondary rounded-lg'><MdOutlineLightMode /></button>  
              </div> 
              <div className='flex items-center gap-3'> 
                <div className='flex items-center text-custom-text border border-slate-700 rounded px-3 py-2'>
                  <button><FiSearch className='text-custom-text text-lg' /></button>
                  <input className='bg-transparent text-right border-none outline-none w-[300px]' placeholder='...search for' type="text" />
                </div>
                <button className='text-custom-text text-xl p-[10px] hover:bg-secondary rounded-lg' onClick={toggleSidebar}>{closeSidebar ? <MdOutlineKeyboardDoubleArrowRight /> : <FiChevronsLeft />}</button>
              </div>
            </div>
          </div>
          {/* sidebar icon and text */}
          <div className={closeSidebar ?'bg-primary w-[17%] h-screen fixed right-0 border-l-2 border-secondary z-10': 'bg-primary w-[5%] h-screen fixed right-0 border-l-2 border-secondary'}>
            <div className={closeSidebar ? 'flex items-center justify-center py-5' : 'hidden'}>
              <div>
                <img src={logo} className='h-8' alt="" />
                <p className='text-right absolute top-10 font-bold text-white/90 right-[68px]'>Dashboard</p>
              </div>
            </div>
            <div className={closeSidebar ? 'text-white py-4 px-2' : 'hidden'}>
              <Link to={"/dashboard"}>
                <div className='transition-colors duration-300 mb-1 flex items-center justify-between hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                  <MdOutlineArrowLeft className='text-lg' />
                  <div className='flex items-center gap-2'>
                    <p>Dashboard</p>
                    <LuLayoutDashboard />
                  </div>
                </div>
              </Link>
              <div className='group'>
                <div className='flex items-center justify-between transition-colors duration-300 mb-1 hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                  <MdOutlineArrowLeft className='text-lg' />
                  <div className='flex items-center gap-2'>
                    <p>Products</p>
                    <TfiShoppingCartFull />
                  </div>
                </div>
                <div className='justify-end px-6 hidden group-hover:flex text-custom-text'>
                  <ul>
                  <Link to={"/products"}><li className='flex items-center justify-end gap-2 hover:text-red-600 text-sm cursor-pointer transition-colors duration-300 mb-3 py-2'><p>View Products</p> <PiDotFill /></li></Link>
                    <Link to={"/newProduct"}><li className='flex items-center justify-end gap-2 hover:text-red-600 text-sm cursor-pointer transition-colors duration-300 py-2'>Add product <PiDotFill /></li></Link>
                  </ul>
                </div>
              </div>
              <Link to={"/newCategory"}>
                <div className='flex items-center justify-between transition-colors duration-300 mb-1 hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                  <MdOutlineArrowLeft className='text-lg' />
                  <div className='flex items-center gap-2'>
                    <p>Category</p>
                    <BsBoxSeam />
                  </div>
                </div>
                </Link>
              <div className='transition-colors duration-300 mb-1 flex items-center justify-between hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                <MdOutlineArrowLeft className='text-lg' />
                <div className='flex items-center gap-2'>
                  <p>Orders</p>
                  <LuShoppingBag />
                </div>
              </div>
              <div className='transition-colors duration-300 mb-1 flex items-center justify-between hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                <MdOutlineArrowLeft className='text-lg' />
                <div className='flex items-center gap-2'>
                  <p>Settings</p>
                  <LuSettings />
                </div>
              </div>
              <div className='transition-colors duration-300 mb-1 flex items-center justify-between hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                <MdOutlineArrowLeft className='text-lg' />
                <div className='flex items-center gap-2'>
                  <p>Help Center</p>
                  <LuHelpCircle />
                </div>
              </div>
              <div className='transition-colors duration-300 mb-1 flex items-center justify-between hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                <MdOutlineArrowLeft className='text-lg' />
                <div className='flex items-center gap-2'>
                  <p>Logout</p>
                  <BiExit />
                </div>
              </div>
            </div>
            <div className={closeSidebar ? 'hidden' : 'text-white py-4 px-2'}>
              <div className={closeSidebar ? 'hidden' : 'flex items-center justify-center mb-4'}>
                <img src={aliPng} className='h-10' alt="" />
              </div>
              {/* only icons on the sidebar */}
              <div>
                <div className={closeSidebar ? 'hidden' : 'text-white py-4'}>
                <Link to={"/dashboard"}>
                  <div className='transition-colors duration-300 mb-1 flex items-center hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                    <MdOutlineArrowLeft className='text-lg' />
                    <div className='flex items-center gap-2'>
                      <LuLayoutDashboard className='text-2xl' />
                    </div>
                  </div>
                  </Link>
                  <div className='group relative'>
                    <div className='flex items-center transition-colors duration-300 mb-1 hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                      <MdOutlineArrowLeft className='text-lg' />
                      <div className='flex items-center gap-2'>
                        <TfiShoppingCartFull className='text-2xl' />
                      </div>
                    </div>
                    <div className='px-6 hidden group-hover:flex justify-end w-[200px] group-hover:absolute top-0 right-10 bg-slate-800 rounded-lg shadow-lg'>
                      <div>
                      <Link to={"/products"}><button className='flex font-bold items-center justify-end gap-2 hover:text-red-600 text-custom-text text-sm cursor-pointer transition-colors duration-300 mb-3 py-2'><p>View Products</p> <PiDotFill /></button></Link>
                        <Link to={"/newProduct"}><button className='flex font-bold items-center justify-end gap-2 hover:text-red-600 text-custom-text text-sm cursor-pointer transition-colors duration-300 py-2'>Add product <PiDotFill /></button></Link>
                      </div>
                    </div>
                  </div>
                  <div className='group relative'>
                  <Link to={"/newCategory"}>
                    <div className='flex items-center transition-colors duration-300 mb-1 hover:bg-secondary hover:text-red-600 px-2 py-3 rounded-lg cursor-pointer text-custom-text'>
                      <MdOutlineArrowLeft className='text-lg' />
                      <div className='flex items-center gap-2'>
                        <BsBoxSeam className='text-2xl' />
                      </div>
                    </div>
                  </Link>
                    <div className='px-6 hidden group-hover:flex justify-end w-[200px] group-hover:absolute top-0 right-10 bg-slate-800 rounded-lg shadow-lg'>
                      <div>
                        <button className='flex font-bold items-center justify-end gap-2 hover:text-red-600 text-custom-text text-sm cursor-pointer transition-colors duration-300 py-2'><p>Categories</p> <PiDotFill /></button>
                      </div>
                    </div>
                  </div>
                  <div className='transition-colors duration-300 mb-1 flex items-center hover:bg-secondary hover:text-red-600 text-custom-text px-2 py-3 rounded-lg cursor-pointer'>
                    <MdOutlineArrowLeft className='text-lg' />
                    <div className='flex items-center gap-2'>
                      <LuShoppingBag className='text-2xl'/>
                    </div>
                  </div>
                  <div className='transition-colors duration-300 mb-1 flex items-center hover:bg-secondary hover:text-red-600 text-custom-text px-2 py-3 rounded-lg cursor-pointer'>
                    <MdOutlineArrowLeft className='text-lg' />
                    <div className='flex items-center gap-2'>
                      <LuSettings className='text-2xl' />
                    </div>
                  </div>
                  <div className='transition-colors duration-300 mb-1 flex items-center hover:bg-secondary hover:text-red-600 text-custom-text px-2 py-3 rounded-lg cursor-pointer'>
                    <MdOutlineArrowLeft className='text-lg' />
                    <div className='flex items-center gap-2'>
                      <LuHelpCircle className='text-2xl'/>
                    </div>
                  </div>
                  <div className='transition-colors duration-300 mb-1 flex items-center hover:bg-secondary hover:text-red-600 text-custom-text px-2 py-3 rounded-lg cursor-pointer'>
                    <MdOutlineArrowLeft className='text-lg' />
                    <div className='flex items-center gap-2'>
                      <BiExit className='text-2xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
