import React from 'react'
export const Movie = ({item}) => {

    const truncateString = (str, num) => {
      if(str?.length > num){
          return str.slice(0, num) + '...';
      }else {
          return str;
      }
  }
  return (
<>    
    <div className='relative w-[160px] p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w[200px]'>
    <img className="w-full h-auto block" 
    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
     alt={item?.title}/>

<div className='absolute top-[-30%] left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
<div className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center overflow-clip'>{item?.title}

<p className='absolute z-10 top-[53%] text-center text-white font-thin'>Relesed: {item?.release_date}</p>
<p className='absolute top-[65%] bottom-[-20%] left-2 right-2 text-center text-gray-200 font-thin overflow-hidden whitespace-normal'>{truncateString(item?.overview, 150)}</p>
</div>
</div>
</div>
</>
  )
}
export default Movie;