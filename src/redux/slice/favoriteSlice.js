import { createSlice } from '@reduxjs/toolkit';
import { omit } from 'lodash';

const initialState = {
  favorite: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.favorite = action.payload;
    },
    removeFavorite(state, action) {
      omit(state, [action.payload]);
    },
  },
});

export const selectFavorite = (state) => state.favorite;

export const { setFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
