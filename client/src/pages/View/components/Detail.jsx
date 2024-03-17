import React from 'react';

const Detail = ({pokemon}) => {

  const getHeight = (height) => {
    return height / 10;
  };

  const getWeight = (weight) => {
    return weight / 10;
  };

  return (
    <div className="detail">
      <div className="header">
        <img
          className="img ms-auto me-auto"
          src={pokemon.img}
          alt={pokemon.name}
        />
        <h1 className="display-3">{pokemon.name}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="lead">Height: {getHeight(pokemon.height)}m</p>
        </div>
        <div className="col-12 col-sm-6">
          <p className="lead">Weight: {getWeight(pokemon.weight)}kg</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="lead mb-0">Moves:</p>
          <ul>
            {pokemon.moves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-sm-6">
          <p className="lead mb-0">Types:</p>
          <ul>
            {pokemon.types.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default Detail;
