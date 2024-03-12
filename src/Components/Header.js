import React from 'react'
import logo from "../images/logo.png"
import auth from "../firebaseConfig"
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useAction } from '../Contexts/actionContext';

const Header = () => {

  const { action,setAction } = useAction();

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setAction("Sign In")
      navigate("/login");
      alert("Signed out successfully!");
    }).catch((error) => {
      alert("Error Signing out", error);
    })
  }

  return (
    <div className='text-white flex justify-between bg-gradient-to-b from-black'>
      <img src={logo} alt="logo" className='h-[50px] pt-5 pl-10' />
        <ul className='flex pt-5 relative right-[200px]'>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>Home</li>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>TV Shows</li>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>Movies</li>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>New & Popular</li>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>My List</li>
          <li className='mx-4 cursor-pointer  hover:font-bold transition-all '>Browse by Languages</li>
        </ul>
      <div>
        <button type='submit' className='bg-transparent w-32 mt-3 mr-3 h-[50px] border-solid border-white border-2'> English</button>
        {
          action === "Sign Up" && <button type='submit' className='bg-red-600 h-[50px] w-32 mt-3 mr-4' onClick={() => handleSignOut()}>Sign Out</button>
        }
      </div>
    </div>
  )
}

export default Header