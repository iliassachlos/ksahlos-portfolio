import { Box, Container, Stack, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
    const homepagePhoto: string =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Fswan.jpg?alt=media&token=28b0d3c2-a291-4a03-a985-787a520cd61d';
    return (
        <Box position='relative' zIndex={-1} width='100%' height='100%'>
            <img
                style={{ objectFit: 'cover', width: '100%', height: '90vh' }}
                src={homepagePhoto}
                alt='homepage-photo'
                loading='eager'
            />
            <Container>
                <Box position='absolute' display='flex' justifyContent='center' alignItems='center' sx={{ inset: 0 }}>
                    <Stack direction='column' mb={6} spacing={1}>
                        <Typography variant='h1' fontSize={25} color='white' fontWeight={500}>
                            Fine - Art Photography
                        </Typography>
                        <Box textAlign='center' fontStyle='italic' color='white' fontSize={12} fontWeight={500}>
                            <TypeAnimation sequence={['Timeless steps beyond reality']} speed={30} cursor={false} />
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default HomePage;
