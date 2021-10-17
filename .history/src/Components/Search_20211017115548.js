import { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomSelect } from "./CustomerSelect";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];
const Search = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder="Filter by Region"
          isClearable
          isSearchable={false}
          value={region}
          onChange={setRegion}
        />
      </Wrapper>
    </>
  );
};

export default Search;
