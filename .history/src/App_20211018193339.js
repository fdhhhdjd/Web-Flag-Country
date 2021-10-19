import { Switch, Route } from "react-router-dom";
import { Header, HomePage, NotFound } from "./import/Index";
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
          {/* <Route path="/country/:name"></Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
