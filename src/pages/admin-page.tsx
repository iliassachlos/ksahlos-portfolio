import { Box, Stack } from '@mui/material';
import Sidebar from '../components/admin/sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import PhotosPanel from '../components/admin/photos/photos-panel';
import ExhibitsPanel from '../components/admin/exhibits/exhibits-panel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminpanelPage() {
    const selectedCategory = useSelector((state: RootState) => state.admin.selectedCategory);
    const isUserLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/login', { replace: true });
        }
    }, [isUserLoggedIn, navigate]);

    return (
        <Box sx={{ display: 'flex' }} height='100%'>
            <Box width={250} borderRight='1px solid #ccc'>
                <Sidebar />
            </Box>
            <Box flex={1} p={3}>
                <Stack direction='column' spacing={2}>
                    {selectedCategory === 'photos' && <PhotosPanel />}
                    {selectedCategory === 'exhibits' && <ExhibitsPanel />}
                </Stack>
            </Box>
        </Box>
    );
}

export default AdminpanelPage;
