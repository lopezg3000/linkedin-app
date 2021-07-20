// import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/about';
import Featured from './components/featured/Featured';
import Education from './components/education-experience/education';

function App() {
  return (
    <div className="main-container" style={{ background: '#f3f2ef' }}>
      <Navbar />
      <div className='body container w-75 mx-auto'>
        <Intro />
        <About />
        <Featured />
        <Education />
      </div>
      <footer style={{ background: '#f3f2ef' }}>Footer</footer>
    </div>
  );
}

export default App;
