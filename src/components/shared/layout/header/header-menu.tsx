// src/components/shared/layout/header/header-menu.tsx
import { Box, Stack, Typography } from '@mui/material';
import { navigationData } from '../../../../data/header-data';
import { IHeaderData } from '../../../../interfaces/global.interface';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsHamburgerIconOpen, setIsMenuOpen } from '../../../../state/header/header-slice';
import { useState } from 'react';
import SubMenu from './sub-menu';
import { red } from '@mui/material/colors';

function HeaderMenu() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [activeSubMenu, setActiveSubMenu] = useState<IHeaderData | null>(null);
    const [activeSubMenuKey, setActiveSubMenuKey] = useState<string | null>(null);

    const dispatch = useDispatch();

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

    return (
        <Box
            position='absolute'
            top={0}
            left={0}
            height='100vh'
            zIndex={90}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='100%'
            bgcolor='rgba(255,255,255,0.8)'
            overflow='hidden'
            sx={{ backdropFilter: 'blur(16px)' }}
        >
            <Box justifyContent='center' alignItems='center' textAlign='center'>
                {navigationData.map((item) => (
                    <Stack key={item.title} direction='column' my={2}>
                        {item.submenu ? (
                            <Box
                                onClick={() => menuItemClickHandler(item)}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer',
                                        color: red[600],
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.2s ease-in, color 0.2s ease-in',
                                    },
                                }}
                            >
                                <Typography fontSize='20px'>{item.title}</Typography>
                            </Box>
                        ) : (
                            <Link
                                to={item.url!}
                                onClick={linkClickHandler}
                                style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                            >
                                <Typography
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
                                    {item.title}
                                </Typography>
                            </Link>
                        )}
                        {isSubMenuOpen && activeSubMenu && activeSubMenuKey === item.title && (
                            <SubMenu subMenuItems={item.submenu!} />
                        )}
                    </Stack>
                ))}
            </Box>
        </Box>
    );
}

export default HeaderMenu;
