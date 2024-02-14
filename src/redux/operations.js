import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65b39409770d43aba47a096e.mockapi.io/';

export const fetchPaginatedCars = createAsyncThunk('adverts', async (page, { rejectWithValue }) => {
  try {
    const response = await axios.get(`adverts?page=${page}&limit=9`);
    if (response.data.length === 0) {
      console.error('No more cars avaible');
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchAllCars = createAsyncThunk('allAdverts', async (page, { rejectWithValue }) => {
  try {
    const response = await axios.get(`adverts`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
