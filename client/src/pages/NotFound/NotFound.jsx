import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

  const getCurrentUrl = () => {
    return window.location.href;
  };

  return (
    <div id="not-found" className="container">
      <div className="box">
        <h1 className="mb-4">404</h1>
        <p className="mb-1">You used "Confusion" at {getCurrentUrl()}... It's super effective!</p>
        <p className="mb-0">The page you were looking for was not found.</p>
        <div className="mt-4">
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  );

};

export default NotFound;
