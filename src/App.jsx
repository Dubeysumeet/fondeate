import './App.css'
import Footer from './frontend/FrontendComponents/Footer'
import Navbar from './frontend/FrontendComponents/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './frontend/pages/Home'
import Login from './frontend/pages/Loginpage';
import RegisterPage from './frontend/pages/Register';

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
      </Routes>

      <Footer/>
    </Router>
     
    </>
  )
}

export default App
