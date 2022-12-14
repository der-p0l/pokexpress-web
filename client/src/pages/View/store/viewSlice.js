import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  item: null,
  error: null,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setItem: (state, action) => {
      state.item = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  setItem,
  setError,
} = viewSlice.actions;

export default viewSlice.reducer;
