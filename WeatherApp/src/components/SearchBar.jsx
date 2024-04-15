import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { setFilteredCities } from "../redux/citySlice";
import { GrPowerReset } from "react-icons/gr";
const SearchBar = ({ handleSearch, citydata, selectedCityFunc }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(null);

  const onReset = () => {
    setSearchTerm("");
    dispatch(setFilteredCities(citydata));
  };
  const handleOnChange = (searchData) => {
    setSearchTerm(searchData);
    if (searchData && !searchData.geoname_id) {
      handleSearch(searchData?.name);
    }
    selectedCityFunc(searchData?.name, searchData?.geoname_id);
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center space-x-4">
        <AsyncPaginate
          className="sm:w-[400px] w-[230px] text-lg font-light p-2 "
          value={searchTerm}
          loadOptions={handleSearch}
          onChange={handleOnChange}
          placeholder="Search City"
          debounceTimeout={600}
        />
        <GrPowerReset
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
          onClick={onReset}
        />
      </div>
    </div>
  );
};

export default SearchBar;
