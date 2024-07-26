import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
  filter: 'all',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setImages, setFilter } = gallerySlice.actions;

export default gallerySlice.reducer;