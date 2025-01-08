import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AliExpressContext = createContext()

export const  AliExpressProvider = ({ children }) => {
    const base_url = 'https://api.escuelajs.co/api/v1/categories/2/products';
    const base_url2 = 'http://ecommerce.reworkstaging.name.ng/v2';


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
    const merchant_id =  merchantDetail.id || "671d60ef80dc20362029605c"

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [regPage, setRegPage] = useState(true)

    // regPage
    const open = ()=>{
        setRegPage(true)
    }
    const close = ()=>{
        setRegPage(false)
    }
    
    //Quantity
    const inc = ()=>{
        setQuantity(quantity + 1)
    }
    const dec = ()=>{
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    // getting products from api on HomePage
    const fetchProductByCategory = async ()=>{
        try {
            const response = await axios.get(base_url)
            if (!response.status === 200) {
                throw new Error('Failed to fetch products from Api')
            }
            setProducts(response.data)
            setLoading(false)
        } catch (error) {
            console.log('Error fetching data:', error.message)
        }
    };

    // getting products from api on shopPage
    const fetchAllProduct = async ()=>{
        try {
            const response = await axios.get(`${base_url2}/products/?merchant_id=${merchant_id}`)
            if (!response.status === 200) {
                throw new Error('Failed to fetch products from Api')
            }
            setAllProducts(response.data.data)
            setLoading(false)
        } catch (error) {
            console.log('Error fetching data:', error.message)
        }
    };
    useEffect(()=>{
        fetchProductByCategory()
        fetchAllProduct()
    },[]);

    // register user
    const [userDetail, setUserDetail] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [regSuccess,  setRegSuccess] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const handleChangeForUserReg = (e)=>{
        setUserDetail({...userDetail, [e.target.name]: e.target.value})
    }
    const [userRegError, setUserRegError] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })
    const userRegValidation = ()=>{
        const userRegNewError = {}
        if (confirmPassword  !== userDetail.password) {
            userRegNewError.confirmPassword = 'Password and Confirm Password should be same'            
        }

        const rules = [
            {field: 'last_name', rule: val => val !== "", message: 'Please enter your last name'},
            {field: 'first_name', rule: val => val !== "", message: 'Please enter your first name'},
            {field: 'email', rule: val => val !== "", message: 'Please enter a valid email'},
            {field: 'phone', rule: val => val !== "" && isNaN, message: 'Please enter a valid phone number'},
            {field: 'password', rule: val => val.trim().length > 7 , message: 'Password must contain a least  8 characters'},
        ]
        rules.forEach(({field, rule, message})=>{
            if(!rule(userDetail[field])){
                userRegNewError[field] = message
            }
        })
        setUserRegError(userRegNewError)
        return Object.keys( userRegNewError ).length === 0
    }
    const registrationSubmit = async (e)=>{
        e.preventDefault()
        if (userRegValidation()) {
            try {
                const response = await axios.post(`${base_url2}/users`, userDetail)
                if (response.status !== 200) {
                    throw new Error("Error posting UserForm to server");
                }
                if(response.code === 304){
                    return alert('User already exists')
                }
                setUserDetail({first_name: '', last_name: '', email: '', phone: '', password: ''})
                setConfirmPassword('')
                setRegSuccess(true)
                console.log(response.data);
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    const backToLogin = ()=>{
        setRegSuccess(false)
        setIsLogin(true)
    }


    // login user
    const loginBtn = ()=>{
        setIsLogin(!isLogin)
    }
    const [userLoginDetail, setUserLoginDetail] = useState({
        email: '',
        password: '',
    })
    const handleChangeForUserLogin = (e)=>{
        setUserLoginDetail({ ...userLoginDetail, [e.target.name]: e.target.value })
    }
    const [userLoginError, setUserLoginError] = useState({
        email: '',
        password: '',
        invalidCredential: ''
    })
    const userLoginValidation = ()=>{
        const userLoginNewError = {}
        const rules = [
            {field: 'email', rule: val => val !== "", message: 'Please enter a valid email'},
            {field: 'password', rule: val => val !== "" && val.trim().length > 7,  message: 'Password must contain at least  8 characters'}
        ]
        rules.forEach(({field, rule, message})=>{
            if(!rule(userLoginDetail[field])){
                userLoginNewError[field] = message
            }
        })
        setUserLoginError(userLoginNewError)
        return Object.keys( userLoginNewError ).length === 0
    }

    const [isAuthenticated,  setIsAuthenticated] = useState(false)
    const [userName,  setUserName] = useState('')

    useEffect(()=>{
        const storedAuth =  localStorage.getItem('loggedIn')
        const  storedUser =  JSON.parse(localStorage.getItem('userDetail'))

        if (storedAuth === 'true'  && storedUser) {
            setIsAuthenticated(true)
            setUserName(storedUser.last_name + '  ' + storedUser.first_name)
        }
    },[])

    const handleLoginUserSubmit = async (e)=>{
        e.preventDefault()
        if (userLoginValidation()) {
            try {
                const response = await axios.post(`${base_url2}/users/login`,  userLoginDetail)
                if (response.status !== 200) {
                    throw new Error("Error posting login detail to server");
                }
                if (response.data.code === 404) {
                    alert(`${response.data.msg}`)
                    return userLoginError.invalidCredential = 'Invalid email or password'
                }
                setUserLoginDetail({email: '', password: ''})
                localStorage.setItem('loggedIn',  true)
                localStorage.setItem('userDetail', JSON.stringify(response.data))
                setIsAuthenticated(true)
                setUserName(response.data.last_name + ' ' + response.data.first_name)
                alert('logged in successfully')
                window.location.href = "/profilePage"
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    const handleLogOut = ()=>{
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('userDetail')
        setIsAuthenticated(false)
        setUserName('')
        window.location.href = "/"
    }

    // cart logic to localStorage
    const [cartItems, setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []
    });
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const formatPrice = (price)=>{
        return Number(price.replace(/,/g, ''))
    }
    useEffect(()=>{
        const total = cartItems.reduce((acc, item)=> {
            const price = formatPrice((item.price))
            return acc + item.quantity * price;
        }, 0)
        setTotalAmount(total)
    }, [cartItems])

    //addCart
    const addCart = (product) =>{
        const exist = cartItems.find((item) => item.id === product.id)
        if(exist){
            setCartItems(cartItems.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            ))
        }else{
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
    //incrementCart
    const incrementCart = (id) =>{
        setCartItems(cartItems.map((item)=>
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        ))
    };
    //decrementCart
    const decrementCart = (id) =>{
        setCartItems(cartItems.map((item)=>
            item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
        ))
    }
    //removeItem
    const removeItem = (id) =>{
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    // cart logic to server
    // const [cartItems, setCartItems] = useState([]);

    // const [totalAmount, setTotalAmount] = useState(0)
    // const getCartItems = async ()=>{
    //     try {
    //         const response = await axios.get(`${base_url2}/carts?user_id=${user_id}`)
    //         if (response.status !== 200) {
    //             throw new Error("Error fetching cart items from server");
    //         }
    //         setCartItems(response.data || [])
    //         console.log(response.data)

    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // console.log(cartItems)
    // const product_id = localStorage.getItem('product_id')
    // const postCartItem = async (product_id,  quantity) => {

    //     const cartDetail = {
    //         quantity: quantity,
    //         product_id: product_id,
    //         user_id: user_id,
    //     }
    //     try {
    //         const response = await axios.post(`${base_url2}/carts`, cartDetail)
    //         if (response.status !== 200) {
    //             throw new Error('Error posting cartItem to the server')
    //         }
    //         setCartItems((prevItem)=> [...prevItem, response.data])
    //         // setCartItems([...cartItems, response.data])
    //     } catch (error) {
    //         console.log(error.response ? error.response.data : error.message)
    //     }
    // }
    // useEffect(()=>{
    //     if (Array.isArray(cartItems)) {
    //         const total = cartItems.reduce((acc,  item) => acc + (item.price * item.quantity), 0);
    //     } else{
    //         setTotalAmount(0)
    //     }
    // }, [cartItems])
    // useEffect(()=>{
    //     getCartItems()
    // },[])

    const value = {
        isAuthenticated,
        handleLogOut,
        userName,
        userDetail,
        handleChangeForUserReg,
        setConfirmPassword,
        registrationSubmit,
        userRegError,
        confirmPassword,
        regSuccess,
        backToLogin,
        products,
        loading,
        allProducts,
        quantity,
        inc,
        dec,
        open,
        close,
        regPage,
        userLoginDetail,
        handleChangeForUserLogin,
        userLoginError,
        handleLoginUserSubmit,
        isLogin,
        loginBtn,
        base_url2,
        cartItems,
        totalAmount,
        addCart,
        removeItem,
        incrementCart,
        decrementCart,
        formatPrice 
    }
    return(
        <AliExpressContext.Provider value={value}>
            {children}
        </AliExpressContext.Provider>
    )
}
