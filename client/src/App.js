import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NewRequestPage from "./pages/NewRequestPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/newrequestpage" component={NewRequestPage} />
      </Switch>
    </div>
  );
}

export default App;
