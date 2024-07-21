import './App.css'
import FAQs from './frontend/FrontendComponents/FAQs'
import Footer from './frontend/FrontendComponents/Footer'
import HeroSection from './frontend/FrontendComponents/Hero'
import InvestmentKnowledgeCarousel from './frontend/FrontendComponents/InvestmentDetails'
import InvestorSection from './frontend/FrontendComponents/InvestorSection'
import Navbar from './frontend/FrontendComponents/Navbar'
import Testimonial from './frontend/FrontendComponents/Testimonial'

function App() {
 
  return (
    <>
     <Navbar/>
     <HeroSection/>
    <InvestorSection/>
    <InvestmentKnowledgeCarousel/>
    <FAQs/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
