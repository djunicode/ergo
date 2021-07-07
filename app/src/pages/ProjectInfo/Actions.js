import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Action from "./Action";

const useStyles = makeStyles((theme) => ({
  actionsPane: {
    border: "0.125rem solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "0.94rem",
    width: "86%",
    margin: "2rem auto 1rem auto",
  },
  underline: {
    border: "none",
    backgroundColor: theme.palette.secondary.main,
    height: "0.125rem",
    marginBottom: "0",
  },
  title: {
    ...theme.typography.h3,
    paddingLeft: "1.5rem",
    marginBottom: "0.62rem",
  },
}));

function Actions() {
  const classes = useStyles();
  const [clickedIndex, setClickedIndex] = useState(null);
  const actionClickHandler = (index) => {
    setClickedIndex(index);
  };

  const objs = [
    {
      title: "Open Terminal",
      info: "Open Terminal in Current Project Directory",
      onClick: () => {
        window.api.api.send("Open Terminal with Command", {
          openterm: {
            arrCommand: ["echo", "Hi"],
            type: "", //optional and not required
          },
        });
        window.api.api.onReceive("Open Terminal with Command Reply", (args) =>
          console.log(args.openterm.msg, args.openterm.status)
        );
      },
    },
    {
      title: "Open File Editor",
      info: "Open Project in Current File Explorer",
      onClick: () => {
        window.api.api.send("Launch File Manager", {
          launchmanager: {
            // path: "C:\\Users\\shahj\\Desktop",
            // Storing in Projects Folder
            // Might use user path in future
            path:"",
          },
        });
        window.api.api.onReceive("Launch File Manager Reply", (args) =>
          console.log(args.launchmanager.msg, args.launchmanager.status)
        );
      },
    },
    {
      title: "Open Code Editor",
      info: "Open Project in Code Editor",
      onClick: () => {
        window.api.api.send("Launch Default Editor", {
          launcheditor: {
            preferredEdittor: "VSCode",
            // path: "C:\\Users\\shahj\\Desktop",
            // Storing in Projects Folder
            // Might use user path in future
            path:"",
          },
        });
        window.api.api.onReceive("Launch Default Editor Reply", (args) =>
          console.log(args.launcheditor.msg, args.launcheditor.status)
        );
      },
    },
  ];
  return (
    <div className={classes.actionsPane}>
      <h3 className={classes.title}>Actions</h3>
      <hr className={classes.underline} />
      {objs.map((obj, index) => {
        const shouldShow = clickedIndex === index;
        const isOdd = index % 2 === 0;
        return (
          <Action
            key={index}
            index={index}
            isOdd={isOdd}
            collapseHandler={actionClickHandler}
            shown={shouldShow}
            title={obj.title}
            info={obj.info}
            onClick={obj.onClick}
          />
        );
      })}
    </div>
  );
}
export default Actions;
