import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = (props) => {
//creating hamburger menu
    const [isOpen, setisOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-blue-500 transition ease transform duration-300`;
    
    const {user, logOut} = UserAuth()
    const navigate = useNavigate(); 
    const handleLogOut= async () => {
        try{
        await logOut();
        navigate("/MYFLIX");
        }catch(error) {
            console.log(error)
        }
     };
//will hide hamburger incase user is noth auth
let hideBurger = (user) ? 'visible' : 'hidden';

return (
<>
<div className={hideBurger}>
<button className="flex flex-col h-12 w-12 border-2 border-blue-500 rounded justify-center items-center md:hidden group"
      onClick={() => setisOpen(!isOpen)}>
      
      <div className={`${genericHamburgerLine} ${isOpen 
      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
      : "opacity-50 group-hover:opacity-100"}`}/>
      
      <div className={`${genericHamburgerLine} ${isOpen 
            ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}/>

      <div className={`${genericHamburgerLine} ${isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"}`}/>
</button>
</div>

    <div className="items-center justify-between p-4 z-[100] w-[100%] absolute sm:inline-block sm:grid-cols-2">
        <a href="/MYFLIX">
            <h1 className="text-blue-600 text-4xl font-bold cursor-pointer sm:text-5xl">MYFLIX</h1>
        </a> 

        {user?.email ?  (
       <div className={`md:flex ${  isOpen ? "block" : "hidden" }`}> 
       <div className="xs:fixed xs:top-0 xs:w-100 xs:inline xs:right-0">
          <a href="/Watch">
            <button className="xs:bg-white xs:font-bold border text-blue-400 p-2 m-2 rounded cursor-pointer animate-bounce xs:p-1">Watch Now</button>
        </a>
        <a href="/Account">
            <button className="border text-white px-6 py-2 m-2 rounded cursor-pointer xs:bg-white xs:font-bold xs:text-black xs:p-1">My Account</button>
        </a>
                   <button onClick={handleLogOut} 
            className="text-white bg-blue-500 px-6 py-2 m-2 rounded cursor-pointer xs:p-1">Log Out</button>
        </div> 
        </div>
            ) : (  
                <div className="absolute right-1 top-3">
        <a href="/Login">
            <button className="text-white px-6 py-4 rounded cursor-pointer left">Sign In</button>
        </a>
        <a href="/Signup">
            <button className="text-white bg-blue-500 px-6 py-4 rounded cursor-pointer">Sign Up</button>
        </a>
            </div>)}
          
        </div>
        </>
    )
}
export default Navbar;