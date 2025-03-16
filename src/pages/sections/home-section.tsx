import { Box, Container, Stack, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { homepagePhoto } from '../../constants/constants';
import { Element } from 'react-scroll';
import SectionTitle from '../../components/shared/section-title';

function HomeSection() {
    return (
        <Element name='home'>
            <Box bgcolor='white'>
                <Container maxWidth='xl'>
                    <Box
                        position='relative'
                        width='100%'
                        display='flex'
                        justifyContent='start'
                        alignItems='center'
                        flexDirection='column'
                        borderRadius='4px'
                    >
                        <Box
                            component='img'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            width={{ xs: '100%', lg: '90%', xl: '100%' }}
                            height={{ xs: '100%', lg: '70vh', xl: '80vh' }}
                            borderRadius={1}
                            mt={1}
                            sx={{ objectFit: 'cover' }}
                            src={homepagePhoto}
                        />
                        <Box
                            position='absolute'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ inset: 0 }}
                            mb={{ xs: 15, lg: 15 }}
                        >
                            <Stack direction='column' spacing={1}>
                                <Typography variant='h1' fontSize={25} fontWeight={500} data-aos='zoom-in-up'>
                                    Fine - Art Photography
                                </Typography>
                                <Box
                                    textAlign='center'
                                    fontStyle='italic'
                                    fontWeight={500}
                                    fontSize={12}
                                    data-aos='zoom-in-up'
                                    data-aos-delay='100'
                                >
                                    <TypeAnimation
                                        sequence={['Timeless steps beyond reality']}
                                        speed={30}
                                        cursor={false}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                        <Box width='100%' my={4}>
                            <Container maxWidth='md'>
                                <Stack justifyContent='center' alignItems='center' gap={1}>
                                    <SectionTitle title='Welcome to my world' fontSize={24} />
                                    <Typography variant='body1' textAlign='center'>
                                        Specializing in visual artwork influenced by abstract, minimalist and
                                        impressionist styles, created using in camera and post processing techniques.
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Element>
    );
}

export default HomeSection;
