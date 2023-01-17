import React from 'react'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import MyShow from './MyShow';
import MyShowDB from '../MyShowDB';

export const ShowRow = ({title, rowId, showEp}) => {
    const filteredShows = MyShowDB.filter(showEp => {
                     return showEp.category === title
                 })  

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500;
        }
    const slideRight = () => {
            var slider = document.getElementById('slider' + rowId)
            slider.scrollLeft = slider.scrollLeft + 500; 
        }

return (
<div className="group">
<h2 className="text-white font-bold md:text-2xl p-4 opacity-1 group-hover:text-3xl group-hover:opacity-95 group-hover:text-blue-600">{title}</h2>
<div className="relative flex items-center group" >

<BsArrowLeftShort size={40} 
className="bg-white rounded-full absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block"
onClick={slideLeft}/>

<div id={"slider" + rowId} 
className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative flex group">
{filteredShows.map((showEp, id) => (
    <MyShow  key={id} showEp={showEp}/>

))}

</div>
<BsArrowRightShort size={40} 
className="bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block"
onClick={slideRight}/>
</div>

 </div>

  )
}
export default ShowRow;
