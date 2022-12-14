import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardTitle } from "reactstrap";

const List = ({
  items,
  hasMore,
  page,
  error,
  handlePageChange,
  handleViewItem,
}) => {

  const onPrev = () => {
    handlePageChange(page-1);
  };

  const onNext = () => {
    handlePageChange(page+1);
  };

  const onViewMore = (itemId) => {
    return () => {
      handleViewItem(itemId);
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
            {items.length > 0 && items.map((item) => (
              <Card
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={item.id}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {item.name}
                  </CardTitle>
                  <Button onClick={onViewMore(item.id)}>
                    Ver más
                  </Button>
                </CardBody>
              </Card>
            ))}
            {items.length <= 0 && (
              <p className="mb-0">No hay Pokémons para mostrar.</p>
            )}
          </div>
          {(page > 1 || hasMore) && (
            <div className="pagination">
              <ButtonGroup>
                {page > 1 && (
                  <Button onClick={onPrev}>
                    Anterior
                  </Button>
                )}
                {hasMore && (
                  <Button onClick={onNext}>
                    Siguiente
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
