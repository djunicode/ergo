import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>{
    return  {
        projectTitle: {
            ...theme.typography.h2,
            margin:0,
        },
        projSpecTitle:{
            ...theme.typography.h3,
            margin:0,
        },
        padHeaders:{
            paddingLeft:"1rem",
            paddingRight:"1rem",
        },
        titleSection: {
            margin: "2rem auto 0.2rem auto",
            width: "86%",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            
        },
        description:{
            paddingLeft:"1rem",
            paddingRight:"1rem",
            marginBottom:"2.5rem",
        },
        underline:{
            border: "none",
            backgroundColor: theme.palette.secondary.main,
            height: "1px",
        },
        iconGroup:{
            marginTop:"0.6rem",
        },
        icon: {
            marginRight:"1rem",
            width:"30px",
        },
        tag:{
            marginRight: "0.7rem",
            border:"3px solid",
            borderColor:theme.palette.primary.main,
            borderRadius:"30px",
            color:theme.palette.primary.main,
            width:"80px",
            maxWidth:"120px",
            height:"30px",
            maxHeight:"45px",
            verticalAlign: "middle",
            lineHeight: "30px",
            textAlign:"center",
            marginTop:"1.6rem",
            marginBottom:"1.6rem",
            
        }    
    }
});

export default useStyles;