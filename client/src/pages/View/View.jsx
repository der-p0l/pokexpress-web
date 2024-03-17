import React from 'react';
import './View.scss';
import useViewHook from './hooks/useViewHook';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import Detail from './components/Detail';

const View = () => {
  const {
    loading,
    pokemon,
    error,
  } = useViewHook();

  return (
    <div id="view" className="container">
      <div className="d-flex flex-column box">
        {loading && (
          <Spinner
            className="ms-auto me-auto"
            color="dark"
          />
        )}
        {!loading && (
          <>
            {error && (
              <p className="text-danger mb-0"><strong>Error:</strong> {error.message}</p>
            )}
            {!error && (
              <>
                {!pokemon && (
                  <p className="mb-0">The Pokemon you were looking for was not found.</p>
                )}
                {pokemon && (
                  <Detail pokemon={pokemon} />
                )}
              </>
            )}
          </>
        )}
        <div className="mt-4">
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  );

};

export default View;
