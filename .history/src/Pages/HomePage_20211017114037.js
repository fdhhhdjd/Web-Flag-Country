import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../utils/Data";
import { List } from "../Components/List";
const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);
  return (
    <>
      <List></List>
    </>
  );
};

export default HomePage;
