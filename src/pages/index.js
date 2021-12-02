import React, {useState} from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection'
import Footer from '../components/layout/Footer';
import Services from '../components/layout/ServicesSection';
// import Toggle from '../components/layout/Theme/Toggle';
// import { useDarkMode } from '../components/layout/Theme/useDarkMode';
// import { GlobalStyles, lightTheme, darkTheme } from '../components/layout/Theme/GlobalStyles';
// import styled, { ThemeProvider } from 'styled-components';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [ theme, toggleTheme ] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
      // <ThemeProvider theme={themeMode}>
      // <GlobalStyles />
      // <Toggle theme={theme} toggleTheme={toggleTheme} />
      <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <Services />
    <Footer />
    </>
  // </ThemeProvider>

  );
};

export default Home;