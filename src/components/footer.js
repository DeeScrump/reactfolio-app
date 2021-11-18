import React from 'react';
import '../styles/styles.css';
import indeed from '../assets/indeed.png';
import linkedIn from '../assets/linkedIn.png';
import callMe from '../assets/callMe.jpg';
import gitHub from '../assets/github.png';
import emailMe from '../assets/emailMe.jpg';


export default function FootBar() {
    return (
        <footer className="bgImage">
            <div className='d-inline-flex nav nav-tabs'>
                <a className="nav-item link-warning" href="#352-871-4481" alt="Mobile Number"><img className="iconImage" src={callMe} alt="352-871-4481"/></a>
                <a className="nav-item link-warning" href="#email" alt="Email"><img className="iconImage" src={emailMe} alt="dwight.kornbluth@gmail.com"/></a>
                <a className="nav-item link-warning" href="https://github.com/DeeScrump" alt="Link to Github Repositories" target="_blank" rel="noreferrer"><img className="iconImage" src={gitHub} alt="Github"/></a>
                <a className="nav-item link-warning" href="https://my.indeed.com/p/dwightk-zuz0jhm" alt="Link to Indeed" target="_blank" rel="noreferrer"><img className="iconImage" src={indeed} alt="Indeed"/></a>
                <a href="https://www.linkedin.com/in/dwight-c-kornbluth-ii/" className="social-icon si-rounded si-small si-linkedin link-warning" alt="Link to LinkedIn" target="_blank" rel="noreferrer"><i className="nav-item icon-linkedin"><img className="iconImage" src={linkedIn} alt="linkedIn"/></i></a>
                {/* <a className="nav-item link-warning" href="https://www.instagram.com/flga.agent.lifehealth.realtor/" alt="Link to Instagram" target="_blank" rel="noreferrer">Instagram</a> */}
            </div>
        </footer>
    )
};