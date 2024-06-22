import { Theme, createTheme } from '@mui/material';

export const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: '#F2F2F2',
        },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
});
