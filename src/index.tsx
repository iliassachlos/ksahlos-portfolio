import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/shared/layout/footer/footer';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import LeftBorder from './components/shared/layout/left-border';
import RightBorder from './components/shared/layout/right-border';
import Header from './components/shared/layout/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Box
                        display='flex'
                        flexDirection='column'
                        minHeight='100vh'
                        position='relative' // Ensure relative positioning for borders
                    >
                        <Header />
                        <Box
                            display='flex'
                            flexGrow={1}
                            sx={{
                                position: 'relative', // Ensure relative positioning for main content
                                overflow: 'hidden', // Hide overflow to prevent unnecessary scrollbars
                            }}
                        >
                            <LeftBorder />
                            <Box
                                display='flex'
                                flexDirection='column'
                                flexGrow={1}
                                sx={{
                                    ml: { xs: 0, md: '44px', xl: '60px' },
                                    mr: { xs: 0, md: '44px', xl: '60px' },
                                }}
                            >
                                <App />
                            </Box>
                            <RightBorder />
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 90,
                                mt: { xs: '44px', xl: '64px' }, // Adjust margin-top to clear the borders
                            }}
                        >
                            <Footer />
                        </Box>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
