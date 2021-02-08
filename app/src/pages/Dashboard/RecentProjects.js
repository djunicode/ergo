import React from 'react'
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IndividualRecentProject from './IndividualRecentProject';
import Grid from "@material-ui/core/Grid";
// Demo data for now
const demoData=[
    {
        id:1,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    },
    {
        id:2,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    },
    {
        id:3,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    },
    {
        id:4,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    },
    {
        id:5,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    },
    {
        id:6,
        title:"E-commerce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris rum",
        techStack:["ReactJS","NodeJS","CSS"]
    }
]

// useStyles hooks
const useStyles=makeStyles(theme=>({
    Maintitle:{
        marginTop:'30px',
        marginLeft:'50px',
        fontWeight:'bold',
        color:'rgba(0, 0, 0, 0.7)',
        fontSize:'25px'
    },
    line:{
        backgroundColor:'rgba(227, 100, 136, 0.4)',
        // width:'95%',
        // align:'center',
        width:'1440px',
        marginLeft:'49px',
        marginRight:'49px'
    },

}));


export default function RecentProjects() {
    const [recentProject,setRecentProject]=useState(demoData);
    const classes=useStyles();
    console.log(recentProject)
    return (
        <div style={{width:'100%'}}>
            <Typography variant="h5" className={classes.Maintitle}>
                 Recent Projects
            </Typography>
            <hr className={classes.line}/>
            <Grid container  style={{marginLeft:'30px'}}>
                {recentProject.map(p=><IndividualRecentProject project={p} key={p.id}/>)}
            </Grid>
        </div>
    )
}
