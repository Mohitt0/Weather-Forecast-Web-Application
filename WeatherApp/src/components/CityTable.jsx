import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCitiesData,
  searchedValueApi,
  setFilteredCities,
} from "../redux/citySlice";
import SearchBar from "./SearchBar";
import CityListData from "./CityListData";

const CityTable = () => {
  const dispatch = useDispatch();
  const citydata = useSelector((state) => state.cities.cities);
  const filterData = useSelector((state) => state.cities.filteredCities);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    dispatch(fetchCitiesData());
  }, []);

  const handleSearch = async (searchValue, prevOptions) => {
    const capitalizedSearchValue = await captialValueFunc(searchValue);
    if (!searchValue) {
      return {
        options: citydata?.map((city) => ({
          geoname_id: city.geoname_id,
          cou_name_en: city.cou_name_en,
          name: city.name,
          timezone: city.timezone,
          label: `${city.name}, ${city.country_code}`,
        })),
        hasMore: false,
      };
    }

    try {
      const data = await dispatch(searchedValueApi(capitalizedSearchValue));
      const options = data?.payload?.map((city) => ({
        geoname_id: city.geoname_id,
        cou_name_en: city.cou_name_en,
        name: city.name,
        timezone: city.timezone,
        label: `${city.name}, ${city.country_code}`,
      }));

      return {
        options: options,
        hasMore: false, // Assuming all data is fetched at once
      };
    } catch (error) {
      console.error("Error fetching city data:", error);
      return {
        options: [],
        hasMore: false,
      };
    }
  };
  const selectedCityFunc = async (searchValue, selectedCityId) => {
    try {
      const data = await dispatch(searchedValueApi(searchValue));

      const filteredOptions = data?.payload?.filter(
        (city) => city.geoname_id === selectedCityId
      );
      const options = filteredOptions.map((city) => ({
        geoname_id: city.geoname_id,
        cou_name_en: city.cou_name_en,
        name: city.name,
        timezone: city.timezone,
        lat: city.coordinates.lat,
        lon: city.coordinates.lon,
        country_code:city.country_code,
        label: `${city.name}, ${city.country_code}`,
      }));
      dispatch(setFilteredCities(options));
      return {
        options: options,
        hasMore: false, // Assuming all data is fetched at once
      };
    } catch (error) {
      console.error("Error fetching city data:", error);
      return {
        options: [],
        hasMore: false,
      };
    }
  };
  const fetchMoreData = async () => {
    try {
      // Fetch additional data
      const response = await axios.get(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&offset=" +
          filterData.length
      );
      const newCities = [...filterData, ...response.data.results];
      // Update the list of cities with the new data
      dispatch(setFilteredCities(newCities));

      // Check if there is more data to load
      if (response.data.results.length === 0) {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  const captialValueFunc = async (searchValue) => {
    const capitalizedSearchValue = searchValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return capitalizedSearchValue;
  };

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-sm shadow-gray-400">
        <div className="flex items-center justify-center my-2">
          <h1 className="  lg:text-2xl text-white font-medium sm:text-xl">
            Weather Forecast Web Application
          </h1>
        </div>
        <SearchBar
          handleSearch={handleSearch}
          citydata={citydata}
          selectedCityFunc={selectedCityFunc}
        />
      </div>
      <CityListData
        filterData={filterData}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </>
  );
};

export default CityTable;
