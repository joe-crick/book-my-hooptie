import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "components/pages/home/home";
import CarSelection from "components/pages/car-selection/car-selection";
import PageNotFound from "components/shared/error-pages/page-not-found";

export default ({ match }) => {
  const base = `/${match.params.lang}`;
  return (
    <Switch>
      <Route exact path={base} component={Home} />
      <Route path={`${base}/hoopties`} component={CarSelection} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
