import React from 'react'
import choiceDay from '../images/choiceDay.png'
import discount from '../images/discount.gif'
import betterBanner from '../images/betterBanner.webp'
import choice2 from '../images/choice2.png'
import blue from '../images/blue.png'
import red from '../images/red.png'
import green from '../images/green.png'

const Hero = () => {
  return (
    <div>
        <div className='w-[85%] mx-auto mb-5'>
            <div className='flex gap-[125px] bg-cover bg-center h-[350px] px-[75px]' style={{backgroundImage: "url('https://ae01.alicdn.com/kf/Sc8c3d6f2c1b64397b9184f1902380345l.jpg')"}}>
                <div className='py-[45px]'>
                    <div className='flex items-center'>
                        <img className='h-6' src={choiceDay} alt="" />
                        <p className='text-[18px] font-normal'>Start: Oct 1, 08:00 GMT</p>
                    </div>
                    <img className='h-[250px]' src={discount} alt="" />
                </div> 
                <div className='py-7 grid grid-cols-3 gap-5'>
                    <div className='h-[290px] relative'>
                        <img className='h-full' src={blue} alt="" />
                        <div className='absolute top-0 right-0 left-0 bottom-0 py-[26px] px-3'>
                            <h1 className='text-[21px] font-bold text-blue-900 mb-7'>Men's fashion</h1>
                            <div>
                                <div className='grid grid-cols-2  rounded-xl mb-[10px]'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S71d2d9dbf26847ae8648bc20252db2b0I.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 rounded-xl'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sf9524077a84c4369990e3e6e2298e54dK.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[290px] relative'>
                        <img className='h-full' src={red} alt="" />
                        <div className='absolute top-0 right-0 left-0 bottom-0 py-[26px] px-3'>
                            <h1 className='text-[21px] font-bold text-red-900 mb-7'>Bestsellers</h1>
                            <div>
                                <div className='grid grid-cols-2  rounded-xl mb-[10px]'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S4d69db649bf84ca3924044d96d49221d3.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 rounded-xl'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sbbed20dac2864b36a3c7bf8b8d031f79p.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[290px] relative'>
                        <img className='h-full' src={green} alt="" />
                        <div className='absolute top-0 right-0 left-0 bottom-0 py-[26px] px-3'>
                            <h1 className='text-[21px] font-bold text-green-900 mb-7'>Halloween</h1>
                            <div>
                                <div className='grid grid-cols-2  rounded-xl mb-[10px]'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S1a1beb2dd4984818937eb2cc2fceb772Q.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 rounded-xl'>
                                    <div className='bg-cover bg-center h-[90px] rounded-l-md' style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S64d24bd20c0f433bb30a18429e918ad1k.jpg_480x480.jpg_.webp')"}}></div>
                                    <div className='flex items-center overflow-hidden bg-white rounded-r-md'>
                                        <div className='p-1'>
                                            <p className='text-red-500 text-sm font-bold'>NGN6,996.16</p>
                                            <h1 className='line-through text-gray-500 text-lg'>NGN14,278.4</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className='w-[75%] mx-auto'>
            <div className='mb-5'>
                <img src={betterBanner} alt="" />
            </div>
            <div className='flex gap-5'>
                <div>
                    <div className='bg-gray-100 rounded-3xl p-5 flex gap-4 mb-5'>
                        <button className='bg-black text-white font-bold text-xl px-5 py-3 rounded-full'>Register</button>
                        <button className='bg-white border border-black text-black font-semibold text-xl px-6 py-3 rounded-full'>Sign in</button>
                    </div>
                    <div className='bg-red-50 rounded-3xl p-5'>
                        <div className='mb-16'>
                            <h1 className='text-red-500 font-bold text-2xl'>Welcome Deal</h1>
                            <p className='text-[16px]'>Your exclusive price</p>
                        </div>
                        <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S61495043a1df471a93b62b2c1afb4920A.jpg_350x350.jpg_.webp')"}} className='h-[250px] rounded-3xl bg-cover bg-center'></div>
                        <p className='text-red-500 font-bold text-lg mb-4'>NGN7,152.45 <span className='line-through text-gray-500 text-sm'>NGN14,304.91</span></p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-3xl p-5'>
                    <div className='mb-5'>
                        <h1 className='text-red-500 font-bold text-2xl'>Bestsellers</h1>
                        <p className='text-[16px]'>Get discounts on popular items</p>
                    </div>
                    <div className='bg-white px-7 py-4 rounded-3xl'>
                        <div className='px-5 mb-2'>
                            <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Hadc87922c9094eaba250c595b8e89a74a.jpg_480x480.jpg_.webp')"}} className='mb-2 h-[220px] w-[220px] relative rounded-3xl bg-cover bg-center' >
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S78fc35f117b0418fa0e1ac4befb39eaaH/216x184.png_.webp')"}} className='size-[110px] absolute bottom-[-70px] right-[-30px] flex items-center  bg-contain bg-no-repeat bg-center'>
                                    <p className='font-bold text-4xl text-white ml-6'>50</p>
                                </div>
                            </div>
                            <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 18,451</span><span className='text-[13px] text-red-500 font-bold'>.06 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sfe3ac564f7be4e2a81d9fee708d6bdb5u.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 20,299</span><span className='text-[13px] text-red-500 font-bold'>.86 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                            </div>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sce0b15a82a704ae388152f394fe729add.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center' ></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 19,407</span><span className='text-[13px] text-red-500 font-bold'>.00 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-gray-100 rounded-3xl p-5 mb-5'>
                        <div className='mb-5'>
                            <img className='h-[27px]' src={choice2} alt="" />
                            <p>Free shipping</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S028d02e0b809490d955c1676f8fddd15P.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 5,968 </span><span className='text-[13px] text-red-500 bg-red-100 font-bold'>-50%</span></p>
                            </div>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S43ae933ffbfd45af92c7b85f78b715b5h.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 10,600 </span><span className='text-[13px] text-red-500 bg-red-100 font-bold'>-53%</span></p>
                            </div>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Scf1d2f5ceeb94b3397ce49b8721613caS.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 9,992 </span><span className='text-[13px] text-red-500 bg-red-100 font-bold'>-52%</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 rounded-3xl p-5'>
                        <div className='mb-5'>
                            <h1 className='font-bold text-[25px]'>Weekly deals</h1>
                            <p>Low prices in the past 30 days</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/H7d75028d668342039a441630d533046bC.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 44,334</span><span className='text-[13px] text-red-500 font-bold'>.31 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                            </div>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/S84f4fea14a1a4faab6df5770a6fdb0ce7.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 31,392</span><span className='text-[13px] text-red-500 font-bold'>.69 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                            </div>
                            <div>
                                <div style={{backgroundImage: "url('https://ae-pic-a1.aliexpress-media.com/kf/Sf4cd43db43f64603a164c15c52df9758r.jpg_480x480.jpg_.webp')"}} className='h-[130px] rounded-3xl bg-cover bg-center'></div>
                                <p><span className='text-[13px] text-red-500 font-bold'>NGN</span><span className='text-red-500 text-lg font-bold'> 26,927</span><span className='text-[13px] text-red-500 font-bold'>.68 </span><span className='line-through text-gray-500 text-[13px]'>N</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
