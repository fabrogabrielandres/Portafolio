import './App.css';
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/Navbar/NavBar';
import { Cover } from './components/cover/Cover';
import { About } from './components/about/About';

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
    </div>
  );
}

export default App;
