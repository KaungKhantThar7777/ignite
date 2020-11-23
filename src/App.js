import React from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
