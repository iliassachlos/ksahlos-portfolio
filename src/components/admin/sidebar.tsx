import { Box, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MuseumIcon from '@mui/icons-material/Museum';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../state/admin/admin-slice';
import { RootState } from '../../state/store';

function Sidebar() {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.admin.selectedCategory);

    return (
        <Stack direction='column' spacing={2} sx={{ p: 2 }}>
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'photos' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': { bgcolor: grey[300] },
                }}
                onClick={() => dispatch(setSelectedCategory('photos'))}
            >
                <InsertPhotoIcon sx={{ mr: 1, mb: '2px' }} />
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
                    '&:hover': { bgcolor: grey[300] },
                }}
                onClick={() => dispatch(setSelectedCategory('exhibits'))}
            >
                <MuseumIcon sx={{ mr: 1, mb: '2px' }} />
                <Typography variant='subtitle1'>Exhibits</Typography>
            </Box>
            {/* Add more sidebar items as needed */}
        </Stack>
    );
}

export default Sidebar;
