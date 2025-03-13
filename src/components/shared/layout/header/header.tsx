import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Header() {
    const location = useLocation();

    const isHomepage: boolean = location.pathname === '/';
    const logo: string =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Fksahlos-logo.png?alt=media&token=6edd23bd-e9d1-4972-a604-aed946d443b7';

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            bgcolor='white'
            position='relative'
            width='100%'
            zIndex={100}
            sx={{ height: { xs: '44px', xl: '64px' }, paddingX: '16px' }}
        >
            {!isHomepage && (
                <Box position='absolute' left={0} zIndex={100}>
                    <Link to='/'>
                        <KeyboardBackspaceIcon />
                    </Link>
                </Box>
            )}

            {/* Ksahlos Logo */}
            <Box flex={1} zIndex={100} display='flex' justifyContent='center'>
                <Box
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.3s ease-in, color 0.3s ease-in',
                        },
                    }}
                >
                    <Link to='/'>
                        <img src={logo} alt='logo' loading='lazy' style={{ width: '350px', height: 'auto' }} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
