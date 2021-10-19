import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { searchByCountry } from "../utils/Data";
import { Button } from "../Components/Button";
import { IoArrowBack } from "react-icons/io5";
const Detail = () => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data));
  }, [name]);
  console.log("id", country);
  return (
    <>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      <h1></h1>
    </>
  );
};
export default Detail;
