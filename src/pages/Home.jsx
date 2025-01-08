import Hero from '../components/Hero'
import { BsCartPlus } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { useContext } from 'react';
import { AliExpressContext } from '../context/appContext';
import Loader from '../components/Loader';
import MegaMenu from '../components/MegaMenu';


const Home = () => {
    const {products, loading} = useContext(AliExpressContext)
    if(loading) return <Loader />
  return (
    <div>
        <MegaMenu />
        <Hero />
        <div className='py-5 w-[75%] mx-auto'>
            <div className='mb-6'>
                <h1 className='font-bold text-2xl'>More to Love</h1>
            </div>
            <div className='grid grid-cols-5 gap-4'>
                {/* card */}
                {
                    products?.map(product =>{
                        return(
                            <div className='group relative' key={product.id}>
                                <div className='cursor-pointer relative group-hover:z-20'>
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
                                </div>
                                <div className='hidden group-hover:flex bg-white items-end z-10 p-3 absolute rounded-3xl shadow-xl bottom-[-70px] border right-[-17px] left-[-17px] top-[-17px]'>
                                    <button className='bg-black text-white font-bold w-full py-[8px] rounded-full'>See preview</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home
