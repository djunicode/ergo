import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Vector from '../../icons/Vector.png'
import Import from '../../icons/Import.png'
import Template from '../../icons/Template.png'

const useStyles=makeStyles(theme=>({
    root: {
        
        maxWidth:'301px',
        border:'10px solid #79B8D1',
        borderRadius:'8px',
        marginTop:'45px',
        filter:'drop-shadow(0px 15px 60px rgba(0, 0, 0, 0.1))',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#f2f2f2',
         width:277,
         height:159,
        [theme.breakpoints.between('sm','md')]:{
            // width:'150px',
            // height:'150px',
            marginRight:'-10%',    
        }
      },

    Maintitle:{
        marginTop:'30px',
        marginLeft:'77px',
        fontWeight:'bold',
        color:'rgba(0, 0, 0, 0.7)'
    },
    line:{
        backgroundColor:'rgba(227, 100, 136, 0.4)',
        // width:'95%',
        // align:'center',
        width:'1440px',
        marginLeft:'49px',
        marginRight:'49px'
    },
    title: {
        fontSize:20,
       
      },
     IconbuttonMargin:{
          marginLeft:'35%',
          marginTop:'44px',
          marginBottom:'8px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
      },
      InnerTitle:{
          fontSize:'18px',
          fontWeight:'bold',
          textAlign:'center',   
           marginTop:'-10%',
          marginBottom:'43px'
      }
}));


export default function AddProject() {
    const classes=useStyles();
    const iconStyle={
        fontSize:50,
        color:'#79B8D1'
    }
    return (
        <div style={{width:'100%'}}>
            <Typography variant="h5" className={classes.Maintitle}>
                   Add Projects
            </Typography>
            <hr className={classes.line}/>
            <Grid container spacing={3} style={{marginLeft:'30px'}}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  
                    <Card variant="outlined" className={classes.root}>
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin} onClick={()=>console.log('something clicked')}>
                                <img src={Vector}/>       
                            </IconButton>
                        </CardActions>
                        <CardContent className={classes.title}>
                                <Typography className={classes.InnerTitle} >
                                        Add new Project
                                </Typography>   
                        </CardContent>                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card variant="outlined" className={classes.root}>
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin}>
                                    <img src={Import}/>
                            </IconButton>
                        </CardActions>
                        <CardContent className={classes.title}>
                            <Typography className={classes.InnerTitle}>
                                Import Project
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4} >
                    <Card variant="outlined" className={classes.root} >
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin}>
                                <img src={Template} />
                            </IconButton>
                        </CardActions>
                        <CardContent className={classes.title}>
                                <Typography className={classes.InnerTitle}>
                                        Add new Template
                                </Typography>   
                        </CardContent> 
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
