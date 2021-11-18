import React from 'react';
import '../styles/styles.css';

export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className="nav nav-tabs d-flex justify-content-around fw-bolder fs-3">
                <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'About' ? 'nav-link active link-light' : 'nav-link link-light'}
                >
                    About Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Portfolio' ? 'nav-link active link-light' : 'nav-link link-light'}
                >
                    Portfolio
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active link-light' : 'nav-link link-light'}
                >
                    Contact Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active link-light' : 'nav-link link-light'}
                >
                    Resume
                </a>
                </li>
            </ul>
        </nav>
    );
}
