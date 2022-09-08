import { useContext } from "react";

import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import ThemeContext from "./store/ThemeContext";



function App() {
  const themeState = useContext(ThemeContext)

  return (
    <div className="App" 
      style={{backgroundColor : !themeState.theme ? 'black' : '' , color : !themeState.theme ? 'white' : ''}}
    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;
