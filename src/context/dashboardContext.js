import axios from "axios";
import { createContext, useEffect, useState } from   "react";

export const AliDashboardContext = createContext()

export const AliDashboardProvider = ({ children })=>{
    //networkError message
    const [isNetError, setIsNetError] = useState(false)

    //welcome alert
    const [isWelcomeAlert, setIsWelcomeAlert] =useState(()=>{
        const storedWelcomeAlert = localStorage.getItem('welcomeAlert')
        return storedWelcomeAlert ? JSON.parse(storedWelcomeAlert) : true
    })
    const closeWelcomeAlert = ()=>{
        setIsWelcomeAlert(false)
        localStorage.setItem('welcomeAlert',  false)
    }

    // direct user
    const [directUser, setDirectUser] = useState(false)

    //base url
    const base_url = 'http://ecommerce.reworkstaging.name.ng/v2'

    // sidebar
    const [closeSidebar, setCloseSidebar] = useState(false)
    const toggleSidebar = ()=>{
        setCloseSidebar(!closeSidebar)
    }
    //login and reg switch
    const [regLogin, setRegLogin] = useState(false)
    
    const toggleRegLogin = ()=>{
        setRegLogin(!regLogin)
    }

    //Toggle edit profile form
    const [editProfile, setEditProfile] = useState(false)
    const toggleEditProfile = ()=>{
        setEditProfile(!editProfile)
        window.scrollTo({
            top: 500,
            behavior: 'smooth'
        })
    }
    // toggle new category modal
    const [newCategoryModal, setNewCategoryModal] = useState(false)
    const toggleModal = ()=>{
        setNewCategoryModal(!newCategoryModal)
    }
    // toggleDiscount
    const [isDiscount, setIsDiscount] = useState(false)
    const toggleDiscount = ()=>{
        setIsDiscount(!isDiscount)
    }
    // toggleShipment
    const [isShipment, setIsShipment] = useState(false)
    const toggleShipment = ()=>{
        setIsShipment(!isShipment)
    }

    // toggleRefund
    const [isRefund, setIsIsRefund] = useState(false)
    const toggleRefund = ()=>{
        setIsIsRefund(!isRefund)
    }
    // toggleIsVariant
    const [isVariant, setIsVariant] = useState(false)
    const toggleIsVariant = ()=>{
        setIsVariant(!isVariant)
    }

    //For registration page
    const focused = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phones: "",
        store_name: "",
        descp: "",
        icon: "",
        banner: "",
        password: "",
        retype_password: "",
    });
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData((prevState)=>({
            ...prevState,
            [name]: value
        }))
        // console.log(`${name}: ${value}`)
    }
    // errorMsg and email regex
    const [errors, setErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phones: "",
        store_name: "",
        descp: "",
        icon: "",
        banner: "",
        password: "",
        retype_password: "",
        emailExist: ""
    });
    const validateEmail = (email)=>{
        return /\S+@\S+\.\S+/.test(email);
    };
    const formValidation = ()=>{
        const newError = {}
        if (formData.first_name.trim().length < 2) {
            newError.first_name = "Please provide your first name"
        }
        if (formData.last_name.trim().length < 2) {
            newError.last_name = "Please provide your last name"
        }
        if(!validateEmail(formData.email)){
            newError.email =  "Please provide a valid email address"
        }
        if (formData.phones.trim().length < 11) {
            newError.phones = "Please provide a valid phone number"
        }
        if (formData.store_name === "") {
            newError.store_name = "Please provide your store name"
        }
        if (formData.descp === "") {
            newError.descp = "Please provide store description"
        }
        if (formData.icon === "") {
            newError.icon = "Please provide your icon url"
        }
        if (formData.banner === "") {
            newError.banner = "Please provide your banner url"
        }
        if (formData.password.trim().length < 8) {
            newError.password = "Minimum of 8 characters long."
        }
        if (formData.retype_password === "") {
            newError.retype_password = "Please re-type your password"
        }
        if (formData.retype_password !== formData.password) {
            newError.retype_password = "Password mismatch"
        }

        setErrors(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(formValidation()){
            try {
                const  response = await axios.post(`${base_url}/merchants`, formData);
                if (response.status !== 200) {
                    throw new Error('Network response was not oma')
                }
                if (response.data.code === 304) {
                    alert('Email has already been used by another merchant')
                    return
                }
                // console.log('form submitted successfully', response.data)
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phones: "",
                    store_name: "",
                    descp: "",
                    icon: "",
                    banner: "",
                    password: "",
                    retype_password: "",
                })
                setRegLogin(!regLogin)
                setDirectUser(true)
            } catch (error) {
                setIsNetError(true)
                console.error('Error fetching data:', error.message)
            }
        }
    }


    //For login page
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    })

    const handleLoginChange = (e)=>{
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
        loginFormValidation()
    }
    const [loginErrors, setLoginErrors] = useState({
        email: "",
        password: "",
    });

    const loginFormValidation = ()=>{
        const loginNewError = {}

        //validation rules
        const rules = [
            {
                field: 'email',
                rule: validateLoginEmail,
                message: "Please provide a valid email address"
            },
            {
                field: 'password',
                rule: val => val.trim().length >= 7,
                message: "Minimum of 8 characters required"
            }
        ]
        rules.forEach(({field, rule, message})=>{
            if (!rule(loginFormData[field])) {
                loginNewError[field] = message
            }
        })
        setLoginErrors(loginNewError)
        return Object.keys(loginNewError).length === 0
    }

    //email validation regex
    const validateLoginEmail = email=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
    //posting login details to api
    const handleLoginSubmit = async (e)=>{
        e.preventDefault()
        if(loginFormValidation()){
            try {
                const  response = await axios.post(`${base_url}/merchants/login`, loginFormData);
                if (response.status !== 200) {
                    throw new Error('Network response was not oma')
                }
                if (response.data.code === 404) {
                    alert('Invalid password or email')
                    return
                }
                localStorage.setItem('merchantDetail', JSON.stringify(response.data))
                setLoginFormData({
                    email: "",
                    password: ""
                })
                alert('Login successfully')
                setDirectUser(true)
            } catch (error) {
                setIsNetError(true)
                console.error('Error fetching data:', error.message)
            }
        }
    }


    // form for updating merchant detail

    const merchantDetail = JSON.parse(localStorage.getItem('merchantDetail')) || {
        "id": "671d60ef80dc20362029605c",
        "first_name": "John",
        "last_name": "Doe",
        "email": "ap2@gmail.com",
        "store_name": "Nicolas Aluminium",
        "descp": "All is well that ends well",
        "icon": "",
        "banner": "",
        "phones": [
            98767887,
            98657654
        ],
        "social_media": {},
        "created_at": "2024-10-26T21:36:47.921Z"
    } 

    const merchantId =  merchantDetail.id

    const [updatedInfo, setUpdatedInfo] = useState({
        first_name: merchantDetail.first_name,
        last_name: merchantDetail.last_name,
        email: merchantDetail.email,
        phones: merchantDetail.phones,
        store_name: merchantDetail.store_name,
        descp: merchantDetail.descp,
        icon: merchantDetail.icon,
        banner: merchantDetail.banner,
        state: merchantDetail.state,
        district: merchantDetail.district,
        social_media: {
            x: merchantDetail.x,
            facebook: merchantDetail.facebook,
            instagram: merchantDetail.instagram
        }
    })

    const handleUpdateChange = (e)=>{
        const {name, value} = e.target
        setUpdatedInfo((prevState)=>({
            ...prevState,
            [name]: value
        }))
        updateFormValidation()
    }
    const [updateFormErrors, setUpdateFormErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phones: "",
        store_name: "",
        descp: "",
        icon: "",
        banner: "",
        state: "",
        district: "",
        social_media: {
            x: "",
            face_book: "",
            instagram: ""
        }
    });
    const updateFormValidation = ()=>{

        const updateFormNewErrors = {}

        const rules = [
            {field: 'first_name', rule: val => val !== "", message: 'Please provide your first name'},
            {field: 'last_name', rule: val => val !== "", message: 'Please provide your last name'},
            {field: 'email', rule: validateLoginEmail, message: 'Please provide a valid email address'},
            {field: 'phones', rule: val => val !== "", message: 'Please provide a valid phone number'},
            {field: 'store_name', rule: val => val !== "", message: 'Please provide your store name'},
            {field: 'descp', rule: val => val !== "", message: 'Please provide store description'},
            {field: 'icon', rule: val => val !== "", message: 'Please provide icon URL'},
            {field: 'banner', rule: val => val !== "", message: 'Please provide banner URL'},
            {field: 'state', rule: val => val !== "", message: 'Please provide your state'},
            {field: 'district', rule: val => val !== "", message: 'Please provide your district'},
        ];

        rules.forEach(({field, rule,  message}) => {
            if (!rule(updatedInfo[field])) {
                updateFormNewErrors[field] = message
            }
        })
        
        setUpdateFormErrors(updateFormNewErrors)
        return Object.keys(updateFormNewErrors).length === 0
    }

    const handleUpdateFormSubmit = async (e)=>{
        e.preventDefault()
        if (updateFormValidation()) {
            try {
                const response = await axios.put(`${base_url}/merchants/${merchantId}`, updatedInfo)
                if (response.status !== 200){
                    throw new Error('Error updating merchant data')
                }
                localStorage.setItem('merchantDetail', JSON.stringify(response.data))
                // console.log('form updated successfully', response.data)
            } catch (error) {
                setIsNetError(true)
                console.error('Error updating merchant data:', error.message)
            }            
        }
    }

    // category section
    // creating new category and sending to the api
    const [newCategory, setNewCategory] = useState({
        merchant_id : merchantId,
        name: '',
        image: ''
    })
    const handleChangeForNewCategory = (e)=>{
        const {name, value} = e.target
        setNewCategory((prevState)=>({
            ...prevState,
            [name]: value
        }))
        newCategoryValidation()
    }
    const [newCategoryError, setNewCategoryError] = useState({
        name: '',
        image: ''
    })
    const newCategoryValidation = ()=>{
        const newCategoryNewErrors = {}
        const rules = [
            {field: 'name', rule: (value) => value.trim() !== '', message: 'Category name is required'},
            {field: 'image', rule: (value) => value.trim() !== '', message: 'Category image URL is required'},
        ]
        rules.forEach(({field, rule, message})=>{
            if (!rule(newCategory[field])){
                newCategoryNewErrors[field] = message
            }
        })
        setNewCategoryError(newCategoryNewErrors)
        return Object.keys(newCategoryNewErrors).length === 0
    }
    const handleSubmitForNewCategory = async (e)=>{
        e.preventDefault()
        if (newCategoryValidation()) {
            try {
                const response = await axios.post(`${base_url}/categories`, newCategory)
                if (response.status !== 200) {
                    throw new Error("Error posting category")
                }
                console.log('category created successfully', response.data)
                setNewCategory({
                    name: '',
                    image: ''
                })
                toggleModal()
                getCategories()
            } catch (error) {
                setIsNetError(true)
                console.error(error.message)
            }
        }
    }
    // getting categories from server
    const [categories, setCategories] = useState([])
    const getCategories = async ()=>{
        try {
            const response = await axios.get(`${base_url}/categories?merchant_id=${merchantId}`)
            if (response.status !== 200) {
                throw new Error("Error fetching categories")
            }
            setCategories(response.data)
        } catch (error) {
            setIsNetError(true)
            console.error(error.message)
        }
    }
    useEffect(()=>{
        getCategories()
        getProduct()
    }, [])


    // delete category
    const deleteCategory  = async (categoryId)=>{
        try {
            const response = await axios.delete(`${base_url}/categories/${categoryId}`)
            if (response.status !== 200) {
                throw new Error("Error deleting category");   
            }
            getCategories()
        } catch (error) {
            setIsNetError(true)
            console.error(error.message)
        }
    }
    //editing category
    const [editCategory, setEditCategory] = useState({
        name: '',
        image: ''
    })
    const [editModal, setEditModal] = useState(false)

    const closeEditModal = ()=>{
        setEditModal(false)
        setEditCategory({
            name: '',
            image: ''
        })
    }
    const editCategoryBtn = (categoryId)=>{
        setEditModal(true)
        categories?.map((cate)=>{
            if(cate.id === categoryId){
                setEditCategory({
                    categoryId : cate.id,
                    name: cate.name,
                    image: cate.image
                })
            }
        })
    }
    // handle onchange
    const handleOnChangeForEditCategory = (e)=>{
        const {name, value} = e.target
        setEditCategory({ ...editCategory, [name]: value })
    }

    //Handle submit btn for editCategory
    const handleEditSubmit = async (e)=>{
        e.preventDefault()
        try {
            const response =  await axios.put(`${base_url}/categories/${editCategory.categoryId}`, editCategory)
            if (response.status !== 200) {
                throw new Error("Error editing category");
            }
            getCategories()
            closeEditModal()
        } catch (error) {
            setIsNetError(true)
            console.error(error.message)
        }
    }
    // image array
    const [image1Value, setImage1Value] = useState('')
    const [image2Value, setImage2Value] = useState('')
    const [image3Value, setImage3Value] = useState('')
    
    // creating product
    const [productData, setProductData] = useState({
        title: '',
        descp: '',
        price: '',
        brand: '',
        quantity: '',
        images: [],
        currency: '',
        min_qty: '',
        max_qty: '',
        discount: '',
        discount_expiration: '',
        shipping_location: [],
        has_refund_policy: null,
        has_discount: isDiscount,
        has_variation: isVariant,
        has_shipment: isShipment,
        category_id: '',
        merchant_id: merchantId
    })
    // handle onchange for product
    const handleOnChangeForProduct = (e)=>{
        const {name, value} = e.target
        setProductData({ ...productData, [name]: value })
        // console.log(`${name}: ${value}`)
    }
    const [addProductError, setAddProductError] = useState({
        title: '',
        descp: '',
        price: '',
        brand: '',
        quantity: '',
        images: '',
        currency: '',
        min_qty: '',
        max_qty: '',
        discount: '',
        discount_expiration: '',
        shipping_location: '',
        category_id: '',
    })
    const addProductValidation = ()=>{
        const addProductNewError = {}
        
        if (isDiscount === true) {
            if (productData.discount === '') {
                addProductNewError.discount = 'Discount is required'
            }
            if (productData.discount_expiration === '') {
                addProductNewError.discount_expiration = 'Discount expiration date is required'
            }
        }
        if (isShipment === true) {
            if (productData.shipping_location.length === 0) {
                addProductNewError.shipping_location = 'Shipping location is required'
            }
        }
        const rules = [
            {field:  'title', rule: (value)=> value.trim() !== '', message: 'Title is required'},
            {field: 'descp', rule: (value)=> value.trim() !== '', message:  'Description is required'},
            {field: 'price', rule: (value)=> value.trim() !== '' && !isNaN(value), message: 'Price is required'},
            {field: 'brand', rule: (value)=> value.trim() !== '', message: 'Brand is required'},
            {field: 'quantity', rule: (value)=> value.trim() !== '' && !isNaN(value), message: 'Quantity is required'},
            {field: 'currency', rule: (value)=> value.trim() !== '', message: 'Currency is required'},
            {field: 'min_qty', rule: (value)=> value.trim() !== '' && !isNaN(value), message: 'Minimum quantity is required'},
            {field: 'max_qty', rule: (value)=> value.trim() !== '' && !isNaN(value), message: 'Maximum quantity is required'},
            {field: 'category_id', rule: (value)=> value.trim() !== '', message:  'Category is required'},
        ]
        rules.forEach(({field, rule, message})=>{
            if(!rule(productData[field])){
                addProductNewError[field] = message
            }
        })
        setAddProductError(addProductNewError)
        return Object.keys(addProductNewError).length === 0
    }
    const [isSuccess, setIsSuccess] = useState(false)
    const closeIsSuccess = ()=>{
        setIsSuccess(false)
    }

    const handleAddProductSubmit = async (e)=>{
        e.preventDefault()
        productData.has_refund_policy = isRefund
        productData.has_discount = isDiscount
        productData.has_shipment = isShipment
        productData.has_variation = isVariant
        productData.images = [image1Value, image2Value, image3Value]
        if(addProductValidation()){
            try {
                const response = await axios.post(`${base_url}/products`, productData)
                if(response.status !== 200){
                    throw new Error('Failed to add product')
                }
                setProductData({title: '', descp: '', price: '', brand: '', quantity:  '', currency: '', min_qty: '', max_qty: '', category_id: '', images: [], discount : '', discount_expiration: '', shipping_location: []})
                setIsSuccess(true)
                getProduct()
                // console.log(response.data)
            } catch (error) {
                setIsNetError(true)
                console.error(error.message)
            }
        }
    }
    // getting all product from the server
    const [getProductData, setGetProductData] = useState([])
    const getProduct =  async ()=>{
        try {
            const response = await axios.get(`${base_url}/products?merchant_id=${merchantId}`)
            if (response.status !== 200) {
                throw new Error("Error getting products");
            }
            setGetProductData(response.data.data)
        } catch (error) {
            setIsNetError(true)
            console.error(error.message)
        }
    }
    // editing a particular product
    const [isEditProduct, setIsEditProduct] = useState(false)

    const [editProductData, setEditProductData] = useState({
        title: '',
        descp: '',
        price: '',
        brand: '',
        quantity: '',
        currency: '',
        min_qty: '',
        max_qty: '',
        category_id: '',
        images: [],
        discount: '',
        discount_expiration: '',
        shipping_location: [],
        has_shipment: false,
        has_refund_policy: false,
        has_discount: false,
        has_variation: false,
        merchant_id: merchantId,
    })

    const handleOnChangeForEditProduct = (e) => {
        const {name, value} = e.target
        setEditProductData({...editProductData, [name]: value})
    }
    const handleEditProductSubmit = async (e)=>{
        e.preventDefault()
        console.log(editProductData)
        try {
            const response = await axios.put(`${base_url}/products/${editProductData.product_id}`, editProductData )
            console.log(response)
            if (response.status !== 200) {
                throw new Error('Error editing product');
            }
            // setIsEditProduct(false)
            window.location.href= `/Detail/${editProductData.product_id}`
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    // delete product
    const [isDeleteModal, setIsDeleteModal] = useState(false)
    const isDeleteModalBtn = ()=>{
        setIsDeleteModal(true)
    }
    const isDeleteModalBtnClose = ()=>{
        setIsDeleteModal(false)
    }
    const handleDeleteProduct = async (product_id) => {
        try {
            const response = await  axios.delete(`${base_url}/products/${product_id}`)
            if (response.status !== 200) {
                throw new Error('Error deleting single product')
            }
            window.location.href = '/products'
            getProduct()
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const directUserToEcommerce =()=>{
        window.location.href = "/ecommerce-home"
    }
    const directUserToDashboard =()=>{
        window.location.href = "/dashboard"
    }


    
    // values
    const value = {
        toggleSidebar, directUserToEcommerce, directUserToDashboard, setDirectUser, directUser, isWelcomeAlert, closeWelcomeAlert, isDeleteModalBtnClose, isDeleteModalBtn, isDeleteModal, handleDeleteProduct, handleEditProductSubmit, setIsEditProduct, setEditProductData, editProductData, handleOnChangeForEditProduct, isEditProduct, isNetError, base_url, merchantId, setIsNetError, getProductData, isSuccess, closeIsSuccess, productData, handleOnChangeForProduct, editModal, toggleDiscount, isDiscount, toggleShipment, isShipment, isRefund, toggleRefund, isVariant, toggleIsVariant, handleEditSubmit, handleOnChangeForEditCategory, editCategory, closeEditModal, editCategoryBtn, newCategoryModal, toggleModal, closeSidebar, focused, formData, handleChange, errors, handleSubmit, toggleRegLogin, regLogin,
        handleLoginChange, loginFormData, loginErrors, handleLoginSubmit, editProfile, toggleEditProfile, updatedInfo, categories, deleteCategory,
        handleUpdateChange, handleUpdateFormSubmit, updateFormErrors, newCategory, handleChangeForNewCategory, newCategoryError, handleSubmitForNewCategory,
        image1Value, setImage1Value, image2Value, setImage2Value, setImage3Value, image3Value, handleAddProductSubmit, addProductError,
    }
    return(
        <AliDashboardContext.Provider value={value}>
            {children}
        </AliDashboardContext.Provider>
    )
}