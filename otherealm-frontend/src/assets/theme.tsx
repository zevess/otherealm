import { createTheme } from '@mui/material/styles'
export const layoutTheme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
        allVariants: {
            color: 'black'
        }
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: "black",
                        backgroundColor: "#f0f0f0",
                        
                        "&:hover": {
                            color: "black",
                            backgroundColor: "#f0f0f0",
                        },
                    },
                    "&:hover": {
                        color: "black",
                        backgroundColor: "#f9f9f9",
                    },
                    fontFamily: 'Comfortaa',
                    backgroundColor: 'white',
                    color: 'black',
                    width: '500px',
                    height: '110px',
                    fontSize: '20px',
                }
            }
        },
        
    }
})