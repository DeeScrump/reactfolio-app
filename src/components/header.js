import React, { useState } from 'react';
import NavBar from './Navigation';
import FootBar from './Footer';
import Project from './Project';
import '../styles/styles.css';
import { validateEmail } from '../utils/helpers';


export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [textArea, setTextArea] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setTextArea(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or Name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setTextArea('');
    setEmail('');
  };

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
                <form className="form">
                    <input
                    value={name}
                    name="Name:"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="username"
                    />
                    <br></br>
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    />
                    <br></br>
                    <textarea
                    value={textArea}
                    name="text"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                    />
                    <br></br>
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <FootBar />
            </div>
        );
    }
    return (
        <div>
            <h1>Resume</h1>
            <p>Input my Resume Here</p>
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
