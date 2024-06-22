import { Box } from '@mui/material';
import Hamburger from 'hamburger-react';

import { Link } from 'react-router-dom';
import HeaderMenu from './header-menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/store';
import { setIsHamburgerIconOpen, setIsMenuOpen } from '../../../../state/header/header-slice';

function Header() {
    const isHamburgerIconOpen: boolean = useSelector((state: RootState) => state.header.isHamburgerIconOpen);
    const isMenuOpen: boolean = useSelector((state: RootState) => state.header.isMenuOpen);

    const dispatch = useDispatch();

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
            sx={{ height: { xs: '44px', xl: '64px' } }}
        >
            {/* Ksahlos Logo */}
            <Box flex={1} zIndex={100}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
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
            <Box onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))} position='absolute' right={0} zIndex={100}>
                {/* Hamburger Menu */}
                <Hamburger
                    size={22}
                    toggle={() => dispatch(setIsHamburgerIconOpen(!isHamburgerIconOpen))}
                    toggled={isHamburgerIconOpen}
                />
            </Box>
            {/* Header Navigation Menu */}
            {isMenuOpen && <HeaderMenu />}
        </Box>
    );
}

export default Header;
