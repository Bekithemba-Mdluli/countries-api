import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Countries from './components/countries/Countries';
// import Filtering from './components/filter/Filtering';
import Header from './components/header/Header';
import Information from "./components/information/Information";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>

          <Route exact path="/">

            <Countries />
          </Route>
          <Route path="/:id">
            <Information />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
