import {createTheme} from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {

            main: '#981331',

        },
        secondary: {
            main: "#2D2B2C",
        },

    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(',')
    },

    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                color: "secondary",
                variant: "filled",
                fullWidth: true
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            }, styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 6,

                }
            }
        }, MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    color: "#000"
                }
            }
        }, MuiButton: {
            defaultProps: {
                variant: "contained",

            }
        },

    }


});