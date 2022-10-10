import { configureStore } from '@reduxjs/toolkit';
import product from './slice/productSlice';
import favorite from './slice/favoriteSlice';
import filter from './slice/filterFavoriteSlice';

export const store = configureStore({
  reducer: {
    product,
    favorite,
    filter,
  },
});
