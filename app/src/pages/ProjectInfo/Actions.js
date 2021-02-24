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
  return (
    <div className={classes.actionsPane}>
      <h3 className={classes.title}>Actions</h3>
      <hr className={classes.underline} />
      {[1, 2, 3, 4].map((obj, index) => {
        const shouldShow = clickedIndex === index;
        const isOdd = index % 2 === 0;
        return (
          <Action
            key={obj}
            index={index}
            isOdd={isOdd}
            collapseHandler={actionClickHandler}
            shown={shouldShow}
          />
        );
      })}
    </div>
  );
}
export default Actions;
