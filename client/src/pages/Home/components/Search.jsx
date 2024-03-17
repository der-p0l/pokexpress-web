import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';

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
            placeholder="Name"
            value={query}
            onChange={onQueryChange}
          />
          <Button onClick={onSearch}>
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );

};

export default Search;
