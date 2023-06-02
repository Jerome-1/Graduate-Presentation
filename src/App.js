import './App.css';
import Home from './pages/Home.js';
import Agenda from './pages/Agenda.js';
import Overview from './pages/Overview.js';
import MDP from './pages/MDP.js'
import Role from './pages/Role.js'
import React from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agenda' element={<Agenda/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/project' element={<MDP/>} />
        <Route path='/role' element={<Role/>} />
      </Routes>
    </>
  )
};

export default App;
