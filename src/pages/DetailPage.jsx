import React, { useContext, useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import choiceYellow from '../images/choiceYellow.png'
import freeShip from '../images/freeShip.png'
import secure from '../images/secure.png'
import { AliExpressContext } from '../context/appContext';
import { PiStorefront } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { BiSolidStar } from "react-icons/bi";
import choiceDay from '../images/choiceDay.webp'
import yellowArrow from '../images/yellowArrow.png'
import { BiSolidStarHalf } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetailPage = () => {
    const {id} = useParams()

    const {quantity, inc, dec, base_url2, addCart, } = useContext(AliExpressContext)
    
    localStorage.setItem('product_id', id)

    const [productDetail, setProductDetail] = useState({})
    const getProductDetail = async ()=>{
        try {
            const response = await axios.get(`${base_url2}/products/${id}`)
            if (response.status !== 200) {
                throw new Error("Error fetching single product detail");
            }
            setProductDetail(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getProductDetail()
    },[id])
  return (
    <div className='pt-[73px]'>
        <div className='flex py-5 px-10 gap-6'>
            <div className='w-[77%]'>
                {/* product image,  product name, product price, product description, product reviews */}
                <div className='flex border-b pb-10 mb-11'>
                    {/* side images */}
                    <div className='w-[8%] p-1 pl-2 h-[400px] overflow-y-scroll'>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src={productDetail.images && productDetail.images[0]} alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src={productDetail.images && productDetail.images[1]} alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src={productDetail.images && productDetail.images[2]} alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src="https://ae-pic-a1.aliexpress-media.com/kf/S87d3966fef8c45a480664802d56f1456V/New-Fashionable-Future-Style-Cool-Sunglasses-Men-s-Cycling-Sports-Glasses-Y2K-Millennium-Spicy-Girl-Sunglasses.jpg_.webp" alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src="https://ae-pic-a1.aliexpress-media.com/kf/Sa8bd9ae011f44626b29b9ad3ac7751f6F/New-Fashionable-Future-Style-Cool-Sunglasses-Men-s-Cycling-Sports-Glasses-Y2K-Millennium-Spicy-Girl-Sunglasses.jpg_.webp" alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src="https://ae-pic-a1.aliexpress-media.com/kf/S72abc8b20b26436083dd1e2831770137U/New-Fashionable-Future-Style-Cool-Sunglasses-Men-s-Cycling-Sports-Glasses-Y2K-Millennium-Spicy-Girl-Sunglasses.jpg_.webp" alt="" />
                        </div>
                        <div className='h-14 rounded-xl hover:border border-black mb-4'>
                            <img className='h-full rounded-xl w-full' src="https://ae-pic-a1.aliexpress-media.com/kf/Sfcccc972cc824db5a978871d3cdc031aV.jpg_640x640.jpg_.webp" alt="" />
                        </div>
                    </div>
                    {/* main image */}
                    <div className='w-[40%] h-[400px] my-1 rounded-3xl'>
                        <img className='h-full rounded-3xl w-full' src={productDetail.images && productDetail.images[0]} alt="" />
                    </div>
                    <div className='w-[57%] py-1 pl-6'>
                        <div className='bg-contain bg-center h-12 pl-6 rounded-lg flex justify-between items-center' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S3bb23298d2ef4c8f84d586e0315a93933/1500x144.png_.webp')"}}>
                            <div className='flex items-center gap-1'>
                                <img className='h-4' src={yellowArrow} alt="" />
                                <p className='text-yellow-100 font-bold text-sm'>Save NGN8,257.76</p>
                            </div>
                            <img className='h-12' src={choiceDay} alt="" />
                        </div>
                        {/* price, description, discount */}
                        <div className='border-b-2 py-3'>
                            <h1 className='text-4xl font-bold'>{productDetail.currency}{productDetail.price}</h1>
                            {productDetail.discount && <p className='text-xl flex items-center gap-2'><span className='text-gray-500 line-through'>NGN13,537.57</span><span className='text-red-700'>{productDetail.discount}% off</span></p>}
                            <p className='text-xs mb-5'>Price shown before tax丨Extra 1% off with coins</p>
                            <p className='font-bold text-sm mb-5'>{productDetail.title}</p>
                            <p className='flex items-center text-sm text-orange-600'>1 sold by Sell Quickly store(<BiSolidStar className='text-[16px] text-yellow-500'/>4.1 | {productDetail.total_sold} sold)</p>
                        </div>
                        <div className='border-b py-3'>
                            <p className='font-bold text-sm mb-3'>Color: silver black</p>
                            <div className='flex items-center gap-4'>
                                <div className='bg-gray-500 size-14 rounded-xl hover:border-2 border-black mb-4'>
                                    <img className='h-full cursor-pointer rounded-xl w-full' src={productDetail.images && productDetail.images[0]} alt="" />
                                </div>
                                <div className='bg-gray-500 size-14 rounded-xl hover:border-2 border-black mb-4'>
                                    <img className='h-full cursor-pointer rounded-xl w-full' src={productDetail.images && productDetail.images[1]} alt="" />
                                </div>
                                <div className='bg-gray-500 size-14 rounded-xl hover:border-2 border-black mb-4'>
                                    <img className='h-full cursor-pointer rounded-xl w-full' src={productDetail.images && productDetail.images[2]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* related products */}
                <div className='pl-2 pb-[75px] border-b mb-5'>
                    <div className='mb-4'>
                        <h1 className='font-bold text-2xl'>Related items</h1>
                    </div>
                    <div className='grid grid-cols-5 gap-3'>
                        <div className='relative'>
                            <div className='cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
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
                            <div className='cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
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
                            <div className='cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
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
                            <div className='cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
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
                            <div className='cursor-pointer group hover:absolute bg-white p-4 rounded-2xl border hover:shadow-lg'>
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
                <div className=''>
                    <div className='py-7 flex items-center gap-10 sticky top-[70px] bg-white'>
                        <p className='font-bold text-[15px]'>Customer Reviews</p>
                        <p className='text-[15px]'>Specification</p>
                        <p className='text-[15px]'>Description</p>
                        <p className='text-[15px]'>Store</p>
                        <p className='text-[15px]'>You may also like</p>
                    </div>
                    <div className='border-b py-5 pb-10 mb-5'>
                        <h1 className='font-bold text-2xl'>Customer Reviews (0)</h1>
                    </div>
                    <div className='mb-10 border-b pb-10'>
                        <div className='mb-4'>
                            <h1 className='font-bold text-2xl'>Specification</h1>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='flex border-t'>
                                <p className='py-4 px-3 w-[150px] bg-gray-100'>Element type</p>
                                <p className='p-4'>Trendy and fashionable</p>
                            </div>
                            <div className='flex border-t'>
                                <p className='py-4 px-3 w-[200px] bg-gray-100'>Applicable Scenarios</p>
                                <p className='p-4'>outdoor</p>
                            </div>
                            <div className='flex border-t'>
                                <p className='py-4 px-3 w-[150px] bg-gray-100'>Product Type</p>
                                <p className='p-4'>Fashion Sunglasses</p>
                            </div>
                            <div className='flex border-t'>
                                <p className='py-4 px-3 w-[200px] bg-gray-100'>Style type</p>
                                <p className='p-4'>oval</p>
                            </div>
                            <div className='flex border-t border-b'>
                                <p className='py-4 px-3 w-[150px] bg-gray-100'>Place Of Origin</p>
                                <p className='p-4'>China (mainland)</p>
                            </div>
                            <div className='flex border-t border-b'>
                                <p className='py-4 px-3 w-[200px] bg-gray-100'>Lenses Material</p>
                                <p className='p-4'>Polycarbonate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b pb-10'>
                        <div className='mb-4'>
                            <h1 className='font-bold text-2xl'>Description</h1>
                        </div>
                        <ul className='pl-3'>
                            <li className='mb-3 list-disc'>{productDetail.descp}</li>
                            <li className='mb-3 list-disc'> <span className='font-bold list-disc'>Hong Kong-style Design :</span>These pants feature a unique Hong Kong-style design, offering a trendy and fashionable look that stands out in any casual setting.</li>
                            <li className='mb-3 list-disc'> <span className='font-bold list-disc'>Loose Fit :</span>The loose fit of these pants provides maximum comfort and freedom of movement, making them perfect for everyday wear.</li>
                            <li className='mb-3 list-disc'> <span className='font-bold list-disc'>Versatile Style :</span>With their cropped length and tore pants style, these jeans are versatile enough to be paired with different tops for various occasions.</li>
                            <li className='mb-3 list-disc'> <span className='font-bold list-disc'>Dipped Style :</span>The dipped style of these pants adds a touch of sophistication and elegance to your outfit, making you stand out in any crowd.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* quantity, add to cart, wishlist */}
            <div className='w-[24.5%]'>
                <div className='border rounded-xl sticky top-[80px]'>
                    <div className='flex items-center justify-between p-4'>
                        <p className='font-bold text-sm'>Ship to</p>
                        <p className='text-sm flex items-center gap-2 cursor-pointer'><CiLocationOn /> Nigeria</p>
                    </div>
                    <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sb042ab7dac414ce7a35548ab6c018107R/1500x180.png_.webp')"}}
                     className='bg-contain bg-center h-11 bg-no-repeat px-4 py-[10px] flex items-center gap-3'
                        >
                        <img className='h-full' src={choiceYellow} alt="" />
                        <p className='font-bold text-sm'>AliExpress commitment</p>
                    </div>
                    <div className='px-4'>
                        <div className='py-1 flex justify-between cursor-pointer'>
                            <div className='flex gap-1'>
                                <img className='h-4' src={freeShip} alt="" />
                                <div>
                                    <p className='font-bold text-sm'>Free shipping over NGN18,182.55</p>
                                    <p className='text-gray-500 text-[15px]'>Delivery: <span className='font-bold text-black'>Oct 15 - 21</span></p>
                                </div>
                            </div>
                            <GoChevronRight />
                        </div>
                        <div className='py-1 pb-5 mb-3 border-b'>
                            <div className='flex gap-1'>
                                <img className='h-4' src={secure} alt="" />
                                <div>
                                    <p className='font-bold text-sm mb-1'>Security & Privacy</p>
                                    <p className='text-gray-500 text-xs mb-1'>Safe payments: We do not share your personal details with any third parties without your consent.</p>
                                    <p className='text-gray-500 text-xs'>Secure personal details: We protect your privacy and keep your personal details safe and secure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 mb-3'>
                        <p className='font-bold text-[15px] mb-1'>Quantity</p>
                        <div className='flex items-center gap-3 mb-1'>
                            <button className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center' onClick={dec}>-</button>
                            <input type="text" className='outline-none w-5 font-bold' value={quantity} readOnly/>
                            <button className='h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center' onClick={inc}>+</button>
                        </div>
                        <p className='text-sm'>{productDetail.quantity} available</p>
                    </div>
                    <div className='px-4 pb-3'>
                        <button className='w-full py-[10px] bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white font-bold rounded-full mb-3'>Buy now</button>
                        <button className='w-full py-[10px] bg-red-200 text-red-600 transition-colors duration-300 hover:bg-red-100 font-bold rounded-full' onClick={()=>addCart(productDetail)}>Add to cart</button>
                        <div className='flex justify-between gap-4 items-center mt-3'>
                            <button className='w-full py-[10px] bg-gray-100 font-bold text-[20px] flex justify-center rounded-full'><PiStorefront /></button>
                            <button className='w-full py-[10px] bg-gray-100 font-bold text-[20px] flex justify-center rounded-full'><FiShare2 /></button>
                            <button className='w-full py-[10px] bg-gray-100 font-bold text-[20px] flex justify-center rounded-full items-center gap-1'><LuHeart /> <span className='font-normal text-lg'>4</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[94%] mx-auto'>
            <div className='p-4 bg-yellow-100 rounded-2xl'>
                <div className='flex items-center gap-2'>
                    <img className='h-6' src={choiceYellow} alt="" />
                    <h1 className='font-bold text-xl'>Fashion Fusion Store</h1>
                </div>
                <p><span className='font-bold'>86.6%</span> Positive Feedback | <span className='font-bold'>118.6K</span> Followers</p>
            </div>
            <div className='my-7 flex items-center gap-3'>
                <h1 className='font-bold text-xl'>Recommended from Fashion Fusion Store</h1>
                <MdOutlineChevronRight className='text-sm' />
            </div>
            <div className='grid grid-cols-6 gap-4 border-b pb-16 mb-10'>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S0ebc2af568e24edb99868093b182f36eq/American-Style-Vintage-Sensibility-Heavy-Duty-Streetwear-Men-s-Jeans-Loose-Fit-Straight-Leg-Washable-Distressed.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/Sefdc873a70b646768f04a13835dd4deeb/Chinese-Style-Vintage-Dragon-Patterned-Dark-Flower-Seven-quarter-Length-Casual-Shorts-For-Men-Summer-Thin.png_350x350xz.png_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/Sb62756e097084916b2c326a9c053148dm/American-Style-Gradient-Jeans-For-Men-Loose-Fit-Straight-Leg-High-Street-Trendy-Brand-Autumn-Ins.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S22aa337ac42a4ee68a58521e999ee701p/Cropped-Pants-Men-s-Shorts-Summer-Ice-Silk-Fashionable-Straight-Large-Size-Sports-Casual-Pants.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S9350a394f18d4447acbe5281a2dbbe62H/Fashionable-Elegant-Jeans-Summer-Trendy-Men-s-Simple-Casual-Artistic-Harajuku-Style-Youthful-Flowing-Hair-Colored.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/Sc26a0a7193824e648950879fdcfc5029b/Clean-title.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
            </div>
            <div className='my-7 flex items-center gap-3'>
                <h1 className='font-bold text-2xl'>You may also like</h1>
            </div>
            <div className='grid grid-cols-6 gap-4  mb-10'>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S705757b7bdcb4df890e4b03f370eb24ff/Graffiti-Printing-Jeans-Men-s-Gradient-Hip-Hop-Trousers-Harem-Cartoon-Loose-Casual-Ankle-Banded-Pants.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S93c9e18c786c494d991e36b04986993fT/HOUZHOU-Harajuku-Y2K-Baggy-Jeans-Women-Streetwear-Retro-Fashion-Autumn-High-Waist-Pants-Loose-Wide-Leg.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/Sa231bad476164957b2223b83d1db61b3z/Men-s-Casual-Trendy-Korean-Style-Lightweight-Spring-Summer-2023-New-Jacket-Student-Fashion-Sun-Protection.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S630aa3ab97474623b5bb5e59a03d71dcf/Men-s-Linen-Pants-Cotton-Linen-Casual-Trousers-Loose-Fit-Straight-Leg-Pants-Summer-Thin-Wide.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae01.alicdn.com/kf/S04148246fd2248c4b4ff9abfdb334e06J.jpg" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
                <div className='group relative'>
                    <div className='cursor-pointer relative group-hover:z-20'>
                        <div className='h-[220px] relative'>
                            <img className='w-full h-full rounded-3xl' src="https://ae-pic-a1.aliexpress-media.com/kf/S50d2674ce65e4d09a7038b0e9def2aa5F/Streetwear-Hip-Hop-Joggers-Cargo-Pants-Men-Multi-Pocket-Elastic-Waist-Harem-Trousers-Male-Harajuku-Casual.jpg_350x350xz.jpg_.webp" alt="" />
                            <button className='bg-white size-[50px] shadow hover:text-white flex items-center justify-center rounded-full absolute bottom-[15px] right-[15px] hover:bg-black'>
                                <BsCartPlus className='text-[25px] font-bold'/>
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <p>Vintage American Style Streetwear</p>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStar className='text-[16px] text-black'/>
                                    <BiSolidStarHalf className='text-[16px] text-black'/>
                                </div>
                                <p className='text-[13px]'>800+ sold</p>
                            </div>
                            <h1 className='font-bold'><span className='text-xs'>NGN</span><span className='text-2xl'>31,141</span><span className='text-xs'>.06</span></h1>
                            <h1 className='text-red-500 font-bold'>Extra 1% off with coins</h1>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                        <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center border-b pb-16 mb-10'>
                <button className='bg-red-600 text-white px-7 text-lg py-2 rounded-3xl font-bold'>View more</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage
