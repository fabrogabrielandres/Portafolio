import './App.css';
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/Navbar/NavBar';
import { Cover } from './components/cover/Cover';
import { About } from './components/about/About';
import { Slider } from './components/slider/Slider';
import { Info } from './components/info/Info';
import { Footer } from './components/footer/Footer';
import { Projectos } from './components/projectos/Projectos';

function App() {

  const [scrollHight, setScrollHight] = useState(0)

  const handleScroll = () => {
    let positionY = window.pageYOffset;
    
    setScrollHight(positionY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHight])


  return (
    <div className="App">
      <Cover />
      <NavBar isScrolling={scrollHight} />
      <About/>
      <Slider/>
      <Projectos/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
