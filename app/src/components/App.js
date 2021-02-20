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
      main:"rgb(121, 184, 209)",
      light:"rgba(121, 184, 209,0.3)",
      xlight:"rgba(121, 184, 209,0.2)",
    }
  }
  ,
    typography:{
      p:{
        fontFamily: "Open Sans,sans-serif",
        fontWeight:"300",
      },
      pTitle:{
        fontFamily: "Open Sans,sans-serif",
        fontWeight:"400",
        fontSize: 20,
      },
      h1:{
        fontFamily: "Raleway,sans-serif", 
        fontSize: 42,
      } ,    
      h2:{
        fontFamily: "Raleway,sans-serif", 
        fontWeight: 600,
        fontSize: 35,
      },
      h3:{
        fontFamily: "Raleway,sans-serif", 
        fontWeight: 600,
        fontSize: 25,
      },
      button:{
        fontFamily: "Raleway,sans-serif",
        textTransform:"capitalize",
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
