import React from "react";

const Detail = ({item}) => {

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
          src={item.img}
          alt={item.name}
        />
        <h1 className="display-3">{item.name}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="lead">Altura: {getHeight(item.height)}m</p>
        </div>
        <div className="col-12 col-sm-6">
          <p className="lead">Peso: {getWeight(item.weight)}kg</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="lead mb-0">Movimientos:</p>
          <ul>
            {item.moves.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-sm-6">
          <p className="lead mb-0">Tipos:</p>
          <ul>
            {item.types.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default Detail;
