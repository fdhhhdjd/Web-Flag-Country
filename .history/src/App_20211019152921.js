import { Switch, Route } from "react-router-dom";
import { Header, HomePage, NotFound, Detail } from "./import/Index";
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
          <Route path="/country/:name">
            <Detail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
