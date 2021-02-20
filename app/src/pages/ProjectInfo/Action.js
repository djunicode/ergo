import React, { useState } from "react";
import {Grid, IconButton, makeStyles,Button,useMediaQuery,Collapse} from "@material-ui/core";
import info from "../../icons/info.svg";
import edit from "../../icons/edit.svg";
import play from "../../icons/run.svg";
let light,xlight;
const useStyles = makeStyles(theme=>{
    light = theme.palette.secondary.light;
    xlight = theme.palette.secondary.xlight;
    return {
        container:{
            backgroundColor:theme.palette.secondary.main,
            verticalAlign: "middle",
            lineHeight: "60px",
            ...theme.typography.p,
            fontSize:13,
            "&:hover":{
                cursor:"pointer",
            }
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
            height:"43px",
            margin:"10px auto",
            border:"1px solid",
            backgroundColor:"white",
            "&:hover": {
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
            [theme.breakpoints.down("810px")]:{
                margin:"auto",
                
            },
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
        },
        expandedInfo:{
            ...theme.typography.pTitle,
            fontSize:16,
            paddingLeft:"1rem",
            lineHeight:"1.5rem",
            width:"80%",
            marginBottom:"1rem",
        },
        actionTitleExpanded:{
            ...theme.typography.pTitle,
            fontWeight:"600",
            paddingLeft:"0.5rem",
            paddingTop:"1rem",
            margin:"0",
            lineHeight:"100%",
        },
    }
});

function Action({ shown, isOdd, collapseHandler, index}){
    const classes = useStyles();
    const runText = useMediaQuery("(max-width:810px)") ? "" : "Run Action"
    const actionInfo = shown ? null: (
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </span>
    );
    const titleClass = shown ? classes.actionTitleExpanded : classes.actionTitle;
    const actionClickHandler = () => {
        if(!shown) collapseHandler(index);
        else collapseHandler(null);
    }
    return (
        <div className={classes.container} style={{
            backgroundColor: isOdd ? light : xlight,
            lineHeight: shown ? "40px":"60px",
        }} >
            <Grid container >
                <Grid item xs={8} onClick={actionClickHandler}>
                <div className={classes.actionDesc} >
                    <p className={titleClass}>Title of Action</p>
                    {actionInfo}
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
                <Grid item xs={2} >
                    <Button className={classes.run}>
                        <img className={classes.playIcon} src={play} />
                        {runText}
                    </Button>
                </Grid>
                <Grid item xs={12} style={{ display: shown ? "block" : "none" }}>
                    <Collapse in={shown}>
                        <div onClick={actionClickHandler} className={classes.expandedInfo}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam
                        </div>
                    </Collapse>
                </Grid>
            </Grid>
        </div>
    );
}

export default Action;