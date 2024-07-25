import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experiences from './pages/Experiences/Experiences';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { useState, useEffect } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
