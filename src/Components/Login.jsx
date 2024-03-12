import React from 'react';
import logo from "../images/logo.png";
import Form from './Form';
import { useAction } from "../Contexts/actionContext";


const Login = () => {

  const {action, setAction} = useAction();
  const stateChanger = () => { // lifting state up.
      setAction("Sign In");
  }

  return (
    <div className='bg-cover bg-center' style={{ backgroundImage: `url(${require("../images/header-image.png")})` }}>
      <div className='bg-black bg-opacity-60'>
        <img src={logo} alt="logo" className='h-[70px] pt-5 pl-20' />
        <div className='min-h-fit w-[400px] bg-black bg-opacity-60 m-auto my-16 p-14 text-white'>
          <h1 className='text-3xl font-bold mb-6'>{action}</h1>
         
          <Form stateChanger = {stateChanger} action={action}/>
        
          <span className='block mb-4 w-full text-center'>OR</span>
          <button className='w-full h-[50px] bg-gray-500 bg-opacity-40 mb-4'>Use a sign-in code</button>
          <span className='block mb-4 w-full text-center'>Forgot Password?</span>
          <span className='block mb-4 w-full'><input type="checkbox" />   Remember Me</span>
          <span className='block mb-4 w-full'> New to Netflix? <a href="#" className='underline font-semibold' onClick={() => { action === "Sign In" ? setAction("Sign Up") : setAction("Sign In")}}>{action === "Sign Up" ? "Sign In" : "Sign Up Now"}</a></span>
          <p className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className='text-blue-700'>Learn more</a></p>
        </div>
        <div className='text-white bg-black bg-opacity-60 px-[108px]'>
          <h2>Questions? Call 000-000-000-0000</h2>
          <div className='flex flex-row'>
            <div className='basis-1/4 grow mt-6 min-h-fit'>
              <a className='block'>FAQ</a>
              <a className='block'>Investor Relations</a>
              <a className='block'>Privacy</a>
              <a className='block'>Speed Test</a>
            </div>
            <div className='basis-1/4 grow  mt-6 min-h-fit'>
              <a className='block'>Help Centre</a>
              <a className='block'>Jobs</a>
              <a className='block'>Cookie Preferences</a>
              <a className='block'>Legal Notices</a>
            </div>
            <div className='basis-1/4 grow  mt-6 min-h-fit'>
              <a className='block'>Account</a>
              <a className='block'>Ways to Watch</a>
              <a className='block'>Corporate Information</a>
              <a className='block'>Only on Netflix</a>
            </div>
            <div className='basis-1/4 grow  mt-6 min-h-fit'>
              <a className='block'>Media Centre</a>
              <a className='block'>Terms of Use</a>
              <a className='block'>Contact Us</a>
            </div>
          </div>
          <button type='submit' className='bg-transparent w-32 mt-3 mr-3 h-[50px] border-solid border-white border-2 mb-5'> English</button>
          <p className="copyright-text">Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
