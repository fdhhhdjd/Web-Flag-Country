import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../utils/Data";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
