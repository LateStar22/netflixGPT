import React from 'react'
import logo from "../images/logo.png"
import auth from "../firebaseConfig"
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { useAction } from '../Contexts/actionContext';
import { useUserContext } from "../Contexts/userContext"

const Header = () => {

  const { action,setAction } = useAction();

  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setAction("Sign In")
      navigate("/");
      alert("Signed out successfully!");
    }).catch((error) => {
      alert("Error Signing out", error);
    })
  }

  return (
    <div className='bg-transparent text-white flex justify-between'>
      <img src={logo} alt="logo" className='h-[70px] pt-5 pl-20' />
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