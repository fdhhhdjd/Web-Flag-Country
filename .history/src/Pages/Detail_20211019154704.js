import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { searchByCountry } from "../utils/Data";
import { Button } from "../Components/Button";
import { IoArrowBack } from "react-icons/io5";
import { Info } from "../Components/Info";
const Detail = () => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} push={push} />}
    </div>
  );
};

export default Detail;
