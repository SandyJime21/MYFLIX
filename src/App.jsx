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
      <Navbar/>
      <Routes>
        <Route exact path="/MYFLIX"  element={ <Home/> }/> 
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path='/ForgotPassword' element={<ForgotPassword/> }/>
        <Route exact path="/Signup"  element={<Signup/>}/>
        <Route exact path="/Account"  element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route exact path="/Watch"  element={<ProtectedRoute><Watch/></ProtectedRoute>}/>
        <Route exact path="/TvShow"  element={<ProtectedRoute><TvShows/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;