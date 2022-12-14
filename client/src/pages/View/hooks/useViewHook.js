import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setError, setItem, setLoading } from "../store/viewSlice";

const useViewHook = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  // Store variables
  const loading = useSelector((state) => state.view.loading);
  const item = useSelector((state) => state.view.item);
  const error = useSelector((state) => state.view.error);

  const [init, setInit] = useState(false);

  const fetchItem = () => {
    // Start loading screen
    dispatch(setLoading(true));
    dispatch(setError(null));

    fetch(`http://localhost:8080/pokemons/${itemId}`)
      .then((res) => res.json())
      .then((body) => dispatch(setItem(body)))
      .catch((err) => {
        console.error(err);
        dispatch(setError({
          message: "No se pudieron obtener datos sobre este Pokémon",
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

      fetchItem();
    }
  }, [fetchItem, init]);

  return {
    loading,
    item,
    error,
  };

};

export default useViewHook;
