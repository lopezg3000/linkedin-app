// import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/about';
import Featured from './components/featured/Featured';
import Experience from './components/education-experience/Experience';
import Education from './components/education-experience/Education';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="main-container" style={{ background: '#f3f2ef' }}>
      <Navbar />
      <div className='body container w-75 mx-auto'>
        <Intro />
        <About />
        <Featured />
        <Experience />
        <Education />
        <Skills />
      </div>
      <footer style={{ background: '#f3f2ef' }}>Footer</footer>
    </div>
  );
}

export default App;
