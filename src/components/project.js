import React from 'react';
import '../styles/styles.css';
import hmmrd from '../assets/hmmrd.png';
import dailyScheduler from '../assets/appscreensaver2.png';
import weatherDashboard from "../assets/weatheringhp.png";
import profNoteTaker from '../assets/notetaker.png';
import serversidestation from '../assets/serversidestation.png';
import blogginTech from '../assets/blogginbouttech.gif';

export default function Project() {
    return (
    <div className="card rounded-0 border-0 flex-row work pb-4 headmain">
        <div className="row">
            <div className="row">            
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead" id="first_proj"></header>
                    <a className="border-0 m-0 p-0" href="https://hammereddb.herokuapp.com/" alt="Server Side Station" target="_blank" rel="noreferrer">
                    <img className="card-img" src={hmmrd} alt="S3 Landing Page"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/blackman3178/HMMRD.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead" id="first_proj"></header>
                    <a className="border-0 m-0 p-0" href="https://joshtlil.github.io/project-one/" alt="Server Side Station" target="_blank" rel="noreferrer">
                    <img className="card-img" src={serversidestation} alt="S3 Landing Page"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/joshTlil/project-one.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
            </div>

            <div className="row">
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead"></header>
                    <a className="border-0 m-0 p-0" href="https://deescrump.github.io/DeeCalendar/" alt="Daily Scheduler" target="_blank" rel="noreferrer">
                    <img className="card-img" src={dailyScheduler} alt="TNBA"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/DeeScrump/DeeCalendar.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead"></header>
                    <a className="border-0 m-0 p-0" href="https://deescrump.github.io/WeatheringTheStorm/" alt="Weather Dashboard" target="_blank" rel="noreferrer">
                    <img className="card-img" src={weatherDashboard} alt="Encryption Realness Screenshot"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/DeeScrump/WeatheringTheStorm.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
            </div>

            <div className="row">
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead"></header>
                    <a className="border-0 m-0 p-0" href="https://notmynotetaker.herokuapp.com/" alt="Note Taker w/ Express" target="_blank" rel="noreferrer">
                    <img className="card-img" src={profNoteTaker} alt="Not My Note Taker"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/DeeScrump/NotMyNoteTaker.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
                <div className="card p-0 border-0 col-lg m-4 shadowBox">
                    <header className="cardhead" id="first_proj"></header>
                    <a className="border-0 m-0 p-0" href="https://blogginbouttech.herokuapp.com/" alt="BlogginBoutTech" target="_blank" rel="noreferrer">
                    <img className="card-img" src={blogginTech} alt="BlogginBoutTech"/></a>
                    <header className="cardhead2"><a className="border-0 m-0 p-0 link-warning" href="https://github.com/DeeScrump/BlogginBoutTech.git" alt="Repository" target="_blank" rel="noreferrer">Github Repository</a></header>
                </div>
            </div>

        </div>
    </div>
    );   
}