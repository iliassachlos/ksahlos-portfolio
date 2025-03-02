import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { navigationData } from '../../../../data/header-data';
import { HeaderCategoriesEnum, IHeaderData } from '../../../../interfaces/global.interface';
import { useDispatch } from 'react-redux';
import { setIsHamburgerIconOpen, setIsMenuOpen } from '../../../../state/header/header-slice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

function HeaderMenu() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [activeSubMenu, setActiveSubMenu] = useState<IHeaderData | null>(null);
    const [activeSubMenuKey, setActiveSubMenuKey] = useState<string | null>(null);

    const dispatch = useDispatch();
    const generalMenus = navigationData.filter(
        (navigationData: IHeaderData) => navigationData.category === HeaderCategoriesEnum.GENERAL
    );
    const galleryMenus = navigationData.filter(
        (navigationData: IHeaderData) => navigationData.category === HeaderCategoriesEnum.GALLERY
    );

    function menuItemClickHandler(menuItem: IHeaderData) {
        if (menuItem.submenu) {
            setIsSubMenuOpen(!isSubMenuOpen);
            setActiveSubMenu(menuItem);
            setActiveSubMenuKey(menuItem.title);
        }
    }

    function linkClickHandler() {
        dispatch(setIsMenuOpen(false));
        dispatch(setIsHamburgerIconOpen(false));
    }

    console.log('generalMenus', generalMenus);
    console.log('galleryMenus', galleryMenus);

    return (
        <Box
            position='absolute'
            top={0}
            left={0}
            height='100vh'
            zIndex={90}
            width='100%'
            bgcolor='rgba(255,255,255,0.8)'
            overflow='hidden'
            sx={{ backdropFilter: 'blur(16px)' }}
        >
            <Container maxWidth='lg'>
                <Stack
                    direction='column'
                    my={10}
                    px={2}
                    gap={1}
                    data-aos='fade-down'
                    data-aos-duration='400'
                    data-aos-once='true'
                >
                    <Typography align='left' fontSize={32} fontWeight={600}>
                        General
                    </Typography>
                    <Divider orientation='horizontal' />
                    <Grid container spacing={2}>
                        {generalMenus.map((menu: IHeaderData) => (
                            <Grid item xs={12} sm={6} md={2} lg={4}>
                                <Link
                                    to={menu.url}
                                    onClick={linkClickHandler}
                                    style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                                >
                                    <Typography
                                        key={`menu-${menu.title}`}
                                        fontSize='20px'
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                                color: red[600],
                                                transform: 'scale(1.05)',
                                                transition: 'transform 0.2s ease-in, color 0.2s ease-in',
                                            },
                                        }}
                                    >
                                        {menu.title}
                                    </Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
                <Stack
                    direction='column'
                    px={2}
                    gap={1}
                    data-aos='fade-down'
                    data-aos-duration='400'
                    data-aos-delay='200'
                    data-aos-once='true'
                >
                    <Typography align='left' fontSize={32} fontWeight={600}>
                        Gallery
                    </Typography>
                    <Divider orientation='horizontal' />
                    <Grid container spacing={2}>
                        {galleryMenus.map((menu: IHeaderData) => (
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Link
                                    to={menu.url}
                                    onClick={linkClickHandler}
                                    style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                                >
                                    <Typography
                                        key={`menu-${menu.title}`}
                                        fontSize='20px'
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                                color: red[600],
                                                transform: 'scale(1.05)',
                                                transition: 'transform 0.2s ease-in, color 0.2s ease-in',
                                            },
                                        }}
                                    >
                                        {menu.title}
                                    </Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}

export default HeaderMenu;
