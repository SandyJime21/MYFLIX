import React from 'react'
import ShowRow from '../components/ShowRow';
import Main from '../components/Main';
import friendsImg from "../media/friendslogo.png"
import friendsImg2 from "../media/friendslogo2.png"
import gotImg2 from "../media/gotlogo2.jpg";
import gotImg from "../media/gotlogo.jpg";
//import requests from '../Request';

export const TvShows = () => {
const showPoster = [   
friendsImg,
friendsImg2,
gotImg,
gotImg2
];
const randomPoster = showPoster[Math.floor(Math.random() * showPoster.length)];

  return (
   <>
  <Main
  src={randomPoster} 
  alt="Watch My Shows"
  h1={"Watch Shows"}
  relesedClass="hidden"
/>
     <div className='absolute top-[25%] p-4 md:p-8'>
     <div className='my-4'>
     <a href="/">
        <button className='border bg-gray-300 text-black md:py-2 md:px-5 ml-2 xs:py-1 xs:px-3 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:font-bold'>Home</button>
        </a><a href="/watch">
        <button className='border text-white md:py-2 md:px-5 ml-2 xs:py-1 xs:px-3 hover:bg-blue-600 hover:text-black hover:border-blue-500 hover:font-bold'>Movies
        </button></a>
      </div>
      </div>

    <ShowRow rowId="1" title="Friends (Season 1)"/>
    <ShowRow rowId="2" title="Friends (Season 2)"/>
    <ShowRow rowId="3" title="Friends (Season 3)"/>
    <ShowRow rowId="4" title="Friends (Season 4)"/>
    <ShowRow rowId="5" title="Friends (Season 5)"/>
    <ShowRow rowId="6" title="Friends (Season 6)"/>
    <ShowRow rowId="7" title="Friends (Season 7)"/>
    <ShowRow rowId="8" title="Friends (Season 8)"/>
    <ShowRow rowId="9" title="Friends (Season 9)"/>
    <ShowRow rowId="10" title="Friends (Season 10)"/>
    <ShowRow rowId="11" title="Game of Thrones (Season 1)"/>
    <ShowRow rowId="12" title="Game of Thrones (Season 2)"/>
    <ShowRow rowId="13" title="Game of Thrones (Season 3)"/>
    <ShowRow rowId="14" title="Game of Thrones (Season 4)"/>
    <ShowRow rowId="15" title="Game of Thrones (Season 5)"/>
    <ShowRow rowId="16" title="Game of Thrones (Season 6)"/>
    <ShowRow rowId="17" title="Game of Thrones (Season 7)"/>
    <ShowRow rowId="18" title="Game of Thrones (Season 8)"/>
   </>      
  )
}
