import { Box, Divider, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MuseumIcon from '@mui/icons-material/Museum';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../state/admin/admin-slice';
import { RootState } from '../../state/store';
import { useAuth } from "../../hooks/use-auth";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { setIsLoggedIn } from "../../state/user/user-slice";

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.admin.selectedCategory);
    const user = useAuth();

    function logOutButtonHandler() {
        if (user) {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    console.log("Logged Out Successfully");
                    dispatch(setIsLoggedIn(false));
                    navigate("/");

                })
                .catch((error: unknown) => {
                    if (error instanceof Error) {
                        console.error("Error Logging Out : ", error);
                    }
                    navigate("/");
                });
        }
    }

    return (
        <Stack direction='column' spacing={2} sx={{p: 2}}>
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'photos' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': {bgcolor: grey[300]},
                }}
                onClick={() => dispatch(setSelectedCategory('photos'))}
            >
                <InsertPhotoIcon sx={{mr: 1, mb: '2px'}} />
                <Typography variant='subtitle1'>Photos</Typography>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'exhibits' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': {bgcolor: grey[300]},
                }}
                onClick={() => dispatch(setSelectedCategory('exhibits'))}
            >
                <MuseumIcon sx={{mr: 1, mb: '2px'}} />
                <Typography variant='subtitle1'>Exhibits</Typography>
            </Box>
            <Divider orientation="horizontal" />
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'exhibits' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': {bgcolor: grey[300]},
                }}
                onClick={() => logOutButtonHandler()}
            >
                <ExitToAppIcon sx={{mr: 1, mb: '2px', color: 'darkred'}} />
                <Typography variant='subtitle1' color="darkred">Log Out</Typography>
            </Box>

        </Stack>
    );
}

export default Sidebar;
