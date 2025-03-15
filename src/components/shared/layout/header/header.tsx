import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

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
            {!isHomepage ? (
                <Box flex={1} zIndex={100} display='flex' alignItems='center'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography
                            variant='body2'
                            sx={{
                                color: 'black',
                                '&:hover': {
                                    cursor: 'pointer',
                                    color: 'gray',
                                    transition: 'color 0.3s ease-in',
                                },
                            }}
                        >
                            Home
                        </Typography>
                    </Link>
                </Box>
            ) : (
                <Box flex={1} />
            )}
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
                        <Box
                            component='img'
                            src={logo}
                            alt='logo'
                            loading='lazy'
                            sx={{ width: { xs: '350px', xl: '450px' }, height: 'auto' }}
                        />
                    </Link>
                </Box>
            </Box>
            <Box flex={1} />
        </Box>
    );
}

export default Header;
