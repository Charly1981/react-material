import React from "react";
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="secondary">
        button
      </Button>
      <Button variant="contained" color="primary">
        button
      </Button>
    </ThemeProvider>
  );
};

export default App;
