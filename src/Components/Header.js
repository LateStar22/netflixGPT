import React from 'react'
import logo from "../images/logo.png"

const Header = () => {
  return (
    <div className='bg-transparent text-white flex justify-between'>
      <img src={logo} alt="logo" className='h-[70px] pt-5 pl-20' />
      <div>
        <button type='submit' className='bg-transparent w-32 mt-3 mr-3 h-[50px] border-solid border-white border-2'> English</button>
        <button type='submit' className='bg-red-600 h-[50px] w-32 mt-3 mr-4'> Sign Up</button>
      </div>
    </div>
  )
}

export default Header