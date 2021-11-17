import React from 'react';

export default function navBar({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a
                    href="#About-Me"
                    onClick={() => handlePageChange('AboutMe')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#Contact-Me"
                    onClick={() => handlePageChange('ContactMe')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
                </li>
            </ul>
        </nav>
    );
}
