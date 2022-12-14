import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Input, InputGroup } from "reactstrap";

const Search = ({handleSearch, urlQuery}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [urlQuery]);

  const onQueryChange = (evt) => {
    setQuery(evt.target.value);
  };

  const onSearch = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    handleSearch(query);
  };

  return (
    <div className="search-container">
      <Form onSubmit={onSearch} method="GET" action="/">
        <InputGroup>
          <Input
            name="q"
            placeholder="Nombre"
            value={query}
            onChange={onQueryChange}
          />
          <Button onClick={onSearch}>
            Buscar
          </Button>
        </InputGroup>
      </Form>
    </div>
  );

};

export default Search;
