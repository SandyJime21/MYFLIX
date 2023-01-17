import React, {useState} from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const auth = getAuth();

    const handleSubmit = async (e) => {

    sendPasswordResetEmail(auth, email)
  .then((e) => {
      alert("Reset email has been sent");
  })
  .catch((error) => {
console.log(error);
  });

}

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
              <h1 className='text-3xl font-bold'>Forgot your password</h1>
             
               <form onSubmit={handleSubmit}
              className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type='email'
                placeholder='Your User Email'
                autoComplete='email'
              />
            
            <button className='bg-blue-600 py-3 my-6 rounded font-bold'>
             Send Email</button>
                
            <div className=' justify-between items-center text-sm text-gray-500 p-2'>
            <a href = "mailto: sandyjtech@gmail.com">
            <p className='text-blue-600 text-center p-2'>Need Help?</p></a> 
            <p className={!email ? "visible" : "hidden"}>Success! We have sent and email to your registered email address,
             if you do not receive email in 10s, please resend or
            please verify email address is correct. 
            If issue persists please click on need help to contact MYFLIX team directly.</p>

            </div>
            </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default ForgotPassword
