import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setError, setPokemon, setLoading } from '../store/viewSlice';

const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const useViewHook = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();

  // Store variables
  const loading = useSelector((state) => state.view.loading);
  const pokemon = useSelector((state) => state.view.pokemon);
  const error = useSelector((state) => state.view.error);

  const [init, setInit] = useState(false);

  const fetchPokemon = () => {
    // Start loading screen
    dispatch(setLoading(true));
    dispatch(setError(null));

    fetch(`${serverBaseUrl}/pokemons/${pokemonId}`)
      .then((res) => res.json())
      .then((body) => dispatch(setPokemon(body)))
      .catch((err) => {
        console.error(err);
        dispatch(setError({
          message: 'Could not get data for this Pokemon',
        }));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    // Run the first render only
    if (!init) {
      setInit(true);

      fetchPokemon();
    }
  }, [fetchPokemon, init]);

  return {
    loading,
    pokemon,
    error,
  };

};

export default useViewHook;
