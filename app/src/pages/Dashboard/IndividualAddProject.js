import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Chip from "@material-ui/core/Chip";

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


const dummy  = [
  {key:"1", item:"item 1"},
  {key:"2", item:"item 2"},
  {key:"3", item:"item 3"},
  {key:"4", item:"item 4"},
  {key:"5", item:"item 5"},
  {key:"6", item:"item 6"},
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "18.8rem",
    border: "0.62rem solid #79B8D1",
    borderRadius: "0.5rem",
    marginTop: "2.82rem",
    filter: "drop-shadow(0rem 0.94rem 3.75rem rgba(0, 0, 0, 0.1))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    width: 277,
    height: 159,
    [theme.breakpoints.between("sm", "md")]: {
      // width:'150px',
      // height:'150px',
      marginRight: "-10%",
    },
  },
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  templateControl: {
    minWidth: 522,
  },

  input: {
    padding:"0px",
    maxHeight: 50
  },

  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  templateControl: {
    minWidth: 522,
  },

  input: {
    padding:"0px",
    maxHeight: 50
  },

  title: {
    fontSize: 20,
  },
  IconbuttonMargin: {
    marginLeft: "35%",
    marginTop: "2.8rem",
    marginBottom: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  InnerTitle: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "-10%",
    marginBottom: "2.7rem",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


export default function IndividualAddProject({ project }) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [state, setState] = React.useState([]);

  const [template, setTemplate] = useState([]);



  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  console.log(state)
  
  const key = project.id



  return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card key={project.id} variant="outlined" className={classes.root}>
        <CardActions>
          <IconButton onClick={handleClickOpen} className={classes.IconbuttonMargin}>
            {/* onClick={() => console.log("something clicked")} */}
            <img src={project.logo} alt="logo" />
          </IconButton>
        </CardActions>
        <CardContent className={classes.title}>
          <Typography className={classes.InnerTitle}>
            {project.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Dialog style={{width:"100%"}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

        <DialogTitle id="customized-dialog-title" style={{paddingLeft:"30px"}} onClose={handleClose}>
          {project.title}
        </DialogTitle>

        <DialogContent dividers style={{padding:"10px"}}>

          <form style={{margin:"12px 20px"}}>

            <div>
              <p style={{marginTop:"10px", marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>
               {( project.id === 3 ) ? "Template" : "Project"}
              </p>
              <input placeholder="Enter project name" 
                style={{padding:"15px 5px",
                        border:"1px solid #404040",
                        borderRadius:"3px",
                        width:"40%",
                        height:"20px"}} 
              />
            </div>

            <div>
              { ( project.id !==  3 ) ? 
              (
                <div>
                  <p style={{marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>Description</p>
                  <textarea 
                    style={{
                      resize: "none",
                      width: "500px",
                      height: "80px",
                      borderRadius: "8px",
                      padding:"10px",
                      border:"1px solid #404040"
                    }} 
                    placeholder="Enter project name"/>
                  </div>) : "" }
            </div>

            <div>
              { ( project.id ===  3 ) ? 
              (
                <div>
                  <p style={{marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>Add Stack</p>
                  <textarea 
                    style={{
                      resize: "none",
                      width: "500px",
                      height: "80px",
                      borderRadius: "8px",
                      padding:"10px",
                      border:"1px solid #404040"
                    }} 
                    placeholder="Add Stacks"/>
                  </div>) : "" }
            </div>


            <div>
              <section>
                  <p style={{marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>Add Tags</p>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                      native
                      onChange={((e) => {setState(state => [...state,e.target.value])})}
                      className={classes.input}
                    >
                      <option aria-label="None" value="" />
                      {dummy.map(dum => (
                        <option value={dum.item} key={dum.key}>{dum.item}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <section style={{width:"500px",
                                  height:"60px",
                                  border:"1px solid #404040",
                                  borderRadius:"6px",
                                  marginTop:"4px",
                                  padding:"10px"}}
                  >
                    
                    {state.map(sta=>(
                      <Chip label={sta} onDelete={handleDelete} color="primary" variant="outlined" style={{marginRight:"10px", marginBottom:"5px"}} />
                    ))} 
                  
                  </section> 
              </section>
              
             
            </div>

            <div>
            { ( project.id !==  3 ) ? 
              (
              <section>
                <p style={{marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>Select Template</p>
                <FormControl variant="outlined" className={classes.templateControl}>
                    <Select
                      native
                      onChange={((e) => {setTemplate(...e.target.value)})}
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}
                      className={classes.input}
                    >
                      <option aria-label="None" value="" />
                      {dummy.map(dum => (
                        <option value={dum.item} key={dum.key}>{dum.item}</option>
                      ))}
                    </Select>
                  </FormControl>
                </section>) : " "}
            </div>

            <div>
            { ( project.id !==  3 ) ? 
              (
              <section>
                <p style={{marginBottom:"8px",fontSize:"1.2rem", paddingLeft:"4px"}}>Specify Path</p>
                <FormControl variant="outlined" className={classes.templateControl}>
                    <Select
                      native
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}
                      className={classes.input}
                      IconComponent={() => (
                        <ArrowForwardIosRoundedIcon/>
                      )}
                >
                    </Select>
                  </FormControl>
              </section> ) : " "}
              
              
            </div>
          
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save {( project.id === 3 ) ? "Template" : "Project"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

