import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import ProfileImage from '../../components/contact/profile-image';
import SectionTitle from '../../components/shared/section-title';

function AboutSection() {
    return (
        <Element name='about'>
            <Container maxWidth='xl'>
                <Box pt={{ lg: 3, xl: 5 }}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
                        gap={2}
                        mb={4}
                    >
                        <Box width={{ lg: '60%', xl: '50%' }}>
                            <ProfileImage />
                        </Box>
                        <Box width='100%' px={2}>
                            <Stack gap={4}>
                                <Box>
                                    <SectionTitle title='The Journey' />
                                    <Divider flexItem />
                                    <Typography align='justify' my={1}>
                                        I do not capture what I see, but instead what I would like to see
                                    </Typography>
                                </Box>
                                <Box>
                                    <Stack direction='column'>
                                        <SectionTitle title='The Artwork' />
                                        <Divider flexItem />
                                        <Stack gap={1}>
                                            <Typography align='justify' mt={1}>
                                                - The final prints are produced in-house using pigment ink Canon and
                                                Epson photo printers
                                            </Typography>
                                            <Typography align='justify'>
                                                - The printed material used is 100% cotton museum quality canvas and
                                                paper
                                            </Typography>
                                            <Typography align='justify'>- Available sizes are A4 to A0</Typography>
                                            <Typography align='justify'>
                                                - All artwork comes with Certificate of Authenticity
                                            </Typography>
                                            <Typography align='justify'>
                                                - All artwork is signed by the artist and shipped in paper tube
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Element>
    );
}

export default AboutSection;
