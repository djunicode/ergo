import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const useStyles=makeStyles(theme=>({
    root: {
        minWidth: 275,
        maxWidth:'301px',
        border:'10px solid #79B8D1',
        borderRadius:'8px',
        marginTop:'5px',
        maxHeight:'159px',
        filter:'drop-shadow(0px 15px 60px rgba(0, 0, 0, 0.1))',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#f2f2f2'
      },

    Maintitle:{
        marginTop:'30px',
        marginLeft:'30px',
        fontWeight:'bold',
        color:'rgba(0, 0, 0, 0.7)'
    },
    line:{
        backgroundColor:'rgba(227, 100, 136, 0.4)',
        width:'95%',
        align:'center'
    },
    title: {
        fontSize:20,
      },
     IconbuttonMargin:{
          marginLeft:'35%',
          marginTop:'15px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
      },
      InnerTitle:{
          fontSize:'18px',
          fontWeight:'bold',
          textAlign:'center',   
          marginTop:'-10%'
      }
}));


export default function AddProject() {
    const classes=useStyles();
    const iconStyle={
        fontSize:50,
        color:'#79B8D1'
    }
    return (
        <div>
            <Typography variant="h5" className={classes.Maintitle}>
                   Add Projects
            </Typography>
            <hr className={classes.line}/>
            <Grid container spacing={4} style={{marginLeft:'30px'}}>
                <Grid item xs={12} sm={6} md={3}>
                  
                    <Card variant="outlined" className={classes.root}>
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin} onClick={()=>console.log('something clicked')}>
                                <AddIcon style={iconStyle}/>         
                            </IconButton>
                        </CardActions>
                        <CardContent className={classes.title}>
                                <Typography className={classes.InnerTitle} >
                                        Add new Project
                                </Typography>   
                        </CardContent>                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined" className={classes.root}>
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin}>
                                    <ImportExportIcon style={iconStyle}/>
                            </IconButton>
                        </CardActions>
                        <CardContent className={classes.title}>
                            <Typography className={classes.InnerTitle}>
                                Import Project
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Card variant="outlined" className={classes.root} style={{marginRight:'10px'}}>
                        <CardActions>
                            <IconButton className={classes.IconbuttonMargin}>
                                <AddIcon style={iconStyle}/>
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
