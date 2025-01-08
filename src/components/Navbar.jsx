import React, { useContext } from 'react'
import aliLogo from '../images/aliLogo.png'
import { FiSearch } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AliExpressContext } from '../context/appContext';

const Navbar = () => {
  const {open, isAuthenticated, userName, cartItems} = useContext(AliExpressContext)
  return (
    <nav className='bg-black flex py-4 pl-[90px] px-[70px] items-center justify-between fixed top-0 left-0 right-0 z-40'>
      <Link to={"/ecommerce-home"}>
        <img className='w-[180px]' src={aliLogo} alt="Logo" />
      </Link>
      <div className='flex bg-white p-1 gap-2 rounded-full'>
        <input type="text" className='w-[38rem] rounded-full outline-none px-5' placeholder='winter jacket for men'/>
        <button className='bg-black px-4 rounded-full py-1'>
          <FiSearch className='text-white text-2xl' />
        </button>
      </div>
      <div className='flex items-center gap-7'>
        <div className='text-white flex items-center gap-1 cursor-pointer'>
          <AiOutlineAppstore className='text-[32px]' />
          <div className='text-xs font-medium'>
            <p>Download the</p>
            <p>AliExpress app</p>
          </div>
        </div>
        <div className='text-white flex items-center gap-1 cursor-pointer'>
          <img className='w-6' src="https://cdn-icons-png.flaticon.com/128/5327/5327538.png" alt="" />
          <div className='text-xs'>
            <p>EN/</p>
            <p className='flex font-bold'>NGN <MdOutlineKeyboardArrowDown className='text-lg' /></p>
          </div>
        </div>
        <Link to={"/profilePage"} className={isAuthenticated ? 'text-white flex items-center gap-1 cursor-pointer':'hidden'}>
          <FaRegUser className='text-[23px]' />
          <div className='text-xs'>
            <p>Hi {userName}</p>
            <p className='flex font-bold'>View Account <MdOutlineKeyboardArrowDown className='text-lg' /></p>
          </div>
        </Link>
        <Link to={"/RegLogin"} className={isAuthenticated ? 'hidden':'text-white flex items-center gap-1 cursor-pointer'}>
          <FaRegUser className='text-[23px]' />
          <div className='text-xs' onClick={open}>
            <p>Welcome</p>
            <div className='flex'>
              <p className='font-bold'>Sign&nbsp;in&nbsp;/&nbsp;Register</p>
              <MdOutlineKeyboardArrowDown className='text-lg' />
            </div>
          </div>
        </Link>
        <Link to={'/cartPage'}>
        <div className='text-white flex items-center gap-1 cursor-pointer'>
            <FiShoppingCart className='text-[27px]' />
            <div className='text-xs'>
              <p className='text-black bg-white px-[10px] font-bold flex justify-center items-center rounded-full'>{cartItems.length}</p>
              <p className='flex font-bold'>Cart</p>
            </div>
        </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
