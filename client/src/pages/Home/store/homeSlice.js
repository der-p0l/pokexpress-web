import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  listItems: [],
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
      state.listItems = action.payload.items;
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
