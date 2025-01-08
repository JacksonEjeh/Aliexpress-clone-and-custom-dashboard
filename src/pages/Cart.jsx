import React, { useContext } from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import choiceDay from '../images/choiceDay.png'
import choice2 from '../images/choice2.png'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import save from '../images/save.png'
import redArrow from '../images/redArrow.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AliExpressContext } from '../context/appContext';
import { BiSolidStarHalf } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import emptyCart from '../images/emptyCart.jpg'
import { Link } from 'react-router-dom';


const Cart = () => {
    const {formatPrice, cartItems, totalAmount, removeItem, incrementCart, decrementCart } = useContext(AliExpressContext)
  return (
    <div>
        <div className='pt-[73px] bg-gray-100 relative'>
            {/* Empty Cart section */}
            {cartItems.length === 0 ? (
            <div className='z-20 h-[700px] absolute bg-gray-100 pt-[100px] px-[170px] top-0 left-0 right-0 bottom-0'>
                <div className='bg-white py-4 pt-7 px-5'>
                    <div className='py-2 px-6 bg-yellow-200 rounded'>
                        <div className='flex items-center gap-2'>
                            <img className='h-6' src={choiceDay} alt="" />
                            <h1 className='font-semibold'>Ends: Oct 8, 07:59 GMT</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='h-[280px] ml-14' src={emptyCart} alt="" />
                        <p className='font-bold py-8'>No items yet? Continue shopping to explore more.</p>
                        <div className='px-10'>
                            <button className='bg-red-500 py-3 font-bold rounded-full w-full text-white mb-4'>Sign in</button>
                            <Link to={"/"}><button className='bg-red-100 py-3 font-bold rounded-full w-full text-red-500 mb-[100px]'>Explore items</button></Link>
                        </div>
                    </div>
                </div>
            </div>):(
            <div className='flex py-5 px-[170px] gap-6 z-10'>
                <div className='w-[67%]'>
                    {/* cart section */}
                    <div className='px-6 py-4 bg-white mb-2'>
                        <h1 className='font-bold text-[25px] mb-5'>Shopping Cart ({cartItems.length})</h1>
                        <div className='flex items-center gap-2 mb-5'>
                            <IoCheckmarkCircleSharp className='text-red-500 text-2xl' />
                            <p>Select all items</p>
                            <PiLineVerticalThin />
                            <p className='text-blue-500 font-semibold'>Delete selected items</p>
                        </div>
                        <div className='py-2 px-6 bg-yellow-200 rounded'>
                            <div className='flex items-center gap-2'>
                                <img className='h-6' src={choiceDay} alt="" />
                                <h1 className='font-semibold'>Ends: Oct 8, 07:59 GMT</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white'>
                        <div className='px-6 py-3 bg-gradient-to-t from-white to-yellow-100 flex items-center gap-3'>
                            <IoCheckmarkCircleSharp className='text-red-500 text-2xl' />
                            <img className='h-3' src={choice2} alt="" />
                            <PiLineVerticalThin className='text-gray-300' />
                            <p className='font-bold'>Shipped by AliExpress</p>
                            <AiOutlineQuestionCircle className='text-sm' />
                        </div>
                        <div className='px-6 py-4'>
                            <div className='py-3 px-6 bg-gray-50 rounded flex items-center gap-2'>
                                <p className='text-red-500 font-bold text-xs'>NGN3,612.86</p>
                                <h1 className='font-bold text-xs'>saved, explore more free shipping items</h1>
                            </div>
                        </div>
                        <div className='px-6'>
                            {cartItems.map((item)=>(
                                <div key={item.id} className='flex gap-4 items-center relative border-b py-6'>
                                    <div>
                                        <IoCheckmarkCircleSharp className='text-red-500 text-2xl' />
                                    </div>
                                    <div className='size-[120px] w-[120px] rounded-lg bg-gray-500'>
                                        <img className='size-full rounded-lg' src={item.images && item.images[0]} alt="" />

                                    </div>
                                    <div>
                                        <p className='text-[15px] hover:text-red-500 cursor-pointer'>{item.title}</p>
                                        <div className='flex gap-2 items-center absolute top-6 right-0'>
                                            <button className='hover:text-red-500'><FiHeart /></button>
                                            <button onClick={()=>removeItem(item.id)} className='hover:text-red-500'><RiDeleteBin4Line /></button>
                                        </div>
                                        <button className='px-3 py-1 bg-gray-50 hover:bg-gray-100 font-bold text-xs rounded-full mb-1'>Red/XXL (36)</button>
                                        <h1 className='font-bold text-[16px]'>{item.currency}{formatPrice((item.price)) * item.quantity}</h1>
                                        <div className='flex gap-1 items-center mb-1'>
                                            <img className='h-[13px]' src={save} alt="" />
                                            <img className='h-[15px]' src={redArrow} alt="" />
                                            <p className='text-red-500'>Save NGN25,378.49</p>
                                        </div>
                                        <small className='flex items-center gap-2'>Tinubu Store <MdOutlineKeyboardArrowRight /></small>
                                        <div className='flex items-center gap-3 mb-1 absolute top-[80px] right-0'>
                                            <button className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center' onClick={()=>decrementCart(item.id)}>-</button>
                                            <input type="text" className='outline-none w-5 font-bold' value={item.quantity} readOnly/>
                                            <button className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center' onClick={()=>incrementCart(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[33%]'>
                    <div className='sticky top-[80px]'>
                        <div className='px-6 py-4 bg-white mb-3'>
                            <h1 className='font-bold text-[25px] mb-3'>Summary</h1>
                            <div className='flex items-center justify-between pr-6 mb-[15px]'>
                                <p className='font-semibold text-[15px]'>Subtotal</p>
                                <p className='font-semibold text-[15px]'>NGN{totalAmount}</p>
                            </div>
                            <div className='flex items-center justify-between pr-6 mb-[15px]'>
                                <p className='font-semibold text-[15px]'>Shipping fee</p>
                                <p className='font-semibold text-[15px] '>NGN3,602.09</p>
                            </div>
                            <div className='flex items-center justify-between pr-6 mb-3'>
                                <p className='font-semibold text-[15px]'>Saved</p>
                                <p className='font-semibold text-[15px] text-red-500'>-NGN3,602.09</p>
                            </div>
                            <div className='flex items-center justify-between pr-6 mb-4'>
                                <p className='font-bold text-[15px]'>Total</p>
                                <p className='font-bold text-xl'>NGN{totalAmount +  3602.09}</p>

                            </div>
                            <div>
                                <button className='w-full py-2 bg-red-500 text-white font-bold text-lg rounded-full'>Checkout ({cartItems.length})</button>
                            </div>
                        </div>
                        <div className='px-6 py-4 bg-white'>
                            <h1 className='font-bold text-[20px] mb-3'>Pay with</h1>
                            <div className='pb-5 border-b mb-3'>
                                <div className='grid grid-cols-7 gap-1'>
                                    <img className='w-9 rounded' src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="visa" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png" alt="" />
                                    <img className='w-9 rounded' src="https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-[20px]'>Buyer protection</h1>
                                <p className='font-semibold'>Get full refund if the item is not as described or if is not delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        {/* related products */}
        <div className={cartItems.length === 0 ? 'pt-[650px] pb-[75px] mb-5 w-[95%] mx-auto':'pb-[75px] pt-5 mb-5 w-[95%] mx-auto'}>
            <div className='mb-4'>
                <h1 className='font-bold text-2xl'>More to love</h1>
            </div>
            <div className='pl-2 grid grid-cols-6 gap-3'>
                <div className='relative'>
                    <div className='cursor-pointer group hover:absolute top-0 left-0 right-0 bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='top-0 left-0 right-0 cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='top-0 left-0 right-0 cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='top-0 left-0 right-0 cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='top-0 left-0 right-0 cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='top-0 left-0 right-0 cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
                        <div className='h-[180px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S4974fc68ad54443690216869948b94df5/Luxury-Square-Vintage-Polarized-Sunglasses-For-Men-Women-Fashion-Travel-Driving-Anti-glare-Sun-Glasses-Male.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden mb-12'>
                            <p>Luxury Square Vintage...</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStar className='text-sm text-black'/>
                                    <BiSolidStarHalf className='text-sm text-black'/>
                                </div>
                                <p className='text-xs text-gray-500'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>5,865</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold text-sm'>Extra 1% off with coins</h1>
                            <p className='text-sm'>Free shipping</p>
                        </div>
                        <div className='group-hover:flex items-center gap-2 hidden'>
                            <button className='bg-black w-full text-[10px] px-3 py-2 text-white rounded-full font-bold'>See preview</button>
                            <button className='bg-black w-full text-[10px] px-2 py-2 text-white rounded-full font-bold'>Similar items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-100 h-8'></div>
    </div>
  )
}

export default Cart
