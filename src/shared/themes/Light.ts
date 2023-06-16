import { createTheme } from "@mui/material";
import { green, purple,  } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            dark: purple[600],
            light: purple[500],
            contrastText: "#ffffff"
        },
        secondary: {
            main: green[300],
            dark: green[600],
            light: green[500],
            contrastText: "#ffffff",
        },
        background: {
            paper: "#ffffff",
            default: "#f7f6f3",
        }
    }

});