import { Box, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue, purple } from '@mui/material/colors';

function SocialMediaBox() {
    return (
        <Stack direction='row'>
            <IconButton
                disableRipple
                color='secondary'
                sx={{
                    '&:hover': {
                        color: blue[500],
                        transform: 'scale(1.10)',
                        transition: 'transform 0.2s ease-in, color 0.2s ease-in',
                    },
                }}
            >
                <FacebookIcon/>
            </IconButton>
            <IconButton
                disableRipple
                color='secondary'
                sx={{
                    '&:hover': {
                        color: purple[500],
                        transform: 'scale(1.10)',
                        transition: 'transform 0.2s ease-in, color 0.2s ease-in',
                    },
                }}
            >
                <InstagramIcon />
            </IconButton>
        </Stack>
    );
}

export default SocialMediaBox;
