import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from '../features/gallerySlice';

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});