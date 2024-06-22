import { Box } from '@mui/material';

function LeftBorder() {
    return (
        <Box
            bgcolor='white'
            sx={{
                width: { xs: 0, md: '44px', xl: '60px' },
                flexShrink: 0, // Ensure it doesn't shrink when screen size changes
                zIndex: 80,
                position: 'fixed', // Keep it fixed on the left side
                top: 0,
                bottom: 0,
            }}
        />
    );
}

export default LeftBorder;
