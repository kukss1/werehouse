import { createSlice } from '@reduxjs/toolkit';

import itemsData from '../data/items.json';

const initialState = {
  itemsList: itemsData,
  selectedItem: null,
  filters: {
    category: '',
    person: '',
    date: ''
  },
  filteredItems: []
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemsList.push(action.payload);
    },
    removeItem: (state, action) => {
      state.itemsList = state.itemsList.filter((item) => item.id !== action.payload);
    },
    setItemsList: (state, action) => {
      state.itemsList = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    }
  }
});

export const { setItemsList, setSelectedItem, addItem, removeItem, setFilters, setFilteredItems } = itemsSlice.actions;

export default itemsSlice.reducer;
