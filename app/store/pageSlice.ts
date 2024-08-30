import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  currentPage: number;
}

const initialState: PageState = {
  currentPage: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { setPage, nextPage, prevPage } = pageSlice.actions;

export default pageSlice.reducer;
