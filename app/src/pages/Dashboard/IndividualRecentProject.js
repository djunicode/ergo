import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { CardActionArea } from "@material-ui/core";
import StyledLink from "../../components/StyledLink/StyledLink";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "0.125rem solid #F4976C",
    marginTop: "1.87rem",
    marginBottom: "0.62rem",
    borderRadius: "0.62rem",
    filter: "drop-shadow(0rem 0.94rem 3.75rem rgba(0, 0, 0, 0.1))",
    width: "21.87rem",
    [theme.breakpoints.between("sm", "md")]: {
      width: "18.7rem",
    },
  },
  cardTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    marginTop: "0.62rem",
    marginBottom: "0.62rem",
  },
  InnerCard: {
    color: "#F4976C",
    border: "0.063rem solid #F4976C",
    textAlign: "center",
  },
  cardAction: {
    maxHeight: "0.94rem",
    height: "2.7rem",
    color: "white",
    backgroundColor: "#F4976C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
function IndividualRecentProject({ project }) {
  const classes = useStyles();
  const linkToInfo = `/project/${project.title}`;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <StyledLink to={linkToInfo}>
            <CardContent>
              <Typography className={classes.cardTitle}>
                {project.title}
              </Typography>
              <div className={classes.desc}>{project.desc}</div>
              <Grid container spacing={1}>
                {project.techStack.map((tech) => {
                  return (
                    <Grid item md={3}>
                      <Card className={classes.InnerCard}>{tech}</Card>
                    </Grid>
                  );
                })}
              </Grid>
            </CardContent>
          </StyledLink>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Typography style={{ fontWeight: "bold" }}>Actions</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default IndividualRecentProject;
