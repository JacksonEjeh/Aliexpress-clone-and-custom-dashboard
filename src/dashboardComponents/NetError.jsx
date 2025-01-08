import React, { useContext } from 'react'
import { AliDashboardContext } from '../context/dashboardContext'
import errorImg from '../images/error.png'

const NetError = () => {
    const {isNetError} = useContext(AliDashboardContext)
  return (
    <div className={isNetError ? 'bg-custom-color h-screen fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center':'hidden'}>
      <div>
        <div className='flex items-center justify-center'>
            <img src={errorImg} alt="error" className='size-[250px] text-center' />
        </div>
        <p className='text-custom-text text-2xl '>Please check your internet connection</p>
      </div>
    </div>
  )
}

export default NetError
