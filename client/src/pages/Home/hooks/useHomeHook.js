import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setError, setList, setLoading } from '../store/homeSlice';

const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const useHomeHook = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Store variables
  const loading = useSelector((state) => state.home.loading);
  const listPokemons = useSelector((state) => state.home.listPokemons);
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
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  const fetchPokemons = (newQuery = null, newPage = 1) => {
    // Start loading screen
    dispatch(setLoading(true));
    dispatch(setError(null));

    // If the query changed (this is useful to prevent navigation in the
    // first render)
    if (newQuery !== query) {
      updateQuery(newQuery);
    }

    // This will be the params used by the server to retrieve data
    const fetchParams = new URLSearchParams({
      query: newQuery,
      page: newPage,
    });

    fetch(`${serverBaseUrl}/pokemons/?${fetchParams.toString()}`)
      .then((res) => res.json())
      .then((body) => dispatch(setList({
        pokemons: body.pokemons,
        hasMore: body.hasMore,
        page: newPage,
      })))
      .catch((err) => {
        console.error(err);
        dispatch(setError({
          message: 'Could not get Pokemon data',
        }));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const openPokemonDetail = (pokemonId) => {
    navigate(`/${pokemonId}`);
  };

  useEffect(() => {
    // Run the first render only
    if (!init) {
      setInit(true);

      // Get query from URL
      const urlQuery = searchParams.get('q');

      // Set state query and fetch first Pokemons
      setQuery(urlQuery);
      fetchPokemons(urlQuery);
    }
  }, [searchParams, fetchPokemons, init]);

  return {
    loading,
    listPokemons,
    hasMore,
    page,
    error,
    query,
    fetchPokemons,
    openPokemonDetail,
  };

};

export default useHomeHook;
