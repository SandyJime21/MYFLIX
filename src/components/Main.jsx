import React from 'react';

const Main = (props) => {
//get a different movie on refresh

//avoid making loop of API calls
const truncateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + '...';
    }else {
        return str;
    }
}
  return (
  
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full '>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
    <img className='w-full h-full object-cover' 
    src={props.src} 
    alt={props.title}/>
    
     <div className='absolute w-full top-[20%] p-4 md:p-6'>   
     <h1 className='text-3xl md:text-5xl font-bold'>{props.h1}</h1>
     <div className='my-4'> </div>
       <p className={props.relesedClass}>Relesed: {props.relesed}</p>
       <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-400 text-sm xs:font-bold xs:p-2'>
       {truncateString(props.overview, 150)}</p>
       </div>
       </div>
    </div>
  )
}
export default Main;