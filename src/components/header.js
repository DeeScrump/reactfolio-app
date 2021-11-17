import React, { useState } from 'react';
import NavBar from './Navigation';
import FootBar from './Footer';
import Project from './Project';
import '../styles/styles.css';


export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
        return (
            <div>
                <h1>About Me</h1>
                <div className="card flex-row">
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
                </div>
                <FootBar />
            </div>
        );
    }
    if (currentPage === 'Portfolio') {
        return (
            <div>
                <h1>Portfolio</h1>
                <Project />,
                <FootBar />
            </div>
        );
    }
    if (currentPage === 'Contact') {
        return (
            <div>
                <h1>Contact Me</h1>
                <p>DID THIS SECTION POPULATE</p>
                <FootBar />
            </div>
        );
    }
    return (
        <div>
            <h1>Resume</h1>
            <p>Click here for my resume.</p>
            <FootBar />
        </div>
      );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
