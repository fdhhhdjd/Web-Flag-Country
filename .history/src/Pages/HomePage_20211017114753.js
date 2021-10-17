import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../utils/Data";
import { List } from "../Components/List";
import Card from "../Components/Card";
const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);
  return (
    <>
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return <Card key={c.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
