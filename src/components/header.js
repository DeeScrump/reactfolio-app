import React, { useState } from 'react';
import NavBar from './Navigation';
import FootBar from './Footer';
import Project from './Project';


export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
        return (
            <div>
                <h1>About</h1>
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
                <FootBar />
            </div>
        );
    }
    if (currentPage === 'Portfolio') {
        return (
            <Project />,
            <FootBar />
        );
    }
    if (currentPage === 'Contact') {
        return (
            <div>
                <h1>Contact</h1>
                <form>
                    <input>Stuff</input>
                </form>
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
