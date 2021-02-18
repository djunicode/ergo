import React from "react";
import Action from "./Action";
import { makeStyles} from "@material-ui/core";
const useStyles = makeStyles(theme=>({
    actionsPane:{
        border:"2px solid",
        borderColor:theme.palette.secondary.main,
        borderRadius:"15px",
        width:"86%",
        margin:"2rem auto 1rem auto",
    },
    underline:{
        border: "none",
        backgroundColor: theme.palette.secondary.main,
        height: "2px",
        marginBottom:"0",
    },
    title: {
        ...theme.typography.h3,
        paddingLeft:"1.5rem",
        marginBottom:"10px",
    }
}));

function Actions(){
    const classes = useStyles();
    return (
        <div className={classes.actionsPane}>
            <h3 className={classes.title}>Actions</h3>
            <hr className={classes.underline}/>
            {[1,2,3,4].map(p=>{
                let isOdd = p%2==1 ? true : false;
                return <Action key={p} isOdd={isOdd} />
            })}
        </div>  
    );
}   
export default Actions;