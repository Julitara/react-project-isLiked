import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterFavorite: null,
};

export const filterFavoriteSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterFavorite(state, action) {
      state.filterFavorite = action.payload.filterFavorite;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setFilterFavorite } = filterFavoriteSlice.actions;

export default filterFavoriteSlice.reducer;
