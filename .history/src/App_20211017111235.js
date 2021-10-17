import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./import/Index";
import styled from "styled-components";
const Main = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;
function App() {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
}

export default App;
