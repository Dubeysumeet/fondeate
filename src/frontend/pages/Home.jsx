import FAQs from "../FrontendComponents/FAQs"
import HeroSection from "../FrontendComponents/Hero"
import InvestmentKnowledgeCarousel from "../FrontendComponents/InvestmentDetails"
import InvestorSection from "../FrontendComponents/InvestorSection"
import Testimonial from "../FrontendComponents/Testimonial"

const Home = () => {
  return (
  <>
  <HeroSection/>
  <InvestorSection/>
  <InvestmentKnowledgeCarousel/>
  <FAQs/>
  <Testimonial/>
  </>
  )
}

export default Home