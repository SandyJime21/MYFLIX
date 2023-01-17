import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {BsFillPlayFill} from "react-icons/bs";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const MyMovie = ({moviet}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, 'users', `${user?.email}`);
 
  const saveVideo = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedVideos: arrayUnion({
          id: moviet.id,
          title: moviet.title,
          img: moviet.tag,
          url: moviet.url
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const styles = "p-2 m-2 relative object-contain block m-w-[100%]";
  const truncateString = (str, num) => {
      if(str?.length > num){
          return str.slice(0, num) + '...';
      }else {
          return str;
      }  }
      
  return (
    <>    
       <div key={moviet.id} className='p-1 xs:w-[50%] s:w-[35%] sm:w-[25%] md:p-1 md:w-[15%] xl:w-[12%] hover:p-0'>
        <p className="text-white font-bold p-2 group lg:text-lg break-all truncate group-hover:text-blue-300">
        {moviet?.title}</p>
        <div className="p-2 group relative ">
         
        <img src={moviet.tag} alt={moviet.title} width="100%"/>
        <div className='my-2 absolute xs:left-[70%] xs:top-[87%] md:left-[89%] md:top-[89%] lg:top-[90%] lg:left-[71%]
         xl:left-[85%] xl:top-[87%] xxl:top-[89%] xxl:left-[78%]'>
          <a href={moviet.url}>
          <button className='absolute rounded bg-blue-500 font-bold text-white ml-1 xs:py-1 xs:px-3 
          md:py-1 md:px-2 lg:px-3 lg:py-2 xl:px-2 xl:py-1 xxl:py-2 xxl:px-3'>
          <BsFillPlayFill/></button></a>
        </div>
         <p onClick={saveVideo}>
         {like ? (
          <FaHeart className='absolute top-4 left-4 text-blue-600'/> ) 
          : ( <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>
            )}</p>   
        </div>
         {styles}
    <div className="opacity-0 m-2 hover:opacity-100 
           text-sm p-2 text-center break-word whitespace-normal relative left-[-2%] xs:top-12">
    <div className="text-white m-1 text-center whitespace-normal lg:top-[-2200%] 
        xl:top-[-2000%] xl:text-lg xxl:text-sm xxl:top-[-2000%]
         absolute hover:bg-black/80">{truncateString(moviet?.overview, 180)}</div>
    </div>  
  </div> 
</>
  )
}

export default MyMovie;