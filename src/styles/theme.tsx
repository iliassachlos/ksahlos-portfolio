import { Theme, createTheme } from '@mui/material';

export const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#000000',
        },
        background: {
            default: '#F2F2F2',
        },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
});
