import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_API_URL}/search`, {
        params: {
          page,
          'api-key': process.env.NEXT_API_KEY,
        },
      });
      return response.data.response;
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке новостей');
    }
  }
);
