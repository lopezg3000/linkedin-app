// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <div style={{ background: '#f3f2ef', width: "100%", height: '500px' }}></div>  */}
      <Intro />

    </React.Fragment>
  );
}

export default App;
