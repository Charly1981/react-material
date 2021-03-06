import React from "react";
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig.js";
import Contenedor from "./components/Contenedor.jsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
};

export default App;
