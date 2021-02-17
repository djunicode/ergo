import React from "react";
import "../css/App.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ProjectInfo from "../pages/ProjectInfo/ProjectInfo";
const theme = createMuiTheme({
  palette:{
    primary:{
      light: '#FFA47A',
      main: '#FF8761',
    },
    secondary:{
      main:'#79B8D1',
    }
  }
  ,
    typography:{
      p:{
        fontFamily: 'Open Sans,sans-serif',
      },      
      h2:{
        fontFamily: 'Raleway,sans-serif', 
        fontWeight: 600,
      },
      button:{
        fontFamily: 'Raleway,sans-serif',
      }
    }
});
export default function App() {
  return (
    <ThemeProvider theme={theme}> 
    <div className="app">
      <Dashboard />
      <ProjectInfo />
    </div>
      
    </ThemeProvider>
  );
}
