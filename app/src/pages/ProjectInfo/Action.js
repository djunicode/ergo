import React from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  Button,
  useMediaQuery,
  Collapse,
} from "@material-ui/core";
import info from "../../icons/info.svg";
import edit from "../../icons/edit.svg";
import play from "../../icons/run.svg";

let light;
let xlight;
const useStyles = makeStyles((theme) => {
  light = theme.palette.secondary.light;
  xlight = theme.palette.secondary.xlight;
  return {
    container: {
      "backgroundColor": theme.palette.secondary.main,
      "verticalAlign": "middle",
      "lineHeight": "3.75rem",
      ...theme.typography.p,
      "fontSize": 13,
      "&:hover": {
        cursor: "pointer",
      },
    },
    actionTitle: {
      ...theme.typography.pTitle,
      display: "inline",
      paddingLeft: "0.5rem",
      marginRight: "0.4rem",
    },
    actionDesc: {
      width: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    run: {
      ...theme.typography.button,
      "height": "2.69rem",
      "margin": "0.62rem auto",
      "border": "0.063rem solid",
      "backgroundColor": "white",
      "&:hover": {
        background: "white",
      },
      [theme.breakpoints.down("sm")]: {
        height: "2.2rem",
      },
      "borderColor": theme.palette.primary.main,
    },
    playIcon: {
      height: "1.25rem",
      marginRight: "0.4rem",
      [theme.breakpoints.down("50.625rem")]: {
        margin: "auto",
      },
    },
    icons: {
      [theme.breakpoints.down("sm")]: {
        "padding": "0.2rem",
        "& img": {
          height: "1.25rem",
          width: "1.25rem",
          padding: "0.62rem",
        },
      },
      [theme.breakpoints.down("xs")]: {
        "padding": "0.2rem",
        "& img": {
          height: "0.94rem",
          width: "0.94rem",
          padding: "0.44rem",
        },
      },
    },
    expandedInfo: {
      ...theme.typography.pTitle,
      fontSize: 16,
      paddingLeft: "1rem",
      lineHeight: "1.5rem",
      width: "80%",
      marginBottom: "1rem",
    },
    actionTitleExpanded: {
      ...theme.typography.pTitle,
      fontWeight: "600",
      paddingLeft: "0.5rem",
      paddingTop: "1rem",
      margin: "0",
      lineHeight: "100%",
    },
  };
});

function Action({ shown, isOdd, collapseHandler, index }) {
  const classes = useStyles();
  const runText = useMediaQuery("(max-width:50.625rem)") ? "" : "Run Action";
  const actionInfo = shown ? null : (
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </span>
  );
  const titleClass = shown ? classes.actionTitleExpanded : classes.actionTitle;
  const actionClickHandler = () => {
    if (!shown) collapseHandler(index);
    else collapseHandler(null);
  };
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: isOdd ? light : xlight,
        lineHeight: shown ? "2.5rem" : "3.75rem",
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <Grid container>
        <Grid item xs={8} onClick={actionClickHandler}>
          <div className={classes.actionDesc}>
            <p className={titleClass}>Title of Action</p>
            {actionInfo}
          </div>
        </Grid>
        <Grid item xs={2}>
          <IconButton className={classes.icons}>
            <img src={info} alt="info" />
          </IconButton>
          <IconButton className={classes.icons}>
            <img src={edit} alt="info" />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          {/* onClick = () => {
            window.api.api.send("Open Terminal with Command", {
                openterm: {
                  arrCommand: ["echo", "Hi"],
                  type: "" //optional and not required
                },
              });
              window.api.api.onReceive("Open Terminal with Command Reply",
              (args) => console.log(args.openterm.msg,args.openterm.status));
              0 is ok and 1 is error
            } */}
          {/* onClick={() => {
              window.api.api.send("Create Project", {
                createproject: {
                  project: {
                    name: "HELLO",
                    type: "node",
                  },
                },
              });
              window.api.api.onReceive("Create Project Reply", (args) =>
                console.log(args.createproject.msg, args.createproject.status)
              );
              0 is ok and 1 is error
            }} */}
          <Button className={classes.run}>
            <img className={classes.playIcon} src={play} alt="play" />
            {runText}
          </Button>
        </Grid>
        <Grid item xs={12} style={{ display: shown ? "block" : "none" }}>
          <Collapse in={shown}>
            <div
              role="button"
              tabIndex="0"
              onClick={actionClickHandler}
              onKeyDown={actionClickHandler}
              // eslint-disable-next-line react/jsx-closing-bracket-location
              className={classes.expandedInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </Collapse>
        </Grid>
      </Grid>
    </div>
  );
}

export default Action;
