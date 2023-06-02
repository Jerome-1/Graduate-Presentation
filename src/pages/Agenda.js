import '../styles/Agenda.css'
import Navbar from '../components/Navbar'
import Header  from '../components/Header';
import React from 'react';

function Agenda() {
    var header = "Wrting the future";
    return(
        <div>
            {Header(header)}
            <div className='new-container'>
                <h1>Todays Agenda</h1>
                <div className='boxes'>
                    <div className='box'>
                        <p className='icon icon-1'/>
                        <h2>Overview</h2>
                        <p class="piece-count">~ ~ ~ ~</p>
			            In this section, I will be explaining the structure of Tech & Data, showing a brief insight into the teams that belong there, and then the structure of the engineering deparment and where I fit.
                    </div>
                    <div className='box'>
                        <p className='icon icon-2'/>
                        <h2>MDP</h2>
                        <p class="piece-count">~ ~ ~ ~</p>
			            In this section, I will be going over the purpose of the Modern Data Platform(MDP) and explain what the goal of the project is.
                    </div>
                    <div className='box'>
                        <p className='icon icon-3'/>
                        <h2>Role</h2>
                        <p class="piece-count">~ ~ ~ ~</p>
			            Finally I will explain what my role as a software developer actually is in the context of an insurance company. I will go over what I do in a day to day basis.
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='nav-bar'>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Agenda;