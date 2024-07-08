import { Box, Typography } from "@mui/material";

function HomePanel() {
    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <Typography variant='h5'>Welcome to Admin Panel</Typography>
        </Box>
    );
}

export default HomePanel;
