import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputText:{
    width:'500px',
    backgroundColor:'#FFA47A',
    [theme.breakpoints.down('sm')]:{
      width:'250px'
    }
  },
  title: {
    display: 'block',
    
    [theme.breakpoints.up('sm')]: {
      //display: 'block',
      marginRight:'150px',
    },
  },
  search: {
    position: 'relative',
    marginLeft:theme.spacing(1),
    
    marginRight: theme.spacing(2),
    marginLeft: '15px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));

export default function Navbar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

 

  const AppBarStyle={
    color:'black',
    backgroundColor:'#FF8761'
  }   // for changing the default color of the Appbar

  return (
    

    <div className={classes.grow}>
   
      <AppBar position="static" style={AppBarStyle}>
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" noWrap>
            Ergo
          </Typography>

          
          <div className={classes.search}>
            <div className={classes.searchIcon} style={{marginRight:'30px'}}>
              <SearchIcon />
             </div>
            <div style={{marginLeft:'50px'}}>
              <TextField className={classes.inputText}  type="text" id="outlined-basic" label="search...." variant="outlined"  size="small" />
            </div>
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
         
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */ }{/* For Options on clicking the profile*/}
    </div>

    
  );
}
