import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityTable from "./src/components/CityTable";
import WeatherPage from "./src/pages/WeatherPage";

function App() {
  return (
    <div className="App" style={{ padding: "4px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<CityTable />} />
          <Route path="/weather/:cityName" element={<WeatherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
