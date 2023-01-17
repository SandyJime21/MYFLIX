import React from 'react';
import Main from '../components/Main';
import SavedMovies from '../components/SavedVideos';

export const Account = () => {
  return (
    <>
  <Main
  src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/920ce59c-55a5-40fe-acb3-a9189783886f/US-en-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
  alt="My Stuff"
  h1={"My Stuff"}
  relesedClass="hidden"
/>
     <div className='absolute top-[25%] p-4 md:p-8'>
     <div className='my-4'>
     <a href="/MYFLIX"><button className='border bg-gray-300 text-black md:py-2 md:px-5 ml-2 xs:py-1 xs:px-3 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:font-bold'>Home</button></a>
         <a href="/MYFLIX/tvShows"><button className='border text-white md:py-2 md:px-5 ml-2 xs:py-1 xs:px-3 hover:bg-blue-600 hover:text-black hover:border-blue-500 hover:font-bold'>Tv Shows
        </button></a>
        <a href="/MYFLIX/watch"><button className='border bg-gray-300 text-black md:py-2 md:px-5 ml-2 xs:py-1 xs:px-3 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:font-bold'>Movies
        </button></a>
      </div>
      </div>
  
      <SavedMovies/>

    </>
  )
}
export default Account;