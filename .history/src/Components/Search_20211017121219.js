import { useState, useEffect } from "react";
import styled from "styled-components";
import { CustomSelect } from "./CustomerSelect";
import { Searchs } from "./Searchs";
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
const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <Wrapper>
        <Searchs search={search} setSearch={setSearch} />
      </Wrapper>
    </>
  );
};

export default Search;
