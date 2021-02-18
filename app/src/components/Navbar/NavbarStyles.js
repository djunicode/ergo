import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    ...theme.typography.h1,
    marginLeft:"1rem",
    marginRight: "1.8rem",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight:"6rem",
      marginLeft: "2.3rem",
    },
  },
  preButtons:{
    flexGrow: 1,
    [theme.breakpoints.down("800px")]:{
      display:"none"
    },
  },
  logo: {
    height: "46px", 
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]:{
      height:"38px"
    },
  },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  search: {
    position: "relative",
    color: "white",
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0",
  },

  inputRoot: {
    color: "inherit",
    backgroundColor: "#FFA47A",
    marginLeft: "3.4rem",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    float:"right",
  },
}));
