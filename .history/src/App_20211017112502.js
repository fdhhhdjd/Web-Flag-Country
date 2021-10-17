import { Switch, Route } from "react-router-dom";
import { Header, HomePage } from "./import/Index";
import { Main } from "./Components/Main";
function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
