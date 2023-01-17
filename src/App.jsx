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
        <Route  path="/MYFLIX" exact component={Home} element={ <Home/> }/> 
        <Route  path="/Login" exact component={Login}/>
        <Route  path='/ForgotPassword'exact component={ForgotPassword} element={<ForgotPassword/>}/>
        <Route  path="/Signup" exact component={Signup} element={<Signup/>}/>
        <Route  path="/Account" exact component={Account} element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route  path="/Watch" exact component={Watch} element={<ProtectedRoute><Watch/></ProtectedRoute>}/>
        <Route  path="/TvShow" exact component={TvShows} element={<ProtectedRoute><TvShows/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>  
    </>);
    }

    export default App;