import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Vector from "../../icons/Vector.png";
import Import from "../../icons/Import.png";
import Template from "../../icons/Template.png";
import IndividualAddProject from "./IndividualAddProject";
const useStyles = makeStyles((theme) => ({
  Maintitle: {
    marginTop: "30px",
    marginLeft: "77px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
  },
  line: {
    backgroundColor: "rgba(227, 100, 136, 0.4)",
    // width:'95%',
    // align:'center',
    width: "1440px",
    marginLeft: "49px",
    marginRight: "49px",
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

      <Grid container spacing={3} style={{ marginLeft: "30px" }}>
        {projectCards.map((p) => (
          <IndividualAddProject project={p} key={p.id} />
        ))}
      </Grid>
    </div>
  );
}
