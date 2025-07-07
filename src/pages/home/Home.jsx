import Blogs from '../blogs/Blogs'
import Companylogo from './Companylogo'
import FAQs from './FAQs'
import HeroSection from './HeroSection'
import NewsLetter from './NewsLetter'
import Pricing from './Pricing'
import Services from './Services'
import TeamSection from './TeamSection'
import Testimonials from './Testimonials'
import ToolsSec from './ToolsSec'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolsSec />
      <Companylogo />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing />
      <FAQs />
      <NewsLetter />
    </>
  )
}

export default Home