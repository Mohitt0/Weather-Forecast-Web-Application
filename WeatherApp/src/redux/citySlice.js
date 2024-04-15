import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCitiesData = createAsyncThunk(
  "cities/fetchCities",
  async () => {
    const response = await axios.get(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20"
    );

    return response.data.results;
  }
);
export const searchedValueApi = createAsyncThunk(
  "searchedValue",
  async (capitalizedSearchValue) => {
    const response = await axios.get(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&refine=name:${capitalizedSearchValue}`
    );
    return response.data.results;
  }
);
const citySlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    filteredCities: [],
  },
  reducers: {
    setFilteredCities: (state, action) => {
      state.filteredCities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesData.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.filteredCities = action.payload;
      })
      .addCase(fetchCitiesData.rejected, (state, action) => {
        console.error("Error fetching city data:", action.error.message);
      });
  },
});

export const { setFilteredCities } = citySlice.actions;

export const selectCities = (state) => state.cities.filteredCities;

export default citySlice.reducer;
