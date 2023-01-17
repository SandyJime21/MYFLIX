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
        <Route exact path="/MYFLIX"><Home/></Route>
        <Route path="/Login"><Login/></Route>
        <Route path='/ForgotPassword'><ForgotPassword/></Route>
        <Route path="/Signup"><Signup/></Route>
        <Route path="/Account" ><ProtectedRoute><Account/></ProtectedRoute></Route>
        <Route path="/Watch"><ProtectedRoute><Watch/></ProtectedRoute></Route>
        <Route path="/TvShow"><ProtectedRoute><TvShows/></ProtectedRoute></Route>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;