import React from "react";
import { useHistory, useParams } from "react-router";

const Detail = () => {
  const { name } = useParams();
  const { push, goBack } = useHistory();
  const [country, setCountry] = useState(null);
  return (
    <>
      <h1></h1>
    </>
  );
};
export default Detail;
