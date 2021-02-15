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
    display: "none",
    fontSize: "30px",
    marginLeft: "36px",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginRight: "150px",
    },
  },
  search: {
    position: "relative",
    marginLeft: theme.spacing(1),
    color: "white",
    marginRight: theme.spacing(2),
    marginLeft: "15px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0px",
  },

  inputRoot: {
    color: "inherit",
    backgroundColor: "#FFA47A",
    marginLeft: "95px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
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
    display: "none",
    marginLeft: "75px",
    marginRight: "10px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
