import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import NotFoundPage from "./containers/NotFoundPage";

import { allReducers } from "../reducers/indexReducers";

const store = createStore(allReducers);
export type StoreApp = typeof store;
export type StoreDispatch = typeof store.dispatch;

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/about" component={NotFoundPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}
