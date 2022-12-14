import React from 'react';
import './View.scss';
import useViewHook from './hooks/useViewHook';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import Detail from './components/Detail';

const View = () => {
  const {
    loading,
    item,
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
                {!item && (
                  <p className="mb-0">No se encontró el Pokémon que buscaba.</p>
                )}
                {item && (
                  <Detail item={item} />
                )}
              </>
            )}
          </>
        )}
        <div className="mt-4">
          <Link to="/">Volver</Link>
        </div>
      </div>
    </div>
  );

};

export default View;
