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
            bgcolor='white'
            sx={{ height: { xs: '44px', xl: '64px' } }}
        >
            <Box display='flex' position='absolute' alignItems='center' sx={{ left: { xs: 0, md: 35, xl: 50 } }}>
                <SocialMediaBox />
            </Box>

            <Stack direction='row' alignItems='center' justifyContent='center' width='100%'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontWeight={500} align='center' sx={{ fontSize: { xs: '9px', md: '10px' } }}>
                        © {currentYear} Konstantinos Sahlos. All Rights Reserved
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default Footer;
