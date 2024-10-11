import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../src/App.css";
import Dash from "../src/components/features/Dash";
import Reportpanel from "../src/components/features/Reportpanel";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Editions from "components/features/Editions";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import BodyRoutes from "BodyRoutes";
import ProfileThreeColGrid2 from "components/cards/ProfileThreeColGrid2";

function Rout() {
  return (
    <Router>
      <div className="app">
        <div>
          <Switch>
            <Route exact path="/" component={BodyRoutes} />

            <Route
              exact
              path="/IEEEDELHISSN_TEAM"
              component={ProfileThreeColGrid}
            />
            <Route
              exact
              path="/IEEEDELHISSN_TEAM2"
              component={ProfileThreeColGrid2}
            />

            <Route exact path="/Editions" component={Editions} />

            <Route exact path="/Report" component={Reportpanel} />
            <Route exact path="/Event" component={Dash} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Rout;
