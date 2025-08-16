import { Link, useLocation, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Header() {
    const location = useLocation();

    const category = location.pathname.startsWith('/collections/')
        ? location.pathname.split('/collections/')[1]?.split('/')[0]
        : undefined;
    const isHomepage: boolean = location.pathname === '/';
    const logo: string =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Fksahlos-logo.png?alt=media&token=6edd23bd-e9d1-4972-a604-aed946d443b7';

console.log('category', category)
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
                                border: '1px solid black',
                                py: 0.5,
                                px: 1,
                                '&:hover': {
                                    cursor: 'pointer',
                                    backgroundColor: 'lightgray',
                                    transition: '0.3s ease-in',
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
             <Box flex={1} zIndex={100} display='flex' alignItems='center' justifyContent="flex-end">
                {category && (
                    <Typography
                    variant='body2'
                    sx={{
                        color: 'black',
                        border: '1px solid black',
                        py: 0.5,
                        px: 1,
                        cursor: 'default'
                    }}
                    >
                   {category
                    ? decodeURIComponent(category.charAt(0).toUpperCase() + category.slice(1))
                    : ''}
                    </Typography>
                )}
                </Box>
        </Box>
    );
}

export default Header;
