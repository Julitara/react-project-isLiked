import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProductStatus', async () => {
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  return data;
});

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
  favorite: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchProduct.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectProduct = (state) => state.product;

export const { setItems, removeItem, setFavorite, removeFavorite } = productSlice.actions;

export default productSlice.reducer;
