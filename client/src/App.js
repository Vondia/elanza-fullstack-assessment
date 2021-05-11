import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CareRequestDetailsPage from "./pages/CareRequestDetailsPage";
import HomePage from "./pages/HomePage";
import NewRequestPage from "./pages/NewRequestPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/newrequestpage" component={NewRequestPage} />
        <Route
          path="/carerequestdetailspage"
          component={CareRequestDetailsPage}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
