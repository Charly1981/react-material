import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => props.desplegar()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Nuestro Sitio
        </Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
