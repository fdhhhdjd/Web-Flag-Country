import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../utils/Data";
import { List } from "../Components/List";
import Card from "../Components/Card";
import Search from "../Components/Search";
import { useHistory } from "react-router";
const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filtredCountries, setFilteredCountries] = useState(countries);
  const { push } = useHistory();
  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
      //   axios
      //     .get(ALL_COUNTRIES)
      //     .then((res) => setCountries(res.data))
      //     .catch((err) => {
      //       console.error(err);
      //     });
    }
  }, []);
  useEffect(() => {
    handleSearch();
  }, [countries]);
  return (
    <>
      <Search onSearch={handleSearch} />
      <List>
        {filtredCountries.map((c) => {
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

          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => push(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;