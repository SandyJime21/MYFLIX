import axios from 'axios';
import {React, useEffect, useState} from 'react'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import Movie from "./Movie";

export const Row = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = useState([]);
   

    useEffect(()=> {
        axios.get(fetchURL).then((response)=>{
setMovies(response.data.results);
        })
 //below when component changes the useEffect will fire again
    }, [fetchURL])

const slideLeft = () => {
var slider = document.getElementById('slider' + rowId)
slider.scrollLeft = slider.scrollLeft - 500;
}
const slideRight = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500; 
}

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>

<BsArrowLeftShort size={40} 
className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block'
onClick={slideLeft}
/>
   
    <div id={'slider' + rowId} 
    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
{movies.map((item, id) => (
<Movie item={item} key={id}/>
))}
</div>
<BsArrowRightShort size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block'
    onClick={slideRight}
/>

</div>
    </>
  )
}
export default Row;