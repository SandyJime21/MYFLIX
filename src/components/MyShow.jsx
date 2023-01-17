import React, {useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {BsFillPlayFill} from "react-icons/bs";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export const MyShow = ({showEp}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const showID = doc(db, 'users', `${user?.email}`);

  const styles = "p-2 m-2 relative object-contain block m-w-[100%]";

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(showID, {
        savedShows: arrayUnion({
          id: showEp.id,
          title: showEp.title,
          img: showEp.tag,
          url: showEp.url
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div>    
    <div key={showEp.id}  className='p-1 lg:w-[100%] hover:p-0'>
    <p className="text-white font-bold p-2 group lg:text-lg truncate group-hover:text-blue-300">
    {showEp.title}</p>

  <div className="px-2 group relative pacity-100 hover:opacity-1 ">
<img src={showEp.tag} alt={showEp.title}  width="100%"/>
<div className='my-2 absolute xs:left-[85%] xs:top-[85%] sm:top-[87%] sm:left-[80%] 
        md:left-[80%] md:top-[72%] lg:top-[73%] lg:left-[79%]
         xl:left-[77%] xl:top-[73%]  xxl:top-[75%] xxl:left-[82%]'>
      <a href={showEp.url}>

      <button className='absolute rounded bg-blue-500 font-bold text-white ml-1 xs:py-1 xs:px-3 
              md:py-1 md:px-2 lg:px-3 lg:py-2 xl:px-2 xl:py-1 xxl:py-2 xxl:px-3'>
<BsFillPlayFill/></button></a>
     </div>
     <p onClick={saveShow}>
     {like ? (
     <FaHeart className='absolute top-4 left-4 text-blue-600'/> 
     ) : ( <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>
    )}</p> 
    
</div>
  {styles}
</div></div>
  )
}

export default MyShow;
