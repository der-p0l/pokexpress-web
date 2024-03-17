import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  pokemon: null,
  error: null,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  setPokemon,
  setError,
} = viewSlice.actions;

export default viewSlice.reducer;
