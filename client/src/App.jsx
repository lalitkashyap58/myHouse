
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from "./pages/CreateListing";
import UpdateListing from './pages/UpdateListing';
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />  <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>} />
        </Route>
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />  
    </Routes>
    </BrowserRouter>
  )
}
  


export default App
