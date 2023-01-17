import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Watch from "./pages/Watch";
import ForgotPassword from "./pages/ForgotPassword"
import { TvShows } from "./pages/TvShows";
import ProtectedRoute from "./components/ProtectedRoute";

function App(props) {
    return ( <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path = "/MYFLIX"  element = { <Home/> }/> 
        <Route path = "/MYFLIX/login" element = {<Login/>}/>
        <Route path = '/MYFLIX/forgot-password' element = {<ForgotPassword/> }/>
        <Route path = "/MYFLIX/signup"  element = {<Signup/>}/>
        <Route path = "/MYFLIX/account"  element = {<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route path = "/MYFLIX/watch"  element = {<ProtectedRoute><Watch/></ProtectedRoute>}/>
        <Route path = "/MYFLIX/tvShows"  element = {<ProtectedRoute><TvShows/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;