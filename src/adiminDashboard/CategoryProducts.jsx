import React, { useContext, useEffect, useState } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryProducts = () => {
    const {closeSidebar, merchantId, base_url}= useContext(AliDashboardContext)

    const {id} = useParams()
    const [categoryData, setCategoryData] = useState([])
    
    const getCategoryProduct = async ()=>{
        try {
            const response = await axios.get(`${base_url}/products?merchant_id=${merchantId}&category_id=${id}`)
            if (response.status !== 200) {
                throw new Error("Error fetching product under category");
            }
            setCategoryData(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getCategoryProduct()
    }, [id])
    return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0 h-screen' : 'h-screen z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className='p-5'>
            <div className='mb-4'>
                <h1 className='text-lg '>Now showing products under <span className='font-bold'>Men's</span> category</h1>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <input
                    type="text"
                    placeholder="Search for"
                    className="ml-4 bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none w-[300px]"
                    />
                    <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
                    Export
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-left bg-custom-color text-gray-300">
                                <th className="px-4 py-2">Product Name</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Revenue</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryData.map((pro) => (
                                <tr key={pro.id} className="text-left border-b border-gray-700">
                                    <td className="px-4 py-2 hover:text-red-500"><Link className='flex items-center gap-2' to={`/Detail/${pro.id}`}>{pro.images && <img className='size-12 rounded-full' src={pro.images[0]} alt='' />}{pro.title}</Link></td>
                                    <td className="px-4 py-2">{pro.category.name}</td>
                                    <td className="px-4 py-2">{pro.price}</td>
                                    <td className="px-4 py-2">{pro.quantity}</td>
                                    <td className="px-4 py-2">{pro.currency}{pro.total_earned}0</td>
                                    <td className="px-4 py-2">
                                        <button className="bg-gray-700 text-gray-400 px-2 py-1 rounded">...</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-400">Showing 07 of 19 Results</p>
                    <div className="flex space-x-2">
                        <button className="bg-gray-700 text-white px-2 py-1 rounded">Prev</button>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded">1</button>
                        <button className="bg-blue-600 text-white px-2 py-1 rounded">2</button>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded">3</button>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryProducts
