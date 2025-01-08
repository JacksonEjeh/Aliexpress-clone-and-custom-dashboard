import React, { useContext } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { IoCashOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { TbXboxX } from "react-icons/tb";
import { Link } from 'react-router-dom';



const NewCategory = () => {
    const {closeSidebar, editModal, handleEditSubmit, handleOnChangeForEditCategory, editCategory, closeEditModal, editCategoryBtn, categories, focused, deleteCategory, formData, newCategoryModal, toggleModal, handleChangeForNewCategory, newCategory, newCategoryError, handleSubmitForNewCategory} = useContext(AliDashboardContext)
    
  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0 h-screen' : 'h-screen z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className='p-5'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <p className='font-semibold text-lg'>Categories</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Dashboard</p>
                    <p><HiMiniChevronDoubleRight className='pt-1 text-lg' /></p>
                    <p className='text-custom-text text-sm'>Categories</p>
                </div>
            </div>
            <div className="flex justify-end items-center mb-5">
                <div onClick={toggleModal} className='cursor-pointer  hover:border group border border-custom-text hover:border-white text-white size-10 flex items-center justify-center gap-1 transition-all duration-500 rounded-full hover:w-[75px]'><LuPlus /> <span className='hidden group-hover:block'>Add</span></div>
                <div className='flex gap-2'>
                    <input
                    type="text"
                    placeholder="Search for"
                    className="ml-4 border border-custom-text bg-transparent text-white text-sm p-2 rounded-md focus:outline-none w-[300px]"
                    />
                    <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
                    Search
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    categories?.map((category) => {
                        return (
                            <div key={category.id} className='bg-primary p-5 rounded-lg flex items-center gap-5 border border-primary hover:border hover:border-custom-text transition-colors duration-500 cursor-pointer'>
                                <div className='size-[100px] bg-red-300'>
                                    <img className='size-full' src={category.image} alt="" />
                                </div>
                                <div className='w-[70%]'>
                                    <Link to={`/categoryProduct/${category.id}`}><h1 className='text-custom-text font-bold text-2xl hover:text-red-500'>{category.name}</h1></Link>
                                    <p className='text-xs text-custom-text mb-4'>Total products: 329</p>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <div className='flex items-center gap-1'>
                                                <IoCashOutline />
                                                <p className='text-sm'>Total income:  ${category.total_earned}</p>

                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <RiDiscountPercentLine className='text-lg' />
                                                <p className='text-sm'>Total Sale: {category.total_sold}</p>
                                            </div>
                                        </div>
                                        <div className='cursor-pointer transition-colors duration-500 hover:border-2 group border border-custom-text hover:border-white text-white size-6 flex items-center justify-center rounded-full relative'><BsThreeDots />               
                                            <div className='hidden group-hover:block bg-primary py-2 w-[150px] rounded-lg absolute right-[-140px] bottom-[-50px]'>
                                                <div onClick={()=>editCategoryBtn(category.id)} className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                                    <RiEditLine />
                                                    <p className='text-white text-sm'>Edit</p>
                                                </div>
                                                <div onClick={()=>deleteCategory(category.id)} className='flex items-center hover:bg-secondary px-3 py-1 gap-2 cursor-pointer'>
                                                    <RiDeleteBin5Line />
                                                    <p className='text-white text-sm'>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className={newCategoryModal ? 'bg-gray-800/50 absolute top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center':'hidden'}>
            <div className='w-[50%] bg-custom-color shadow-sm rounded-2xl shadow-secondary p-10'>
                <div className='mb-6 flex justify-between pr-5'>
                    <h1 className='font-bold text-xl'>Add Category</h1>
                    <div onClick={toggleModal} className='cursor-pointer'>
                        <TbXboxX className='text-3xl' />
                    </div>
                </div>
                <form onSubmit={handleSubmitForNewCategory}>
                    <div className="relative mb-5">
                        <input
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                            focused || formData ? "border-blue-600" : ""
                            }`}
                            placeholder=" "
                            name='name'
                            onChange={handleChangeForNewCategory}
                            value={newCategory.name}
                        />
                        <label
                            className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                            focused || formData
                                ? "scale-75 -translate-y-4 "
                                : "scale-100 translate-y-0"
                            } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                        >
                            Category Name
                        </label>
                        {newCategoryError.name && <p className='text-red-500 text-xs absolute'>{newCategoryError.name}</p>}
                    </div>
                    <div className="relative mb-7">
                        <input
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                            focused || formData ? "border-blue-600" : ""
                            }`}
                            placeholder=" "
                            name='image'
                            onChange={handleChangeForNewCategory}
                            value={newCategory.image}
                        />
                        <label
                            className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                            focused || formData
                                ? "scale-75 -translate-y-4 "
                                : "scale-100 translate-y-0"
                            } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                        >
                            Upload image
                        </label>
                        <p className='text-xs text-custom-text'>image url</p>
                        {newCategoryError.image && <p className='text-red-500 text-xs absolute'>{newCategoryError.image}</p>}
                    </div>
                    <div>
                        <button className='w-full py-2 bg-green-700 hover:bg-green-800 font-bold rounded'>Done</button>
                    </div>
                </form>
            </div>
        </div>
        <div className={editModal ? 'bg-gray-800/50 absolute top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center':'hidden'}>
            <div className='w-[50%] bg-custom-color shadow-sm rounded-2xl shadow-secondary p-10'>
                <div className='mb-6 flex justify-between pr-5'>
                    <h1 className='font-bold text-xl'>Add Category</h1>
                    <div onClick={closeEditModal} className='cursor-pointer'>
                        <TbXboxX className='text-3xl' />
                    </div>
                </div>
                <form onSubmit={handleEditSubmit}>
                    <div className="relative mb-5">
                        <input
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                            focused || formData ? "border-blue-600" : ""
                            }`}
                            placeholder=" "
                            name='name'
                            onChange={handleOnChangeForEditCategory}
                            value={editCategory.name}
                        />
                        <label
                            className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                            focused || formData
                                ? "scale-75 -translate-y-4 "
                                : "scale-100 translate-y-0"
                            } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                        >
                            Category Name
                        </label>
                        {newCategoryError.name && <p className='text-red-500 text-xs absolute'>{newCategoryError.name}</p>}
                    </div>
                    <div className="relative mb-7">
                        <input
                            className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded text-white bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                            focused || formData ? "border-blue-600" : ""
                            }`}
                            placeholder=" "
                            name='image'
                            onChange={handleOnChangeForEditCategory}
                            value={editCategory.image}
                        />
                        <label
                            className={`absolute text-md bg-custom-color text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                            focused || formData
                                ? "scale-75 -translate-y-4 "
                                : "scale-100 translate-y-0"
                            } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                        >
                            Upload image
                        </label>
                        <p className='text-xs text-custom-text'>image url</p>
                        {newCategoryError.image && <p className='text-red-500 text-xs absolute'>{newCategoryError.image}</p>}
                    </div>
                    <div>
                        <button className='w-full py-2 bg-green-700 hover:bg-green-800 font-bold rounded'>Done</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewCategory
