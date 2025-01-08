import React, { useContext, useEffect, useState } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoContainer } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




const DetailPage = () => {
    const {id} = useParams()
    const {closeSidebar, isDeleteModal, isDeleteModalBtn, isDeleteModalBtnClose, base_url,handleDeleteProduct, setIsEditProduct, setEditProductData} = useContext(AliDashboardContext)
    localStorage.setItem('productIdForDashboard', id)

    const [review, setReview] = useState([])
    const getReview = async ()=>{
        try {
            const response = await axios.get(`${base_url}/reviews?product_id=${id}`)
            if (response.status !== 200) {
                throw new Error("Error feting  liked products");
            }
            setReview(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const [productDetail, setProductDetail] = useState({})
    useEffect(()=>{
        const fetchSingleProduct = async()=>{
            try {
                const res = await axios.get(`${base_url}/products/${id}`)
                if (res.status !== 200) {
                    throw new Error('Error fetching single data')
                }
                setProductDetail(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchSingleProduct()
        getReview()
    }, [id])

    const navigate = useNavigate()
    const editProductBtn = (product_id) =>{
        navigate('/newProduct')
        setIsEditProduct(true)
        setEditProductData({
            title: productDetail.title,
            descp: productDetail.descp,
            price: productDetail.price,
            brand: productDetail.brand,
            quantity: productDetail.quantity,
            currency: productDetail.currency,
            min_qty: productDetail.min_qty,
            max_qty: productDetail.max_qty,
            category_id: productDetail.category.id,
            images:  productDetail.images,
            discount: productDetail.discount,
            discount_expiration: productDetail.discount_expiration,
            shipping_location:  productDetail.shipping_location,
            has_shipment:  productDetail.has_shipment,
            has_refund_policy:   productDetail.has_refund_policy,
            has_discount: productDetail.has_discount,
            has_variation: productDetail.has_variation,
            product_id:  productDetail.id,
        })
    }
    

  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0' : 'z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className={isDeleteModal ? 'h-screen bg-black/80 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center': 'hidden'}>
            <div className='bg-primary p-10  text-center rounded-lg'>
                <h1 className='text-custom-text text-lg'>Are you sure you want to delete this product</h1>
                <div className='flex justify-center gap-10 mt-10'>
                    <button onClick={isDeleteModalBtnClose} className='bg-red-600 px-4 py-1 rounded-lg hover:bg-red-700'>No</button>
                    <button onClick={()=>handleDeleteProduct(productDetail.id)} className='bg-green-600 px-4 py-1 rounded-lg hover:bg-green-700'>Yes</button>
                </div>
            </div>
        </div>
        <div className='p-5'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <p className='font-semibold text-lg'>Overview</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Dashboard</p>
                    <p><HiMiniChevronDoubleRight className='pt-1 text-lg' /></p>
                    <p className='text-custom-text text-sm'>Overview</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[27%]'>
                    <div className='bg-primary rounded-lg p-5 sticky top-[90px] mb-5'>
                        <div className='bg-secondary h-[350px] rounded-lg mb-5'>
                            <img className='w-full h-full rounded-lg' src={productDetail.images ? productDetail.images[0] : 'https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg'} alt="" />
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='bg-secondary h-[150px] rounded-lg'>
                                <img className='w-full h-full rounded-lg' src={productDetail.images ? productDetail.images[1] : 'https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg'} alt="" />
                            </div>
                            <div className='bg-secondary h-[150px] rounded-lg'>
                                <img className='w-full h-full rounded-lg' src={productDetail.images ? productDetail.images[2] : 'https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg'} alt="" />
                            </div>
                        </div>
                        <div className='mt-5 flex items-center gap-1'>
                            <button className='text-xl hover:text-red-500 focus:text-red-500 text-custom-text'><FiHeart /></button>
                            <p className='text-custom-text'>Liked by <span className='font-bold'>Jackson</span> and 23 others</p>
                        </div>
                    </div>
                    <div className='bg-primary rounded-lg p-5 sticky top-[710px] flex gap-5'>
                        <button className='w-full py-3 bg-green-500/20 font-bold text-sm rounded-lg hover:text-white hover:bg-green-600 transition-colors duration-500 text-green-600'>Add to Cart</button>
                        <button className='w-full py-3 bg-red-500/20 font-bold text-sm rounded-lg hover:text-white hover:bg-red-600 transition-colors duration-500 text-red-600'>Buy Now</button>
                    </div>
                </div>
                <div className='bg-primary w-[73%] rounded-lg p-5'>
                    <div className='flex justify-between mb-2'>
                        <div className='bg-red-500/20 text-red-600 text-xs font-semibold px-3 py-1 rounded'>New Arrivals</div>
                        <div className='cursor-pointer transition-colors duration-500 hover:border-2 group border border-custom-text hover:border-white text-white size-8 flex items-center justify-center rounded-full relative'><BsThreeDots />               
                            <div className='hidden group-hover:block bg-secondary py-2 w-[150px] rounded-lg absolute right-[-100px] bottom-[-70px]'>
                                <div onClick={()=>editProductBtn(productDetail.id)} className='flex items-center hover:bg-primary px-3 py-1 gap-2 cursor-pointer'>
                                    <RiEditLine />
                                    <p className='text-white text-sm'>Edit</p>
                                </div>
                                <div onClick={isDeleteModalBtn} className='flex items-center hover:bg-primary px-3 py-1 gap-2 cursor-pointer'>
                                    <RiDeleteBin5Line />
                                    <p className='text-white text-sm'>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>{productDetail.title}</h1>
                        <div className='flex items-center gap-6 mb-2'>
                            <p className='text-custom-text text-xs font-semibold'>Published: 20 Oct, 2023</p>
                            <p className='text-custom-text text-xs font-semibold'>Seller: Themesdesign</p>
                        </div>
                        <div className='flex items-center gap-3 mb-5'>
                            <div className='flex'>
                                <BiSolidStar className='text-lg text-yellow-600'/>
                                <BiSolidStar className='text-lg text-yellow-600'/>
                                <BiSolidStar className='text-lg text-yellow-600'/>
                                <BiSolidStar className='text-lg text-yellow-600'/>
                                <BiSolidStarHalf className='text-lg text-yellow-600'/>
                            </div>
                            <p className='text-sm font-semibold'>(4.8)</p>
                            <p className='text-sm font-semibold'>{productDetail.review} Reviews</p>
                            <p className='text-sm font-semibold'>Sold {productDetail.total_sold}</p>
                        </div>
                        <p className='text-red-600 text-xs'>Special offer</p>
                        <div className='flex items-center gap-1 mb-2'>
                            <p className='text-xl font-semibold'>{productDetail.currency}{productDetail.price}</p>
                            {productDetail.discount && <p className='text-custom-text line-through'>{productDetail.currency}599.99</p>}
                            {productDetail.discount && <p className='text-red-600 font-semibold'>{productDetail.discount}% Off</p>}
                        </div>
                        <p className='text-sm font-semibold mb-1'>Colors</p>
                        <div className='flex gap-2 mb-2'>
                            <div className='size-5 rounded bg-white'></div>
                            <div className='size-5 rounded bg-blue-400'></div>
                            <div className='size-5 rounded bg-red-400'></div>
                            <div className='size-5 rounded bg-green-400'></div>
                            <div className='size-5 rounded bg-gray-400'></div>
                            <div className='size-5 rounded bg-gray-400'></div>
                        </div>
                        <p className='text-sm font-semibold mb-1'>Sizes</p>
                        <div className='flex gap-2 mb-3'>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary'>XS</div>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary bg-blue-500/20 shadow-inner shadow-custom-text'>S</div>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary'>M</div>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary'>L</div>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary'>XL</div>
                            <div className='size-8 flex text-sm items-center justify-center rounded border-2 border-secondary'>2XL</div>
                        </div>
                        <p className='font-semibold '>Available Offers (2)</p>
                        <div className='flex items-center gap-1'>
                            <AiOutlineTags className='text-red-500 text-lg' />
                            <p className='font-light'>Bank Offer 10% Instant Discount on Paypal, up to $1250 on orders of $5,000 and above T&C</p>
                        </div>
                        <div className='flex items-center gap-1 mb-5'>
                            <AiOutlineTags className='text-red-500 text-lg' />
                            <p className='font-light'>Special Price Get at flat $199 T&C</p>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div className='h-[100px] w-[250px] flex text-sm gap-5 items-center justify-center rounded-lg border-2 border-secondary'>
                                <LiaShippingFastSolid className='text-2xl text-custom-text' />
                                <div>
                                    <p className='font-semibold'>Estimated Delivery</p>
                                    <p className='text-custom-text font-semibold'>01 - 07 Nov, 2024</p>
                                </div>
                            </div>
                            <div className='h-[100px] w-[250px] flex text-sm gap-5 items-center justify-center rounded-lg border-2 border-secondary'>
                                <GoContainer className='text-2xl text-custom-text' />
                                <div>
                                    <p className='font-semibold'>{productDetail.shipping_text ?  productDetail.shipping_text : 'Free Shipping & Returns'}</p>
                                    <p className='text-custom-text font-semibold'>On all orders over</p>
                                    <p className='text-custom-text font-semibold'>{productDetail.currency}5000.00</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-semibold mb-3'>Product Description:</h1>
                        <p className='text-sm text-custom-text mb-2'>{productDetail.descp}</p>
                        <p className='text-sm text-custom-text mb-5'><span className='font-bold'>Avoid shapeless and baggy clothing.</span> Stay away from pieces with extra fabric at the hips or bust to keep your look proportionate. Avoid wearing ruffles or pleats around your waist or hips. Be sure to wear supportive undergarments that fit you well!</p>
                        <div>
                            <h1 className='font-semibold mb-3'>Reviews & Ratings:</h1>
                            <div className='flex gap-5'>
                                {/* ratings */}
                                <div className='w-[30%]'>
                                    <div className='border-4 rounded-2xl text-center border-dotted border-secondary p-4'>
                                        <h1 className='font-semibold'>Customer Ratings</h1>
                                        <div className='py-2 px-6 rounded-full bg-secondary/70 flex items-center mb-1 justify-between'>
                                            <div className='flex'>
                                                <BiSolidStar className='text-yellow-600'/>
                                                <BiSolidStar className='text-yellow-600'/>
                                                <BiSolidStar className='text-yellow-600'/>
                                                <BiSolidStar className='text-yellow-600'/>
                                                <BiSolidStarHalf className='text-yellow-600'/>
                                            </div>
                                            <p className='text-sm text-custom-text'>(4.8 out of 5)</p>
                                        </div>
                                        <p className='text-xs text-custom-text font-semibold mb-2'>4,213 total ratings</p>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm text-custom-text font-semibold'>5</p>
                                                <BiSolidStar className='text-yellow-600' />
                                            </div>
                                            <div className='py-[3px] rounded-full bg-secondary relative w-full'>
                                                <div className='absolute top-0 bottom-0 bg-green-400 left-0 w-[80%] rounded-full'></div>
                                            </div>
                                            <p className='text-sm text-custom-text font-semibold'>1,300</p>
                                        </div>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm text-custom-text font-semibold'>4</p>
                                                <BiSolidStar className='text-yellow-600' />
                                            </div>
                                            <div className='py-[3px] rounded-full bg-secondary relative w-full'>
                                                <div className='absolute top-0 bottom-0 bg-blue-400 left-0 w-[60%] rounded-full'></div>
                                            </div>
                                            <p className='text-sm text-custom-text font-semibold'>1,050</p>
                                        </div>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm text-custom-text font-semibold'>3</p>
                                                <BiSolidStar className='text-yellow-600' />
                                            </div>
                                            <div className='py-[3px] rounded-full bg-secondary relative w-full'>
                                                <div className='absolute top-0 bottom-0 bg-purple-400 left-0 w-[40%] rounded-full'></div>
                                            </div>
                                            <p className='text-sm text-custom-text font-semibold'>720</p>
                                        </div>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm text-custom-text font-semibold'>2</p>
                                                <BiSolidStar className='text-yellow-600' />
                                            </div>
                                            <div className='py-[3px] rounded-full bg-secondary relative w-full'>
                                                <div className='absolute top-0 bottom-0 bg-yellow-400 left-0 w-[20%] rounded-full'></div>
                                            </div>
                                            <p className='text-sm text-custom-text font-semibold'>320</p>
                                        </div>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm text-custom-text font-semibold'>1</p>
                                                <BiSolidStar className='text-yellow-600' />
                                            </div>
                                            <div className='py-[3px] rounded-full bg-secondary relative w-full'>
                                                <div className='absolute top-0 bottom-0 bg-red-400 left-0 w-[10%] rounded-full'></div>
                                            </div>
                                            <p className='text-sm text-custom-text font-semibold'>54</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Reviews */}
                                <div className='w-[70%] p-4'>
                                    <div className='mb-4'>
                                        <p className='font-semibold'>Reviews</p>
                                    </div>
                                    <div>
                                        {
                                            review.map(r=>{
                                                if (review.length < 1) {
                                                    <p className='font-bold'>No  reviews yet</p>;
                                                }
                                                return(
                                                    <div key={r.id} className='border-b-2 border-secondary pb-4'>
                                                        <div className='flex items-center justify-between'>
                                                            <div className='flex items-center gap-2'>
                                                                <div className='size-10 bg-gray-500 rounded-full'>
                                                                    <img className='size-full rounded-full' src="https://themesdesign.in/tailwick/html-rtl/assets/images/avatar-2.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className='font-bold'>{r.user.first_name} {r.user.last_name}</p>
                                                                    <p className='text-xs text-custom-text font-semibold'>on {r.created_at}</p>
                                                                </div>
                                                            </div>
                                                            <div className='cursor-pointer transition-colors duration-500 hover:border-2 group border border-custom-text hover:border-white text-white size-8 flex items-center justify-center rounded-full relative'><BsThreeDots />               
                                                                <div className='hidden group-hover:block bg-secondary py-2 w-[150px] rounded-lg absolute right-[-100px] bottom-[-70px] border border-secondary'>
                                                                    <div className='flex items-center hover:bg-primary px-3 py-1 gap-2 cursor-pointer'>
                                                                        <RiEditLine className='text-custom-text'/>
                                                                        <p className='text-custom-text text-sm'>Edit</p>
                                                                    </div>
                                                                    <div className='flex items-center hover:bg-primary px-3 py-1 gap-2 cursor-pointer'>
                                                                        <RiDeleteBin5Line className='text-custom-text' />
                                                                        <p className='text-custom-text text-sm'>Delete</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-1 mt-3'>
                                                            <BiSolidStar className='text-yellow-600'/>
                                                            <BiSolidStar className='text-yellow-600'/>
                                                            <BiSolidStar className='text-yellow-600'/>
                                                            <BiSolidStar className='text-yellow-600'/>
                                                            <BiSolidStarHalf className='text-yellow-600'/>
                                                        </div>
                                                        <p className='text-sm text-custom-text mt-1'>"{r.text}"</p>
                                                        <div className='flex items-center gap-5 mt-2'>
                                                            <div className='flex items-center'>
                                                                <AiOutlineLike className='text-green-400 text-sm'/>
                                                                <p className='text-green-400 text-sm'>15</p>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <AiOutlineDislike className='text-red-400 text-sm'/>
                                                                <p className='text-red-400 text-sm'>3</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
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

export default DetailPage
