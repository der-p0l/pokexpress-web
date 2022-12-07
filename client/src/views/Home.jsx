import React from 'react';
import './Home.scss';
import { Button, Form, Input, InputGroup } from 'reactstrap';

const Home = () => {

  const handleSearch = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    console.log("Search");
  };

  return (
    <div id="home" className="container">
      <div className="d-flex flex-column gap-4 box">
        <div className="title-container">
          <h1 className="display-3">Pokexpress</h1>
          <p className="lead mb-0">¡Encuentra información sobre todos los Pokémons!</p>
        </div>
        <div className="search-container">
          <Form onSubmit={handleSearch} method="GET" action="/">
            <InputGroup>
              <Input
                name="q"
                placeholder="Buscar"
              />
              <Button onClick={handleSearch}>
                Buscar
              </Button>
            </InputGroup>
          </Form>
        </div>
      </div>
    </div>
  );

};

export default Home;
