// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
