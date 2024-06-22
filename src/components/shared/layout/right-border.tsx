import { Box } from '@mui/material';

function RightBorder() {
    return (
        <Box
            sx={{
                width: { xs: 0, md: '44px', xl: '60px' },
                flexShrink: 0,
                zIndex: 80,
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                bgcolor: 'white',
            }}
        />
    );
}

export default RightBorder;