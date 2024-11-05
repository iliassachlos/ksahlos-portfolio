import { Box, Container, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
    const homepagePhoto: string =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Friver-home.jpeg?alt=media&token=1ff75443-24b2-44fe-9342-735485e1396a';
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
                        <Typography variant='h1' fontSize={25} fontWeight={500} color={grey[700]} data-aos='zoom-in-up'>
                            Fine - Art Photography
                        </Typography>
                        <Box
                            textAlign='center'
                            fontStyle='italic'
                            fontWeight={500}
                            color={grey[600]}
                            fontSize={12}
                            data-aos='zoom-in-up'
                            data-aos-delay='100'
                        >
                            <TypeAnimation sequence={['Timeless steps beyond reality']} speed={30} cursor={false} />
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default HomePage;
