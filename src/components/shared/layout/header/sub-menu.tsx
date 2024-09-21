import { Box, Stack, Typography } from '@mui/material';
import { IHeaderData } from '../../../../interfaces/global.interface';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsHamburgerIconOpen, setIsMenuOpen } from '../../../../state/header/header-slice';
import { red } from '@mui/material/colors';
import { motion } from 'framer-motion';

interface ISubMenuProps {
    subMenuItems: IHeaderData[];
}

function SubMenu({ subMenuItems }: ISubMenuProps) {
    const dispatch = useDispatch();

    function linkClickHandler() {
        dispatch(setIsHamburgerIconOpen(false));
        dispatch(setIsMenuOpen(false));
    }

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className=' pt-1 px-10'
        >
            <Box pt={1} px={10}>
                <Stack direction='column' spacing='8px'>
                    {subMenuItems.map((subMenuItem: IHeaderData) => (
                        <Link
                            key={subMenuItem.title}
                            to={subMenuItem.url!}
                            onClick={linkClickHandler}
                            style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                        >
                            <Box
                                sx={{
                                    '&:hover': {
                                        color: red[400],
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s ease-in, color 0.3s ease-in',
                                    },
                                }}
                            >
                                <Typography fontSize={14}>{subMenuItem.title}</Typography>
                            </Box>
                        </Link>
                    ))}
                </Stack>
            </Box>
        </motion.div>
    );
}

export default SubMenu;
