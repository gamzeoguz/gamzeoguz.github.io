import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import TechStack from './components/TechStack'
import Experiences from './components/Experiences';
import Education from './components/Education'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleSwitch from './components/Toggle'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
    console.log("clicked")
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <BrowserRouter>
        <NavBar />
        {/** 
        <ToggleSwitch onClick={toggleTheme} theme={theme} />
        <label> {theme === "light" ? "Day mode" : "Night mode"} </label>  
        */}
        <Intro />
        <About />
        <TechStack />
        <Experiences />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
      </div>
      </ThemeContext.Provider>
  );
}

export default App;
