import { Box, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HomeIcon from '@mui/icons-material/Home';
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
                bgcolor={selectedCategory === 'home' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': { bgcolor: grey[300] },
                }}
                onClick={() => dispatch(setSelectedCategory('home'))}
            >
                <HomeIcon sx={{ mr: 1, mb: '2px' }} />
                <Typography variant='subtitle1'>Home</Typography>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'add' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': { bgcolor: grey[300] },
                }}
                onClick={() => dispatch(setSelectedCategory('add'))}
            >
                <AddAPhotoIcon sx={{ mr: 1, mb: '2px' }} />
                <Typography variant='subtitle1'>Add Photo</Typography>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                bgcolor={selectedCategory === 'edit' ? blue[100] : ''}
                borderRadius='4px'
                p={1}
                sx={{
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease-in-out',
                    '&:hover': { bgcolor: grey[300] },
                }}
                onClick={() => dispatch(setSelectedCategory('edit'))}
            >
                <InsertPhotoIcon sx={{ mr: 1, mb: '2px' }} />
                <Typography variant='subtitle1'>Photos</Typography>
            </Box>
            {/* Add more sidebar items as needed */}
        </Stack>
    );
}

export default Sidebar;
