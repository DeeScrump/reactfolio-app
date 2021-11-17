import React from 'react';
import '../styles/styles.css';

export default function FootBar() {
    return (
        <footer className="container-fluid">
            <div className='nav nav-tabs'>
                <a className="nav-item" href="#352-871-4481" alt="Mobile Number">M: 352-871-4481</a>
                <a className="nav-item" href="#email" alt="Email">dwight.kornbluth@gmail.com</a>
                <a className="nav-item" href="https://github.com/DeeScrump" alt="Link to Github Repositories" target="_blank" rel="noreferrer">Github</a>
                <a className="nav-item" href="https://my.indeed.com/p/dwightk-zuz0jhm" alt="Link to Indeed" target="_blank" rel="noreferrer">Indeed</a>
                <a href="https://www.linkedin.com/in/dwight-c-kornbluth-ii/" className="social-icon si-rounded si-small si-linkedin" alt="Link to LinkedIn" target="_blank" rel="noreferrer"><i className="nav-item icon-linkedin">LinkedIn</i></a>
                <a className="nav-item" href="https://www.instagram.com/flga.agent.lifehealth.realtor/" alt="Link to Instagram" target="_blank" rel="noreferrer">Instagram</a>
            </div>
        </footer>
    )
};