import React from "react";
import "../css/App.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import ProjectInfo from "../pages/ProjectInfo/ProjectInfo";
let theme = createMuiTheme({
  palette:{
    primary:{
      light: "#FFA47A",
      main: "#FF8761",
    },
    secondary:{
      main:"#79B8D1",
    }
  }
  ,
    typography:{
      p:{
        fontFamily: "Open Sans,sans-serif",
      },      
      h2:{
        fontFamily: "Raleway,sans-serif", 
        fontWeight: 600,
        fontSize: 40,
      },
      h3:{
        fontFamily: "Raleway,sans-serif", 
        fontWeight: 600,
        fontSize: 25,
      },
      button:{
        fontFamily: "Raleway,sans-serif",
      }
    }
});
theme = responsiveFontSizes(theme);
export default function App() {
  return (
    <ThemeProvider theme={theme}> 
    <div className="app">
      {/* <Dashboard /> */}
      <ProjectInfo />
    </div>
      
    </ThemeProvider>
  );
}
