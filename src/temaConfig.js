import { createMuiTheme } from "@material-ui/core/styles";
import { purple, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[700],
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;
