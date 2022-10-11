import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorite = state.favorite.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectFavorite = (state) => state.favorite;

export const { setFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
