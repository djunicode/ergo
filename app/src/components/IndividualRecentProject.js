import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
const useStyles=makeStyles(theme=>({
    root:{
        border:'2px solid #F4976C',
        marginTop:'30px',
        marginBottom:'10px',
        borderRadius:'10px',
        filter:'drop-shadow(0px 15px 60px rgba(0, 0, 0, 0.1))',
        width:'350px',
    },
    cardTitle:{
        fontWeight:'bold',
        textAlign:'center'
    },
    desc:{
        marginTop:'10px',
        marginBottom:'10px'
    },
    InnerCard:{
        color:'#F4976C',
        border:'1px solid #F4976C',
        textAlign:'center'
    },
    cardAction:{
        maxHeight:'15px',
        height:'43px',
        color:'white',
        backgroundColor:'#F4976C',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
}))
function IndividualRecentProject({project}) {
    const classes=useStyles();
    return (
     <Grid item xs={12} md={4} sm={6} >
         <Card className={classes.root}>
            <CardContent>
                 <Typography className={classes.cardTitle}>
                       {project.title}     
                </Typography>  
                <div className={classes.desc}>
                    {project.desc}
                </div>
                <Grid container spacing={1}>
                   {project.techStack.map(tech=>{
                       return(
                           <Grid item md={3}>
                               <Card className={classes.InnerCard}>
                                   {tech}
                               </Card>
                            </Grid>   
                       )
                   })}
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                 <Typography style={{fontWeight:'bold'}}>
                     Actions
                 </Typography>
            </CardActions>
         </Card>
     </Grid> 
    )
}

export default IndividualRecentProject
