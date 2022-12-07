import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {

  const getCurrentUrl = () => {
    return window.location.href;
  };

  return (
    <div id="not-found">
      <div className="box">
        <h1 className="mb-4">404</h1>
        <p className="mb-1">Usaste "Confusión" en {getCurrentUrl()}... ¡es muy efectivo!</p>
        <p className="mb-0">No pudimos encontrar la página que estabas buscando.</p>
        <div className="mt-4">
          <Link to="/">Volver</Link>
        </div>
      </div>
    </div>
  );

};

export default NotFound;
