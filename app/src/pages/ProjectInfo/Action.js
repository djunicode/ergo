import React from "react";
import {Grid, IconButton, makeStyles,Button} from "@material-ui/core";
import info from "../../icons/info.svg";
import edit from "../../icons/edit.svg";
import play from "../../icons/run.svg";
let light,xlight;
const useStyles = makeStyles(theme=>{
    light = theme.palette.secondary.light;
    xlight = theme.palette.secondary.xlight;
    return {
        container:{
            height:"60px",
            backgroundColor:theme.palette.secondary.main,
            verticalAlign: "middle",
            lineHeight: "60px",
            ...theme.typography.p,
            fontSize:13,
        },
        actionTitle:{
            ...theme.typography.pTitle,
            display:"inline",
            paddingLeft:"0.5rem",
            marginRight:"0.4rem",
        },
        actionDesc:{
            width:"100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        run:{
            ...theme.typography.button,
            height:"48px",
            padding:"auto",
            border:"1px solid",
            backgroundColor:"white",
            '&:hover': {
                background: "white",
            },
            [theme.breakpoints.down("sm")]:{
                height:"35px",
            },
            borderColor:theme.palette.primary.main,
        },
        playIcon:{
            height:"20px",
            marginRight:"0.4rem",
        },
        icons:{
            [theme.breakpoints.down("sm")]:{
                padding:"0.2rem",
                "& img":{
                    height:"20px",
                    width:"20px",
                    padding:"10px",
                }
            },
            [theme.breakpoints.down("xs")]:{
                padding:"0.2rem",
                "& img":{
                    height:"15px",
                    width:"15px",
                    padding:"7px",
                }
            }
        }
        
    }
});

function Action(props){
    const classes = useStyles();
    return (
        <div className={classes.container} style={{
            backgroundColor: props.isOdd ? light : xlight
        }}>
            <Grid container>
                <Grid item xs={8} >
                <div className={classes.actionDesc}>
                    <p className={classes.actionTitle}>Title of Action</p>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor inci
                    </span>
                </div>
                </Grid>
                <Grid item xs={2}>
                <IconButton className={classes.icons}>
                        <img  src={info} />
                    </IconButton>
                    <IconButton className={classes.icons}>
                    <img src={edit} />
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.run}>
                        <img className={classes.playIcon} src={play} />
                        Run Action
                    </Button>
                </Grid>
            </Grid>
            
            
        </div>
    );
}

export default Action;