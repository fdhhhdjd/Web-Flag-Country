import { Switch, Route } from "react-router-dom";
import { Header } from "./import/Index";
import { Main, HomePage } from "./Components/Main";
function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
