import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Grid,IconButton } from "@material-ui/core";
import run from "../../icons/run.svg";
import edit from "../../icons/edit.svg";
import del from "../../icons/delete.svg";
import useStyles from "./ProjectInfoStyles";
import Actions from "./Actions";
function ProjectInfo(){
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.titleSection}>
                <Grid container className={classes.padHeaders}>
                    <Grid item md={10} xs={8}  >
                        <h1 className={classes.projectTitle}>Project Ergo</h1>
                    </Grid>
                    <Grid item md={2} xs={4}>
                        <div style={{float:"right"}}>
                            <IconButton className={classes.icon}>
                            <img  src={run} />
                            </IconButton>
                            <IconButton className={classes.icon}>
                            <img  src={edit} />
                            </IconButton>
                            <IconButton className={classes.icon}>
                            <img src={del} />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                <hr className={classes.underline}/>
                <div className={classes.description}>
                    <p><i>Author: </i>John Doe</p>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                </div>
                <div className={classes.projSpec}>
                    <h3 className={[classes.projSpecTitle ,classes.padHeaders].join(" ")}>Project Specifications</h3>
                    <hr className={classes.underline}/>
                        
                    <div className={classes.description}>
                        <div style={{ display:"flex", flexDirection:"row",}}>
                            {["React","Node","MongoDB"].map(name=>(
                                <div key={name} className={classes.tag}>{name}</div>
                            ))}
                        </div>                                                
                        <p><i>Last Edit: </i>01-01-2021</p>
                        <p><i>Project Initialized on: </i>01-01-2021</p>
                    </div>
                </div>
            </div>
            <Actions />
        </div>

        
    );
}
export default ProjectInfo;