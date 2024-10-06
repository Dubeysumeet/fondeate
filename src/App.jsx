import './App.css'
import Footer from './frontend/FrontendComponents/Footer'
import Navbar from './frontend/FrontendComponents/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './frontend/pages/Home'
import Login from './frontend/pages/Loginpage';
import RegisterPage from './frontend/pages/Register';
import Profile from './frontend/FrontendComponents/Profile';
import Explorepage from './frontend/pages/explore';
import Raisemoney from './frontend/pages/raisemoney';
import SidebarTabs from './frontend/FrontendComponents/UserProfile/SidebarTabs';

function App() {
 
  return (
    <>
    <Router>
<Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<RegisterPage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/explore" element={<Explorepage/>} />
        <Route path="/raise" element={<Raisemoney/>} />
        <Route path="/userprofile/:tab" element={<SidebarTabs />} />
      </Routes>

      <Footer/>
    </Router>
     
    </>
  )
}

export default App
