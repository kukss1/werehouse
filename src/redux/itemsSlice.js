import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products.json';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: productsData,
    selectedItem: null,
  },
  reducers: {
    setItemsList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      state.list.push(newItem);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.list = state.list.filter((item) => item.id !== itemId);
    },
  },
});

export const { setItemsList, setSelectedItem, addItem, removeItem } =
  itemsSlice.actions;

export const fetchProducts = () => {
  return (dispatch) => {
    const products = productsData;
    dispatch(setItemsList(products));
  };
};

export default itemsSlice.reducer;
