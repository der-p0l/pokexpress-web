import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  listPokemons: [],
  hasMore: false,
  page: 1,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setList: (state, action) => {
      state.listPokemons = action.payload.pokemons;
      state.hasMore = action.payload.hasMore;
      state.page = action.payload.page;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  setList,
  setError,
} = homeSlice.actions;

export default homeSlice.reducer;
