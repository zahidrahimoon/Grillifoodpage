import './index.css';
import Navbar from './Components/Navbar';
import Toobar from './Components/Toobar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Specialdish from './Components/Specialdish';
import Menu from './Components/Menu';
import About from './Components/About';
import Testimonials from './Components/Testominials';
import ContactUs from './Components/ContactUs';
import Features from './Components/Features';
import Event from './Components/Event';
import Footer from './Components/Footer';
import { GiConcentrationOrb } from 'react-icons/gi';

function App() {
  return (
   <>
   <GiConcentrationOrb />
   <Toobar /> 
   <Navbar />
   <Hero /> 
   <Services />
   <About />
   <Specialdish />
   <Menu />
   <Testimonials />
   <ContactUs />
   <Features />
   <Event />
   <Footer />
   </>
  )
}

export default App
