import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/admin/sidebar';

function AdminpanelPage() {

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: 250, borderRight: '1px solid #ccc', height: '100vh' }}>
                <Sidebar />
            </Box>
            <Box sx={{ flex: 1, p: 3 }}>
                <Stack direction='column' spacing={2}>
                    <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <Typography variant="h5">Welcome to Admin Panel</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default AdminpanelPage;
