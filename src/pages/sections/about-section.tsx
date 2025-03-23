import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import ProfileImage from '../../components/contact/profile-image';
import SectionTitle from '../../components/shared/section-title';

function AboutSection() {
    return (
        <Element name='about'>
            <Container maxWidth='xl'>
                <Box pt={{ lg: 3, xl: 5 }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' width='100%' gap={2} mb={4}>
                        <Box width={{ lg: '60%', xl: '50%' }}>
                            <ProfileImage />
                        </Box>
                        <Box width='100%' px={2}>
                            <Stack gap={4}>
                                <Box>
                                    <SectionTitle title='My Journey' />
                                    <Divider flexItem sx={{ my: 1 }} />
                                    <Typography align='justify' my={1}>
                                        My name is Konstantinos Sahlos born in Skala Eresos Lesvos island Greece. The
                                        interest, for seascape and nature photography specifically, started in 1977 and
                                        it was then when I got my first professional camera.
                                    </Typography>
                                    <Typography align='justify' my={1}>
                                        The past years, I have been greatly influenced by minimalism, abstract and
                                        impressionism visual art styles. Nowadays, I mostly do not shoot what I see but
                                        instead what I would like to see. Nevertheless, my camera is not being used to
                                        just take photos, but used as a tool to create Fine Art. Printing is performed
                                        by me using pigment ink printers on 100% cotton museum quality paper for a
                                        highest age resistance (archival). All prints are supplied along a Certificate
                                        of Authenticity, and shipped in most places of the world in paper tubes.
                                    </Typography>
                                    <Typography align='justify' my={1}>
                                        Having recently returned to live on Lesvos island, I am honored to have my work
                                        displayed in MYTHOS Gallery (a hometown Gallery) as well as several other
                                        Galleries occasionally, while planning private exhibitions in different cities
                                        to showcase my work.
                                    </Typography>
                                </Box>
                                <Box>
                                    <SectionTitle title='Events / Exhibitions' />
                                    <Divider flexItem sx={{ my: 1 }} />
                                    <Typography align='justify' my={1}>
                                        - PHOTOVISION: October 11-13 2024, Zappeion Hall, Athens
                                    </Typography>
                                    <Typography align='justify' my={1}>
                                        - ISOLAMENTO: September 12-21 2024, MYRO Gallery, Thessaloniki
                                    </Typography>
                                    <Typography align='justify' my={1}>
                                        - ONEIRIC IMAGES: October 10-19 2024, MYRO Gallery, Thessaloniki
                                    </Typography>
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
