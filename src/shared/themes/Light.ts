import { createTheme } from "@mui/material";
import { green, grey, purple,  } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: purple[600],
            dark: purple[700],
            light: purple[500],
            contrastText: '#fff'
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: grey[400],
            paper: '#fffff'
        }
    }

});