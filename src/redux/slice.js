import { createSlice } from '@reduxjs/toolkit';
import { fetchPaginatedCars, fetchAllCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    adverts: [],
    allAdverts: [],
    favorites: [],
    isLoading: false,
    isMount: false,
    error: null,
  },
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(advert => advert.id !== payload.id);
    },

    setError(state, { payload }) {
      state.error = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPaginatedCars.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
        state.isMount = true;
        if (payload.length === 0) {
          state.error = true;
        }
      })
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.allAdverts = [...state.allAdverts, ...payload];
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleReject);
  },
});

export const { addFavorite, removeFavorite, setError } = carSlice.actions;
