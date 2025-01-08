import React, { useContext } from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AliExpressContext } from '../context/appContext';
import success from '../images/successful.png'

const RegLogin = () => {
    const { userLoginDetail, isLogin, handleChangeForUserLogin, loginBtn, userLoginError, handleLoginUserSubmit, regPage, userDetail, regSuccess, backToLogin, handleChangeForUserReg, userRegError, confirmPassword, setConfirmPassword, registrationSubmit,} = useContext(AliExpressContext)

  return (
    <div className={regPage ? 'block' : 'hidden'}>
        <div className='pt-[100px]'>
            <div className={regSuccess ? 'bg-white w-[45%] mx-auto rounded-3xl flex items-center py-5 relative p-5':'hidden'}>
                <div>
                    <img className='h-[250px]' src={success} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-center'>Registration successful!! 🎉</h1>
                    <button onClick={backToLogin} className='bg-red-600 px-5 py-2 transition-colors duration-500 rounded-lg mt-5 text-white font-bold hover:bg-red-700 w-full'>Login</button>
                </div>
            </div>
            <div className={regSuccess ? 'hidden':'bg-white w-[75%] mx-auto rounded-3xl py-5 relative'}>
                <p className='text-center font-bold text-xl mb-2'>Register/Sign in</p>
                <div className='bg-green-50 py-1 text-center text-xs flex items-center gap-1 justify-center'>
                    <BsShieldFillCheck className='text-green-600 text-sm' />
                   <p>Your information is protected</p>
                </div>
                <div className='px-16 pt-10 pb-5'>
                   <form onSubmit={registrationSubmit} className={isLogin ? 'hidden':'mb-5 block'}>
                        <div className='grid grid-cols-2 gap-5 mb-3'>
                            <div className='relative'>
                                <input className={userRegError.last_name ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'}
                                    placeholder='Last Name' 
                                    type="text" 
                                    name='last_name'
                                    value={userDetail.last_name}
                                    onChange={handleChangeForUserReg}
                                />
                                {userRegError.last_name && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.last_name}</p>}
                            </div>
                            <div className='relative'>
                                <input className={userRegError.first_name ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'} 
                                    placeholder='First Name' 
                                    type="text" 
                                    name='first_name'
                                    value={userDetail.first_name}
                                    onChange={handleChangeForUserReg}    
                                />
                                {userRegError.first_name && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.first_name}</p>}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mb-3'>
                            <div className='relative'>
                                <input className={userRegError.email ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'} 
                                    placeholder='Email' 
                                    type="text" 
                                    name='email'
                                    value={userDetail.email}
                                    onChange={handleChangeForUserReg} 
                                />
                                {userRegError.email && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.email}</p>}
                            </div>
                            <div className='relative'>
                                <input className={userRegError.phone ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'} 
                                    placeholder='Phone' 
                                    type="text" 
                                    name='phone'
                                    value={userDetail.phone}
                                    onChange={handleChangeForUserReg} 
                                />
                                {userRegError.phone && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.phone}</p>}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div className='relative'>
                                <input className={userRegError.password ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'} 
                                    placeholder='Password' 
                                    type="password" 
                                    name='password'
                                    value={userDetail.password}
                                    onChange={handleChangeForUserReg} 
                                />
                                {userRegError.password && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.password}</p>}
                            </div>
                            <div className='relative'>
                                <input className={userRegError.confirmPassword ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'} 
                                    placeholder='Confirm Password' 
                                    type="text" 
                                    name='password'
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)} 
                                />
                                {userRegError.confirmPassword && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userRegError.confirmPassword}</p>}

                            </div>
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 text-xl py-3 font-semibold rounded-full w-full text-white mb-6'>Register</button>
                        <p className='text-sm cursor-pointer text-center text-gray-400'>Already have an account? <span onClick={loginBtn} className='text-red-600 hover:text-red-800'>Login</span></p>
                   </form>
                   <form onSubmit={handleLoginUserSubmit} className={isLogin ? 'block mb-5':'hidden'}>
                        <div className='mb-3'>
                            {userLoginError.invalidCredential &&  <p className='text-red-500 text-sm'>{userLoginError.invalidCredential}</p>}
                        </div>
                        <div className='relative mb-3'>
                            <input className={userLoginError.email ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'}
                                placeholder='Email' 
                                type="text" 
                                name='email'
                                value={userLoginDetail.last_name}
                                onChange={handleChangeForUserLogin}
                            />
                            {userLoginError.email && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userLoginError.email}</p>}
                        </div>
                        <div className='relative mb-5'>
                            <input className={userLoginError.password ? 'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 focus:border-none py-3 rounded-lg px-3 border-red-600':'border mb-3 w-full outline-none focus:ring-1 focus:ring-blue-600 py-3 rounded-lg px-3'}
                                placeholder='Password' 
                                type="password" 
                                name='password'
                                value={userLoginDetail.password}
                                onChange={handleChangeForUserLogin}
                            />
                            {userLoginError.password && <p className='text-red-500 text-xs bottom-[-3px] absolute'>{userLoginError.password}</p>}
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 text-xl py-3 font-semibold rounded-full w-full text-white mb-6'>Login</button>
                        <p className='text-sm cursor-pointer text-center text-gray-400'>Don't have an account? <span onClick={loginBtn} className='text-red-600 hover:text-red-800'>register</span></p>
                   </form>
                    <div className='flex items-center mb-10'>
                        <div className='h-[1px] w-[42%] bg-gray-400'></div>
                        <div className='px-5 text-gray-500'>Or continue with</div>
                        <div className='h-[1px] w-[42%] bg-gray-400'></div>
                    </div>
                    <div className='flex items-center justify-between w-[70%] mx-auto mb-10'>
                        <FaFacebook className='text-5xl' />
                        <img className='h-12' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />
                        <img className='h-12' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" />
                        <img className='h-12' src="https://cdn-icons-png.flaticon.com/128/0/747.png" alt="" />
                    </div>
                    <div className='flex items-center gap-2 justify-center mb-3'>
                        <p className='text-xs'>Location:</p>
                        <p className='text-sm font-semibold'>Nigeria</p>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500'>By continuing, you confirm that you‘re an adult and you’ve read and accepted our <span className='underline'>AliExpress Free Membership Agreement</span> and <span className='underline'>Privacy Policy.</span>
                            <span className='underline'> Why choose a location?</span>
                       </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegLogin
