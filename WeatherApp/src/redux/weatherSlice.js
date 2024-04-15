import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
    "weather/fetchWeatherData",
    async (searchedValue) => {
      try {
        const [weatherResponse, otherApiResponse] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchedValue}&appid=72c204fe61a0a3ada04b601b57d6bb27`),
          // Replace the URL below with the URL of your second API
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedValue}&appid=72c204fe61a0a3ada04b601b57d6bb27`),
        ]);
        return {
          weatherData: weatherResponse.data,
          forecastData: otherApiResponse.data,
        };
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
        throw error;
      }
    }
  );

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: [],
    forecastData: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload.weatherData;
        state.forecastData = action.payload.forecastData;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },

})

export default weatherSlice.reducer;