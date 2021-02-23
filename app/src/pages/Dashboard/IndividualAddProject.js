import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "18.8rem",
    border: "0.62rem solid #79B8D1",
    borderRadius: "0.5rem",
    marginTop: "2.82rem",
    filter: "drop-shadow(0rem 0.94rem 3.75rem rgba(0, 0, 0, 0.1))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    width: 277,
    height: 159,
    [theme.breakpoints.between("sm", "md")]: {
      // width:'150px',
      // height:'150px',
      marginRight: "-10%",
    },
  },

  title: {
    fontSize: 20,
  },
  IconbuttonMargin: {
    marginLeft: "35%",
    marginTop: "2.8rem",
    marginBottom: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  InnerTitle: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "-10%",
    marginBottom: "2.7rem",
  },
}));

export default function IndividualAddProject({ project }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className={classes.root}>
        <CardActions>
          <IconButton className={classes.IconbuttonMargin}>
            {/* onClick={() => console.log("something clicked")} */}
            <img src={project.logo} alt="logo" />
          </IconButton>
        </CardActions>
        <CardContent className={classes.title}>
          <Typography className={classes.InnerTitle}>
            {project.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
