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

function App() {
  
    return ( <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/MYFLIX"  element={ <Home/> }/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/> }/>
        <Route path="/Signup"  element={<Signup/>}/>
        <Route path="/Account"  element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route path="/Watch"  element={<ProtectedRoute><Watch/></ProtectedRoute>}/>
        <Route path="/TvShow"  element={<ProtectedRoute><TvShows/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;