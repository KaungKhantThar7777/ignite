import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
