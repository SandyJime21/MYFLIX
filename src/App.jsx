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
        <Route path = "/"  element = { <Home/> }/> 
        <Route path = "/login" element = {<Login/>}/>
        <Route path = '/forgot-password' element = {<ForgotPassword/> }/>
        <Route path = "/signup"  element = {<Signup/>}/>
        <Route path = "/account"  element = {<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route path = "/watch"  element = {<ProtectedRoute><Watch/></ProtectedRoute>}/>
        <Route path = "/tvShows"  element = {<ProtectedRoute><TvShows/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;