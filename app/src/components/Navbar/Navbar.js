import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputBase from "@material-ui/core/InputBase";
import ergoIcon from "../../icons/ergoIcon.png";
import { useStyles } from "./NavbarStyles";

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // changing the background color of the appbar
  const AppBarStyle = {
    color: "black",
    backgroundColor: "#FF8761",
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={AppBarStyle}>
        <Toolbar>
          <div>
            <img
              src={ergoIcon}
              style={{ height: "40px", marginLeft: "30px" }}
            />
          </div>
          <Typography className={classes.title}>Ergo</Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <IconButton onClick={() => console.log("clicked")}>
                <SearchIcon style={{ color: "white" }} />
              </IconButton>
            </div>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
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
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */}
      {/* For Options on clicking the profile*/}
    </div>
  );
}
