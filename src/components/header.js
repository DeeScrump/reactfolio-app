import React, { useState } from 'react';
import navbar from './Navigation';
import footBar from './Footer';
import Project from './Project';


export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
        return (
            <div>
                <h1>About Me</h1>
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
            </div>
            {footBar}
        );
    }
    if (currentPage === 'Portfolio') {
        return <Project />;
    }
    if (currentPage === 'ContactMe') {
        return (
            <div>
                <h1>About Me</h1>
                <p>Welcome to my React based Portfolio page.</p>
                <br></br>
                <p>I am an Electrical Engineer</p>
            </div>
            {footBar}
          );
    }
    return (
        <div>
            <h1>About Me</h1>
            <p>Welcome to my React based Portfolio page.</p>
            <br></br>
            <p>I am an Electrical Engineer</p>
        </div>
        {footBar}
      );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
