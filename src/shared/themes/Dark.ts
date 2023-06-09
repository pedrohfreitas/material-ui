import { createTheme } from "@mui/material";
import { green, purple,  } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: purple[600],
            dark: purple[700],
            light: purple[500],
            contrastText: "#fff"
        },
        secondary: {
            main: green[500],
            contrastText: "#ffffff",
        },
        background: {
            default: "#303134",
            paper: "#202124"
        }
    }

});