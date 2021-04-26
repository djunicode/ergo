import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IndividualRecentProject from "./IndividualRecentProject";
// Demo data for now
const demoData = [
  {
    id: 1,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
  {
    id: 2,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
  {
    id: 3,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
  {
    id: 4,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
  {
    id: 5,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
  {
    id: 6,
    title: "E-commerce",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
    techStack: ["ReactJS", "NodeJS", "CSS"],
  },
];

// useStyles hooks
const useStyles = makeStyles(() => ({
  Maintitle: {
    marginTop: "1.87rem",
    marginLeft: "3.1rem",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "1.5rem",
  },
  line: {
    backgroundColor: "rgba(227, 100, 136, 0.4)",
    // width:'95%',
    // align:'center',
    width: "95%",
    marginLeft: "3rem",
    marginRight: "3rem",
  },
}));

export default function RecentProjects() {
  const [recentProject] = useState(demoData);
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h5" className={classes.Maintitle}>
        Recent Projects
      </Typography>
      <hr className={classes.line} />
      <Grid container style={{ marginLeft: "1.87rem" }}>
        {recentProject.map((project) => (
          <IndividualRecentProject project={project} key={project.id} />
        ))}
      </Grid>
    </div>
  );
}
