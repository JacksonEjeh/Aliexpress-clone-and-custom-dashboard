import React, { useContext, useState } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import success from '../images/successful.png'
import { Link } from 'react-router-dom';

const AddProductPage = () => {
    const {closeSidebar, isEditProduct, handleEditProductSubmit, handleOnChangeForEditProduct, editProductData, closeIsSuccess, isSuccess, categories, handleAddProductSubmit, addProductError, image1Value, setImage1Value, image2Value, setImage2Value, setImage3Value, image3Value, handleOnChangeForProduct, productData, focused, toggleRefund, isRefund, isVariant, toggleIsVariant, formData, toggleDiscount, isDiscount, toggleShipment, isShipment} = useContext(AliDashboardContext)
    
    const [image3, setImage3] = useState(false)
    const toggleImageInput = ()=>{
        setImage3(!image3)
    }
  return (
    <div className={closeSidebar ? 'w-[83%] pt-[73px] bg-custom-color text-white z-0' : 'z-0 w-[95%] pt-[73px] text-white bg-custom-color'}>
        <div className='p-5'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <p className='font-semibold text-lg'>{isEditProduct ? 'Edit Product' : 'Add Product'}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Dashboard</p>
                    <p><HiMiniChevronDoubleRight className='pt-1 text-lg' /></p>
                    <p className='text-custom-text text-sm'>{isEditProduct ? 'Edit Product' : 'Add Product'}</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-[75%] bg-primary rounded-lg p-5'>
                    <div className='mb-5'>
                        <h1 className='font-semibold'>{isEditProduct ? 'Edit Product' : 'Create Product'}</h1>
                    </div>
                    <form onSubmit={isEditProduct ? handleEditProductSubmit  : handleAddProductSubmit }>
                        <div className="grid grid-cols-2 gap-5 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='title'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ?  editProductData.title : productData.title}

                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Product Title
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Do not exceed 20 characters when entering the product name.</p>
                                    {addProductError.title && <p className='text-red-500 text-xs absolute'>{addProductError.title}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2  pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='price'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ?   editProductData.price : productData.price}

                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Price
                                    </label>
                                    {addProductError.price && <p className='text-red-500 text-xs absolute'>{addProductError.price}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 mb-7">
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='quantity'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ? editProductData.quantity : productData.quantity}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Quantity
                                    </label>
                                    {addProductError.quantity && <p className='text-red-500 text-xs absolute'>{addProductError.quantity}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        type='number'
                                        name='min_qty'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ? editProductData.min_qty : productData.min_qty}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Min qty
                                    </label>
                                    {addProductError.min_qty && <p className='text-red-500 text-xs absolute'>{addProductError.min_qty}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2  pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        type='number'
                                        name='max_qty'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ? editProductData.max_qty : productData.max_qty}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Max qty
                                    </label>
                                    {addProductError.max_qty && <p className='text-red-500 text-xs absolute'>{addProductError.max_qty}</p>}
                                </div>
                            </div>
                        
                        </div>
                        <div className="grid grid-cols-3 gap-5 mb-7">
                            <div className='relative'>
                                <select className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                    }`}
                                    name='category_id'
                                    onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                    value={isEditProduct ? editProductData.category_id : productData.category_id}
                                    >
                                    <option value="">Select Category</option>
                                    {
                                        categories.map((category)=>{
                                            return <option key={category.id} value={category.id}>{category.name}</option>
                                        })
                                    }
                                </select>
                                <label
                                    className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Category
                                </label>
                                {addProductError.category_id && <p className='text-red-500 text-xs absolute'>{addProductError.category_id}</p>}
                            </div>
                            <div>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='brand'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ? editProductData.brand : productData.brand}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Brand
                                    </label>
                                    {addProductError.brand && <p className='text-red-500 text-xs absolute'>{addProductError.brand}</p>}
                                </div>
                            </div>
                            <div className='relative'>
                                <select className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                    }`}
                                        name='currency'
                                        onChange={isEditProduct ?  handleOnChangeForEditProduct : handleOnChangeForProduct}
                                        value={isEditProduct ? editProductData.currency : productData.currency}

                                    >
                                    <option value="">Select Currency</option>
                                    <option value="USD">United States Dollar (USD)</option>
                                    <option value="EUR">Euro (EUR)</option>
                                    <option value="NGN">Nigeria (NGN)</option>
                                    <option value="GBP">British Pound Sterling (GBP)</option>
                                </select>
                                <label
                                    className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Currency
                                </label>
                                {addProductError.currency && <p className='text-red-500 text-xs absolute'>{addProductError.currency}</p>}
                        </div>
                        </div>
                        <div className='mb-7'>
                            <div className="relative">
                                <input
                                    className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    onChange={isEditProduct ?  handleOnChangeForEditProduct : (e)=>setImage1Value(e.target.value)}
                                    value={isEditProduct ? editProductData.images[0] : image1Value}
                                />
                                <label
                                    className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Product Image
                                </label>
                                {/* {errors.first_name && <p className='text-red-500 text-xs absolute'>{errors.first_name}</p>} */}
                            </div>
                            <div className="relative mt-3">
                                <input
                                    className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    onChange={isEditProduct ?  handleOnChangeForEditProduct : (e)=>setImage2Value(e.target.value)}
                                    value={isEditProduct ? editProductData.images[1] :image2Value}
                                />
                                <label
                                    className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Product Image2
                                </label>
                                {/* {errors.first_name && <p className='text-red-500 text-xs absolute'>{errors.first_name}</p>} */}
                            </div>
                            <div className={image3 ? 'relative mt-3':'hidden'}>
                                <input
                                    className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                    focused || formData ? "border-blue-600" : ""
                                    }`}
                                    placeholder=" "
                                    onChange={isEditProduct ?  handleOnChangeForEditProduct : (e)=>setImage3Value(e.target.value)}
                                    value={isEditProduct ? editProductData.images[2] : image3Value}
                                />
                                <label
                                    className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                    focused || formData
                                        ? "scale-75 -translate-y-4 "
                                        : "scale-100 translate-y-0"
                                    } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                >
                                    Product Image3
                                </label>
                                {/* {errors.first_name && <p className='text-red-500 text-xs absolute'>{errors.first_name}</p>} */}
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[10px] text-custom-text'>image URL only</p>
                                <div className='flex gap-3'>
                                    <div className={image3 ? 'text-[13px] text-red-600 hover:text-red-500 cursor-pointer':'text-[13px] text-blue-600 hover:text-blue-500 cursor-pointer'} onClick={toggleImageInput}>{image3 ? 'Remove':'Add Image'}</div>
                                    {/* <button className='text-[13px] text-blue-600 hover:text-blue-500' onClick={toggleImageInput}>Add Image</button> */}
                                </div>
                            </div>
                        </div>
                        <div className='relative mb-7'>
                            <textarea className={`block px-2.5 pb-4 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                    }`} rows={3} 
                                    placeholder=' '
                                    name='descp'
                                    onChange={isEditProduct ? handleOnChangeForEditProduct : handleOnChangeForProduct}
                                    value={isEditProduct ? editProductData.descp : productData.descp}
                                >
                            
                            </textarea>
                            <label
                                className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                focused || formData
                                    ? "scale-75 -translate-y-4 "
                                    : "scale-100 translate-y-0"
                                } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                            >
                                Description
                            </label>
                            {addProductError.descp && <p className='text-red-500 text-xs absolute'>{addProductError.descp}</p>}
                        </div>
                        {/* discount for addProduct */}
                        <div className={isEditProduct ? 'hidden':"grid grid-cols-3 gap-5 mb-7"}>
                            <div onClick={toggleDiscount} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{isDiscount ? <ImCheckboxChecked />: <ImCheckboxUnchecked />}</div>
                                <p>Discount</p>
                            </div>
                            <div className={isDiscount ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='discount'
                                        onChange={handleOnChangeForProduct}
                                        value={productData.discount}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Discount
                                    </label>
                                    {addProductError.discount && <p className='text-red-500 text-xs absolute'>{addProductError.discount}</p>}
                                </div>
                            </div>
                            <div className={isDiscount ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2  pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        type='date'
                                        name='discount_expiration'
                                        onChange={handleOnChangeForProduct}
                                        value={productData.discount_expiration}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Discount expiry
                                    </label>
                                    {addProductError.discount_expiration && <p className='text-red-500 text-xs absolute'>{addProductError.discount_expiration}</p>}
                                </div>
                            </div>
                        
                        </div>
                        {/* discount for edit */}
                        <div className={isEditProduct ? "grid grid-cols-3 gap-5 mb-7" : 'hidden'}>
                            <div className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{editProductData.has_discount ? <ImCheckboxChecked />: <ImCheckboxUnchecked />}</div>
                                <p>Discount</p>
                            </div>
                            <div className={editProductData.has_discount ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='discount'
                                        onChange={handleOnChangeForEditProduct}
                                        value={editProductData.discount}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Discount
                                    </label>
                                    {addProductError.discount && <p className='text-red-500 text-xs absolute'>{addProductError.discount}</p>}
                                </div>
                            </div>
                            <div className={editProductData.has_discount ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2  pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        type='datetime'
                                        name='discount_expiration'
                                        onChange={handleOnChangeForEditProduct}
                                        value={editProductData.discount_expiration}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Discount expiry
                                    </label>
                                    {addProductError.discount_expiration && <p className='text-red-500 text-xs absolute'>{addProductError.discount_expiration}</p>}
                                </div>
                            </div>
                        
                        </div>
                        {/* shipment for addProduct */}
                        <div className={isEditProduct ? 'hidden':'grid grig-cols-3 gap-5 mb-7'}>
                            <div onClick={toggleShipment} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{isShipment ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p>Shipment</p>
                            </div>
                            <div className={isShipment ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='shipping_location'
                                        onChange={handleOnChangeForProduct}
                                        value={productData.shipping_location}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Shipping Location
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Enter shipping locations.Separate with a coma ( , )</p>
                                    {addProductError.shipping_location && <p className='text-red-500 text-xs absolute'>{addProductError.shipping_location}</p>}
                                </div>
                            </div>
                        </div>
                        {/* shipment for edit */}
                        <div className={isEditProduct ? 'grid grig-cols-3 gap-5 mb-7':'hidden'}>
                            <div className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{editProductData.has_shipment ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p> Edit Shipment</p>
                            </div>
                            <div className={editProductData.has_shipment ? 'block': 'hidden'}>
                                <div className="relative">
                                    <input
                                        className={`block px-2.5 pb-2 pt-4 w-full text-sm rounded-lg text-custom-text bg-transparent border border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                                        focused || formData ? "border-blue-600" : ""
                                        }`}
                                        placeholder=" "
                                        name='shipping_location'
                                        onChange={handleOnChangeForEditProduct}
                                        value={editProductData.shipping_location}
                                    />
                                    <label
                                        className={`absolute text-[15px] bg-primary text-custom-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 ${
                                        focused || formData
                                            ? "scale-75 -translate-y-4 "
                                            : "scale-100 translate-y-0"
                                        } left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 peer-focus:font-bold`}
                                    >
                                        Shipping Location
                                    </label>
                                    <p className='text-[10px] text-custom-text'>Enter shipping locations.Separate with a coma ( , )</p>
                                    {addProductError.shipping_location && <p className='text-red-500 text-xs absolute'>{addProductError.shipping_location}</p>}
                                </div>
                            </div>
                        </div>
                        {/* refundPolicy for addProduct */}
                        <div className={isEditProduct ? 'hidden':'flex gap-16 mb-7'}>
                            <div onClick={toggleRefund} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{isRefund ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p>Refund policy</p>
                            </div>
                            <div onClick={toggleIsVariant} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{isVariant ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p>Variation</p>
                            </div>
                        </div>
                        {/* refundPolicy for edit */}
                        <div className={isEditProduct ?  'flex gap-16 mb-7':'hidden'}>
                            <div onClick={toggleRefund} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{editProductData.has_refund ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p>Refund policy</p>
                            </div>
                            <div onClick={toggleIsVariant} className='flex items-center gap-1 cursor-pointer text-custom-text'>
                                <div>{editProductData.has_variation ? <ImCheckboxChecked />:<ImCheckboxUnchecked />}</div>
                                <p>Variation</p>
                            </div>
                        </div>
                        <div>
                            <button className='bg-green-600 px-10 py-2 font-bold rounded-lg text-white text-sm'>{isEditProduct ?  'Update Product' : 'Create Product'}</button>
                        </div>
                    </form>
                </div>
                <div className='w-[25%] bg-primary rounded-lg'></div>
            </div>
        </div>
        <div className={isSuccess ? 'bg-gray-800/50 fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center':'hidden'}>
            <div className='w-[50%] bg-custom-color flex shadow-sm rounded-2xl shadow-secondary p-10 text-center'>
                <div>
                    <img className='h-[300px]' src={success} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <h1 className='text-4xl mb-1'>🎉Congratulation!🎉</h1>
                        <h1 className='text-2xl mb-5'>Product created successfully</h1>
                        <div className='flex gap-5 justify-center'>
                            <Link to={"/dashboard"}><div onClick={closeIsSuccess} className='cursor-pointer bg-blue-500 px-3 py-1 rounded-lg text-sm '>Back to dashboard</div></Link>
                            <Link to={"/products"}><div className='cursor-pointer bg-green-500 px-3 py-1 rounded-lg text-sm '>View Product</div></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProductPage
