import React from "react";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./components/home/homePage";
import Community from "./components/home/Community";
import Solution from "./components/home/Solution";
import Campaign from "./components/campaign/campaignPage";
import French from "./components/french/frenchPage";

const Routes = () =>
    <Router history={hashHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />

            <Route path="/home" component={ Home } />
            <Route path="/community" component={ Community } />
            <Route path="/solution" component={ Solution } />
            <Route path="/campaign" component={ Campaign } />
            <Route path="/french" component={ French } />
        </Route>
    </Router>;

export default Routes;
