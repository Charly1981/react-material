import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import { Icon, Button, IconButton, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div>
      {/* <Button variant="contained" color="secondary">
        color
      </Button>
      <Button variant="text" color="inherit">
        color
      </Button>
      <Button variant="contained" color="primary">
        color
      </Button>
      <Button variant="outlined" color="primary">
        color
      </Button>
      <p>lorem</p>
      <Button variant="contained" color="primary" href="https://google.com">
        color
      </Button>
      <Button variant="contained" color="primary" fullWidth>
        color
      </Button>
      <Button variant="contained" color="primary" size="small">
        color
      </Button>
      <Button variant="contained" color="primary" size="medium">
        color
      </Button>
      <Button variant="contained" color="primary" size="large">
        color
      </Button> */}
      <DeleteIcon color="primary" />

      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<Icon>room</Icon>}>
        Ubicacion
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon color="primary" />
      </IconButton>

      <Typography variant="h1" color="secondary">
        letras
      </Typography>
      <Typography variant="body1" color="secondary" align="center" gutterBottom>
        lorem
      </Typography>
      <Typography variant="body1" color="primary" align="center">
        lorem
      </Typography>
    </div>
  );
};

export default App;
