import { Box, Stack, Typography } from '@mui/material';
import SocialMediaBox from './social-media-box';
import { getCurrentYear } from '../../../../utils/get-current-year';

function Footer() {
    const currentYear = getCurrentYear();

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ height: { xs: '44px', xl: '64px' } }}
            bgcolor='white'
            zIndex={90}
        >
            {/* Social Media Icons on the left */}
            <Box display='flex' alignItems='center'>
                <SocialMediaBox />
            </Box>

            <Stack direction='row' alignItems='center' justifyContent='center' width='100%'>
                {/* Centered Text */}
                <Box display='flex' justifyContent='center' alignItems='center' mr={9}>
                    <Typography fontWeight={500} align='center' sx={{ fontSize: { xs: '9px', md: '10px' } }}>
                        © {currentYear} Konstantinos Sahlos. All Rights Reserved
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default Footer;
