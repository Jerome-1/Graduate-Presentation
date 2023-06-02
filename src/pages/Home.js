import '../App.css';
import Navbar from '../components/Navbar.js'
import React from 'react';


function Home() {
    return(
      <div className='landing-page'>
        <div className='content-box'>
          <div className='content'>
            <h1 className='Header'>My Graduate Journey in Tech & Data</h1> 
          </div>
        </div>
        <div className='Nav'>
        <Navbar/>
        </div>
        <img src="images/transparent-logo.png" alt="logo" className="logo"/>
      </div>
    );
};

export default Home;