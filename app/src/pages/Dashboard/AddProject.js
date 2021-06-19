import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Vector from "../../icons/Vector.png";
import Import from "../../icons/Import.png";
import Template from "../../icons/Template.png";
import IndividualAddProject from "./IndividualAddProject";

const useStyles = makeStyles(() => ({
  Maintitle: {
    marginTop: "1.87rem",
    marginLeft: "4.81rem",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
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

const projectCards = [
  {
    id: 1,
    title: "Add New Project",
    logo: Vector,
  },
  {
    id: 2,
    title: "Import Project",
    logo: Import,
  },
  {
    id: 3,
    title: "Add New Template",
    logo: Template,
  },
];

export default function AddProject() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h5" className={classes.Maintitle}>
        Add Projects
      </Typography>
      <hr className={classes.line} />

      <Grid container spacing={3} style={{ marginLeft: "1.87rem" }}>
        {projectCards.map((p) => (
          <IndividualAddProject project={p} key={p.id} />
        ))}
      </Grid>
    </div>
  );
}
