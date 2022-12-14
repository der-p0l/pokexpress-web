import React from 'react';
import './Home.scss';
import Title from './components/Title';
import Search from './components/Search';
import List from './components/List';
import useHomeHook from './hooks/useHomeHook';
import { Spinner } from 'reactstrap';

const Home = () => {
  const {
    loading,
    listItems,
    hasMore,
    page,
    error,
    query,
    fetchItems,
    openItemDetail,
  } = useHomeHook();

  const handlePageChange = (newPage) => {
    // If wrong page change
    if (newPage <= 0 || (!hasMore && newPage > page)) {
      return;
    }

    fetchItems(query, newPage);
  };

  const handleSearch = (newQuery) => {
    newQuery = newQuery || null;
    // If the user is just spamming the button
    if (newQuery === query) {
      return;
    }

    fetchItems(newQuery);
  };

  const handleViewItem = (itemId) => {
    openItemDetail(itemId);
  };

  return (
    <div id="home" className="container">
      <div className="d-flex flex-column gap-4 box">
        <Title />
        <Search
          handleSearch={handleSearch}
          urlQuery={query}
        />
        {loading && (
          <Spinner
            className="ms-auto me-auto"
            color="dark"
          />
        )}
        {!loading && (
          <List
            items={listItems}
            hasMore={hasMore}
            page={page}
            error={error}
            handlePageChange={handlePageChange}
            handleViewItem={handleViewItem}
          />
        )}
      </div>
    </div>
  );

};

export default Home;
