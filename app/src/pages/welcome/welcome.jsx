import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import "./welcome.css";
import {MyCmp} from 'Components/subitem/mycmp'; // temporary component to check working of material-ui
class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome">
        <h1 className="header">
          Thank you for trying out the secure-electron-template!
        </h1>
        <MyCmp />
        <div>
          <Link to={ROUTES.MOTD}>View a sample of using the store.</Link><br />
          <Link to={ROUTES.LOCALIZATION}>
            View a sample of changing locales.
          </Link> <br />
          <Link to={ROUTES.UNDOREDO}>
            View a sample of undo/redoing actions.
          </Link> <br />
          <Link to={ROUTES.CONTEXTMENU}>
            View a sample of a custom context menu.
          </Link> <br />
        </div>
      </div>
    );
  }
}

export default Welcome;
