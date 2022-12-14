import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setError, setList, setLoading } from "../store/homeSlice";

const useHomeHook = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Store variables
  const loading = useSelector((state) => state.home.loading);
  const listItems = useSelector((state) => state.home.listItems);
  const hasMore = useSelector((state) => state.home.hasMore);
  const page = useSelector((state) => state.home.page);
  const error = useSelector((state) => state.home.error);

  const [init, setInit] = useState(false);
  const [query, setQuery] = useState(null);

  const updateQuery = (query) => {
    // Keep state query and URL query in sync
    setQuery(query);

    if (query) {
      setSearchParams({q: query});
    } else {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };

  const fetchItems = (newQuery = null, newPage = 1) => {
    // Start loading screen
    dispatch(setLoading(true));
    dispatch(setError(null));

    // If the query changed (this is useful to prevent navigation in the
    // first render)
    if (newQuery !== query) {
      updateQuery(newQuery);
    }

    // This will be the params used by the server to retrieve data
    const fetchParams = {
      query: newQuery,
      page: newPage,
    };

    fetch(`http://localhost:8080/pokemons/?${
      new URLSearchParams(fetchParams).toString()
    }`)
      .then((res) => res.json())
      .then((body) => dispatch(setList({
        items: body.items,
        hasMore: body.hasMore,
        page: newPage,
      })))
      .catch((err) => {
        console.error(err);
        dispatch(setError({
          message: "No se pudieron obtener datos sobre Pokémons",
        }));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const openItemDetail = (itemId) => {
    navigate(`/${itemId}`);
  };

  useEffect(() => {
    // Run the first render only
    if (!init) {
      setInit(true);

      // Get query from URL
      const urlQuery = searchParams.get("q");

      // Set state query and fetch first items
      setQuery(urlQuery);
      fetchItems(urlQuery);
    }
  }, [searchParams, fetchItems, init]);

  return {
    loading,
    listItems,
    hasMore,
    page,
    error,
    query,
    fetchItems,
    openItemDetail,
  };

};

export default useHomeHook;
