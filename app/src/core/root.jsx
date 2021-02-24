import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Routes from "./routes";
import "./root.css";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFA47A",
      main: "#FF8761",
    },
    secondary: {
      main: "rgb(121, 184, 209)",
      light: "rgba(121, 184, 209,0.3)",
      xlight: "rgba(121, 184, 209,0.2)",
    },
  },
  typography: {
    p: {
      fontFamily: "Open Sans,sans-serif",
      fontWeight: "300",
    },
    pTitle: {
      fontFamily: "Open Sans,sans-serif",
      fontWeight: "400",
      fontSize: 20,
    },
    h1: {
      fontFamily: "Raleway,sans-serif",
      fontSize: 42,
    },
    h2: {
      fontFamily: "Raleway,sans-serif",
      fontWeight: 600,
      fontSize: 35,
    },
    h3: {
      fontFamily: "Raleway,sans-serif",
      fontWeight: 600,
      fontSize: 25,
    },
    button: {
      fontFamily: "Raleway,sans-serif",
      textTransform: "capitalize",
    },
  },
});
theme = responsiveFontSizes(theme);

function Root({ store, history }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default Root;
