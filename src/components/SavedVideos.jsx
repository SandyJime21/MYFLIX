import React, {useState, useEffect} from 'react'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import { BsFillPlayFill} from "react-icons/bs";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import SavedShows from '../components/savedShows';

export const SavedVideos = () => {
const [videos, setVideos] = useState([{}]);
const {user} = UserAuth();


const slideLeft = () => {
    var slider = document.getElementById('slider')
     slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
          var slider = document.getElementById('slider')
           slider.scrollLeft = slider.scrollLeft + 500; 
       };

useEffect(() => {
onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
    setVideos(doc.data()?.savedVideos);
});
}, [user?.email]);

const videoRef = doc(db, "users", `${user?.email}`);

const deleteVideo = async (passedID) => {
    try{
const result = videos.filter((moviet) => moviet.id !== passedID)
await updateDoc(videoRef, {
savedVideos: result,
});
} catch (error){
        console.log(error);
    }
}

  return (
    <>
  <h2 className='text-white font-bold md:text-xl p-4'>My Movies</h2>
    <div className='relative flex items-center group'>

<BsArrowLeftShort size={40} 
    className="bg-white rounded-[100%] absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block"
    onClick={slideLeft}/>

    <div id={'slider'} 
    className='w-[100%] h-[100%] overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative'>
{videos.map((moviet, id) => (

<div key={id} className='relative w-[160px] p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w[200px]'>
 <a href={moviet?.url}>
    <button className='relative flex rounded bg-blue-500 font-bold text-white top-0 w-[100%] hover:bg-white hover:text-blue-600'>
    <h1 className='flex mx-[40%] text-xl xs:text-sm xs:mx-[35%]'>PL <BsFillPlayFill className='my-1'/>Y</h1>
   </button></a>
<img className="w-[100%] h-auto block" 
    src={moviet?.img}
     alt={moviet.title}/>     
<div className='absolute top-7 left-0 w-[100%] h-[100%] hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
<p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-[100%] text-center'>
{moviet?.title}</p>
<p onClick={()=> deleteVideo(moviet.id)} className='absolute text-blue-600 top-4 right-4'><AiOutlineClose/></p>
</div>
</div>

))}
</div>

 <BsArrowRightShort size={40} 
    className="bg-white rounded-[100%] absolute opacity-50 hover:opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block"
    onClick={slideRight}/>
</div>
<SavedShows/>
</>
);
};
export default SavedVideos;