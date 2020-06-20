import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadEpisodes = createAsyncThunk(
  'episodes/loadEpisodes',
  async () => {
    // API call logic here
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode/');
      const data = await response.json();
      return data;
    } catch (error) {
      return alert(`Episodes error: ${error}`);
    }
  }
);

const initialState = {
  episodes: [],
  loading: false,
  error: false,
  errorMessage: null,
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {}, // any reducers that modify the data directly
  extraReducers: {
    [loadEpisodes.pending]: (state) => {
      state.loading = true;
    },
    [loadEpisodes.fulfilled]: (state, action) => {
      state.loading = false;
      state.episodes = action.payload.results;
    },
    [loadEpisodes.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const episodesReducer = episodesSlice.reducer;
