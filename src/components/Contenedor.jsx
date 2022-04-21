import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Nabvar from "./Navbar";
import Cajon from "./Cajon";
import Cajita from "./Cajita";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {
  const [abrir, setAbrir] = React.useState(false);
  const classes = estilos();

  const desplegar = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      <Nabvar desplegar={desplegar} />
      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={desplegar} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Cajita />
      </div>
    </div>
  );
};

export default Contenedor;
