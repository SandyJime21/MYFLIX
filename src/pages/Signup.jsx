import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/920ce59c-55a5-40fe-acb3-a9189783886f/US-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="MYFLIX.COM"/>

    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='relative w-fill px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] ml-70 bg-black/75 text-white mx-auto'>
        <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              
              <form onSubmit={handleSubmit} 
              className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                minLength={6}
              />
              <button className='bg-blue-600 py-3 my-6 rounded font-bold'>
              Sign Up</button>
                
            <div className='flex justify-between items-center text-sm text-gray-500'>
            <a href='/MYFLIX/ForgotPassword'><p>Forgot Password</p></a>
            <a href = "mailto: sandyjtech@gmail.com"><p>Need Help?</p></a> 
            </div>
                <p className='py-8'>
                  <span className='text-gray-500'>
                  Already subscribed to Myflix?</span>{} <a href='/MYFLIX/login'> Sign In</a>
                </p>
              </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Signup;