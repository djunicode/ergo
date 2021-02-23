import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    projectTitle: {
      ...theme.typography.h2,
      margin: 0,
    },
    projSpecTitle: {
      ...theme.typography.h3,
      margin: 0,
    },
    padHeaders: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    titleSection: {
      margin: "2rem auto 0 auto",
      width: "86%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    description: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginBottom: "2.5rem",
    },
    underline: {
      border: "none",
      backgroundColor: theme.palette.secondary.main,
      height: "0.063rem",
    },
    icon: {
      "& img": {
        width: "1.875rem",
      },
      "padding": "0.5rem",
      [theme.breakpoints.down("62.5rem")]: {
        "& img": {
          width: "1.43rem",
        },
        "padding": "0.47rem",
      },
    },
    tag: {
      marginRight: "0.7rem",
      border: "0.188rem solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "1.875rem",
      color: theme.palette.primary.main,
      width: "5rem",
      maxWidth: "7.5rem",
      height: "1.875rem",
      maxHeight: "2.8rem",
      verticalAlign: "middle",
      lineHeight: "1.875rem",
      textAlign: "center",
      marginTop: "1.6rem",
      marginBottom: "1.6rem",
    },
    tagPane: {
      display: "flex",
      flexDirection: "row",
    },
    iconPane: {
      float: "right",
    },
  };
});

export default useStyles;
