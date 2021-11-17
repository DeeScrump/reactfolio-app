import React, { useState } from 'react';
import navBar from './Navigation';
import footBar from './Footer';
import Project from './Project';


export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
        return (
            <div>
                {navBar}
                <h1>About Me</h1>
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
                {footBar}
            </div>
        );
    }
    if (currentPage === 'Portfolio') {
        return (
            <div>
                {navBar}
                <Project />
                {footBar}
            </div>
        );
    }
    if (currentPage === 'ContactMe') {
        return (
            <div>
                {navBar}
                <h1>About Me</h1>
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
                {footBar}
            </div>
        );
    }
    return (
        <div>
            {navBar}
            <h1>About Me</h1>
            <p>Welcome to my React based Portfolio page.</p>
            <br></br>
            <p>I am an Electrical Engineer</p>
            {footBar}
        </div>
      );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <navBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
