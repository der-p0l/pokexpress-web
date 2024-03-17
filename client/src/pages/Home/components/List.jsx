import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardTitle } from 'reactstrap';

const List = ({
  pokemons,
  hasMore,
  page,
  error,
  handlePageChange,
  handleViewPokemon,
}) => {

  const onPrev = () => {
    handlePageChange(page-1);
  };

  const onNext = () => {
    handlePageChange(page+1);
  };

  const onViewMore = (pokemonId) => {
    return () => {
      handleViewPokemon(pokemonId);
    };
  };

  return (
    <div className="list-container">
      {error && (
        <p className="text-danger mb-0"><strong>Error:</strong> {error.message}</p>
      )}
      {!error && (
        <>
          <div className="items">
            {pokemons.length > 0 && pokemons.map((pokemon) => (
              <Card
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={pokemon.id}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {pokemon.name}
                  </CardTitle>
                  <Button onClick={onViewMore(pokemon.id)}>
                    View more
                  </Button>
                </CardBody>
              </Card>
            ))}
            {pokemons.length <= 0 && (
              <p className="mb-0">No Pokemons to show.</p>
            )}
          </div>
          {(page > 1 || hasMore) && (
            <div className="pagination">
              <ButtonGroup>
                {page > 1 && (
                  <Button onClick={onPrev}>
                    Previous
                  </Button>
                )}
                {hasMore && (
                  <Button onClick={onNext}>
                    Next
                  </Button>
                )}
              </ButtonGroup>
            </div>
          )}
        </>
      )}
    </div>
  );

};

export default List;
