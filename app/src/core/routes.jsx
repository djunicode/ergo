import React from "react";
import { Switch, Route } from "react-router";
import ROUTES from "../constants/routes.json";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectInfo from "../pages/ProjectInfo/ProjectInfo";
import Motd from "../pages/motd/motd";
import Localization from "../pages/localization/localization";
import UndoRedo from "../pages/undoredo/undoredo";
import ContextMenu from "../pages/contextmenu/contextmenu";

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.WELCOME} component={Dashboard} />
      <Route path={ROUTES.PROJECTINFO} component={ProjectInfo} />
      <Route path={ROUTES.MOTD} component={Motd} />
      <Route path={ROUTES.LOCALIZATION} component={Localization} />
      <Route path={ROUTES.UNDOREDO} component={UndoRedo} />
      <Route path={ROUTES.CONTEXTMENU} component={ContextMenu} />
    </Switch>
  );
}

export default Routes;
