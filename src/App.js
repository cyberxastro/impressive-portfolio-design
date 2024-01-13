import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="App"
    style={{
      background: darkmode? 'black':'',
      color:darkmode? 'white':''
    }}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Works/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
